<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'
import HeroCarousel from '../components/HeroCarousel.vue'

const newsItems = [
  { id: 1, title: '天津市市政公路管理局召开2024年度工作会议', date: '2024-01-15', tag: '工作动态' },
  { id: 2, title: '我市公路养护工程取得阶段性进展', date: '2024-01-14', tag: '工程建设' },
  { id: 3, title: '关于加强冬季公路交通安全管理的通知', date: '2024-01-13', tag: '通知公告' },
  { id: 4, title: '2023年度市政公路建设成果展示', date: '2024-01-12', tag: '工作动态' },
  { id: 5, title: '《天津市公路管理条例》修订解读', date: '2024-01-11', tag: '政策解读' },
  { id: 6, title: '我市启动智慧交通建设试点项目', date: '2024-01-10', tag: '科技创新' }
]

const policyItems = [
  { id: 1, title: '天津市人民政府关于加强公路养护管理的意见', date: '2024-01-10', type: '政府文件' },
  { id: 2, title: '市政工程建设项目管理办法', date: '2024-01-08', type: '部门规章' },
  { id: 3, title: '公路工程质量监督实施细则', date: '2024-01-05', type: '规范性文件' },
  { id: 4, title: '关于优化行政审批流程的通知', date: '2024-01-03', type: '通知' }
]

const quickLinks = [
  { icon: 'users', title: '领导介绍', path: '/zwgk/ldjs', color: 'from-blue-500 to-blue-600' },
  { icon: 'building', title: '机构职能', path: '/zwgk/jgzn', color: 'from-green-500 to-green-600' },
  { icon: 'file-text', title: '政策文件', path: '/zwgk/zcwj', color: 'from-purple-500 to-purple-600' },
  { icon: 'book-open', title: '政策解读', path: '/zwgk/zcjd', color: 'from-orange-500 to-orange-600' },
  { icon: 'map', title: '规划信息', path: '/zwgk/ghxx', color: 'from-pink-500 to-pink-600' },
  { icon: 'phone', title: '政民互动', path: '/zmhd', color: 'from-cyan-500 to-cyan-600' }
]

const stats = [
  { number: '1268', label: '公路总里程(公里)' },
  { number: '452', label: '桥梁总数(座)' },
  { number: '2380', label: '养护人员(人)' },
  { number: '99.8%', label: '路况优良率' }
]

const getIcon = (name: string) => {
  switch(name) {
    case 'users': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>'
    case 'building': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>'
    case 'file-text': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>'
    case 'book-open': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>'
    case 'map': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>'
    case 'phone': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>'
    default: return ''
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    <HeroCarousel />

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">
              {{ stat.number }}
            </div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">政务公开</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="link in quickLinks"
            :key="link.path"
            class="group cursor-pointer"
          >
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br flex items-center justify-center" :class="link.color">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getIcon(link.icon)"></svg>
              </div>
              <h3 class="text-gray-900 font-semibold group-hover:text-red-600 transition-colors">{{ link.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <div class="flex items-center justify-between mb-8">
              <div>
                <h2 class="text-2xl font-bold text-gray-900">政务动态</h2>
                <div class="w-12 h-1 bg-red-600 mt-2 rounded-full"></div>
              </div>
              <a href="#" class="text-red-600 hover:text-red-700 font-medium flex items-center">
                更多 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div class="space-y-4">
              <a
                v-for="item in newsItems"
                :key="item.id"
                href="#"
                class="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <span class="flex-shrink-0 px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
                  {{ item.tag }}
                </span>
                <div class="flex-1 min-w-0">
                  <p class="text-gray-900 font-medium group-hover:text-red-600 transition-colors line-clamp-2">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-gray-500 mt-1">{{ item.date }}</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-8">
              <div>
                <h2 class="text-2xl font-bold text-gray-900">政策文件</h2>
                <div class="w-12 h-1 bg-red-600 mt-2 rounded-full"></div>
              </div>
              <a href="#" class="text-red-600 hover:text-red-700 font-medium flex items-center">
                更多 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div class="space-y-4">
              <a
                v-for="item in policyItems"
                :key="item.id"
                href="#"
                class="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group bg-gradient-to-r from-gray-50 to-white border border-gray-100"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <span class="text-xs text-gray-500">{{ item.type }}</span>
                  <p class="text-gray-900 font-medium group-hover:text-red-600 transition-colors line-clamp-2">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-gray-500 mt-1">{{ item.date }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-red-700 to-red-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">政民互动</h2>
        <p class="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          欢迎您对市政公路工作提出宝贵意见和建议，我们将认真听取并积极改进
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-all duration-300 shadow-lg">
            我要咨询
          </button>
          <button class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            我要投诉
          </button>
          <button class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            我要建议
          </button>
        </div>
      </div>
    </section>

    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21l1.65-3.4a5 5 0 0110.7 0L21 21M12 15a5 5 0 100-10 5 5 0 000 10z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold">天津市市政公路管理局</h3>
            </div>
            <p class="text-gray-400 mb-4">
              负责全市市政公路的规划、建设、养护和管理工作，为市民提供优质的交通服务。
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">快速链接</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务公开</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务服务</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政民互动</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站地图</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">联系我们</h4>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>天津市河东区</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>022-12345678</span>
              </li>
              <li class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>info@tj.gov.cn</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2024 天津市市政公路管理局 版权所有 | 网站标识码：XXXXXXXXX</p>
          <p class="mt-2">ICP备案号：津ICP备XXXXXXXX号-X | 津公网安备 XXXXXXXXXXX号</p>
        </div>
      </div>
    </footer>
  </div>
</template>
