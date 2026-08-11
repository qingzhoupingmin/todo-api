<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const currentDate = ref('')

const updateDate = () => {
  const now = new Date()
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const weekday = weekdays[now.getDay()]
  currentDate.value = `${year}年${month}月${day}日 ${weekday}`
}

let timer: number | null = null

onMounted(() => {
  updateDate()
  timer = window.setInterval(updateDate, 60000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const navItems = [
  { path: '/', name: '首页' },
  { path: '/zwgk', name: '政务公开' },
  { path: '/xwdt', name: '新闻动态' },
  { path: '/zwfw', name: '政务服务' },
  { path: '/zmhd', name: '政民互动' },
  { path: '/ztzl', name: '专题专栏' },
]

const subNavItems = {
  '/zwgk': [
    { path: '/zwgk/ldjs', name: '领导介绍' },
    { path: '/zwgk/jgzn', name: '机构职能' },
    { path: '/zwgk/zcwj', name: '政策文件' },
    { path: '/zwgk/zcjd', name: '政策解读' },
    { path: '/zwgk/ghxx', name: '规划信息' },
    { path: '/zwgk/ksly', name: '招考录用' },
    { path: '/zwgk/xxgk', name: '信息公开' },
  ],
  '/xwdt': [
    { path: '/xwdt/zwdt', name: '政务动态' },
    { path: '/xwdt/tzgg', name: '通知公告' },
    { path: '/xwdt/bmgz', name: '部门工作' },
  ],
  '/zwfw': [
    { path: '/zwfw/bszn', name: '办事指南' },
    { path: '/zwfw/qrxx', name: '权责清单' },
    { path: '/zwfw/sfjd', name: '收费监督' },
  ],
  '/zmhd': [
    { path: '/zmhd/lyzx', name: '留言咨询' },
    { path: '/zmhd/tsjy', name: '投诉建议' },
    { path: '/zmhd/hdjl', name: '互动交流' },
  ],
}

const activeSubMenu = ref<string | null>(null)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleSubMenu = (path: string) => {
  activeSubMenu.value = activeSubMenu.value === path ? null : path
}

const navigate = (path: string) => {
  router.push(path)
  mobileMenuOpen.value = false
  activeSubMenu.value = null
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div class="bg-gradient-to-r from-red-700 to-red-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-10 flex items-center justify-between text-white text-sm">
          <div class="flex items-center space-x-6">
            <span class="font-medium">{{ currentDate }}</span>
            <a href="#" class="hover:text-red-200 transition-colors">公务邮箱</a>
            <a href="#" class="hover:text-red-200 transition-colors">加入收藏</a>
            <a href="#" class="hover:text-red-200 transition-colors">设为首页</a>
          </div>
          <div class="flex items-center space-x-6">
            <a href="#" class="hover:text-red-200 transition-colors">简体</a>
            <a href="#" class="hover:text-red-200 transition-colors">繁体</a>
            <a href="#" class="hover:text-red-200 transition-colors">微博</a>
            <a href="#" class="hover:text-red-200 transition-colors">公众号</a>
            <a href="#" class="hover:text-red-200 transition-colors">无障碍</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center space-x-4 cursor-pointer" @click="navigate('/')">
          <div class="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21l1.65-3.4a5 5 0 0110.7 0L21 21M12 15a5 5 0 100-10 5 5 0 000 10z"></path>
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900 tracking-wide">天津市市政公路管理局</h1>
            <p class="text-xs text-gray-500">TIANJIN MUNICIPAL HIGHWAY ADMINISTRATION</p>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-1">
          <div 
            v-for="item in navItems" 
            :key="item.path"
            class="relative group"
          >
            <button
              @click="navigate(item.path)"
              class="px-5 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium relative"
            >
              {{ item.name }}
              <span v-if="subNavItems[item.path]" class="ml-1">
                <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7 7"></path>
                </svg>
              </span>
            </button>
            <div 
              v-if="subNavItems[item.path]"
              class="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
            >
              <div class="py-2">
                <a
                  v-for="subItem in subNavItems[item.path]"
                  :key="subItem.path"
                  @click="navigate(subItem.path)"
                  class="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                >
                  {{ subItem.name }}
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div class="flex items-center space-x-4">
          <div class="hidden md:block">
            <div class="relative">
              <input
                type="text"
                placeholder="请输入关键词"
                class="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
              <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-700 hover:text-red-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="mobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-100"
    >
      <div class="px-4 py-4 space-y-2">
        <div 
          v-for="item in navItems" 
          :key="item.path"
          class="space-y-2"
        >
          <button
            @click="subNavItems[item.path] ? toggleSubMenu(item.path) : navigate(item.path)"
            class="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
          >
            <span>{{ item.name }}</span>
            <span v-if="subNavItems[item.path]" class="ml-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7 7"></path>
              </svg>
            </span>
          </button>
          <div 
            v-if="subNavItems[item.path] && activeSubMenu === item.path"
            class="ml-4 space-y-1"
          >
            <a
              v-for="subItem in subNavItems[item.path]"
              :key="subItem.path"
              @click="navigate(subItem.path)"
              class="block px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            >
              {{ subItem.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
