<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const newsItems = [
  { id: 1, title: '聚焦2026世界智能产业博览会', date: '2026-05-27', category: '政务动态' },
  { id: 2, title: '李强主持召开国务院常务会议 研究推进全国统一大市场建设工作', date: '2026-05-22', category: '政务动态' },
  { id: 3, title: '2026世界智能产业博览会将于5月28日在天津举行', date: '2026-05-18', category: '政务动态' },
  { id: 4, title: '以科技之力驭浪行舟', date: '2026-05-13', category: '政务动态' },
  { id: 5, title: '天津海域公布渔船推荐航路', date: '2026-05-11', category: '政务动态' },
  { id: 6, title: '总书记寄语广大青年建功奋进新征程', date: '2026-05-07', category: '政务动态' },
  { id: 7, title: '天津市市政公路管理局关于印发《2026年工作要点》的通知', date: '2026-05-28', category: '通知公告' },
  { id: 8, title: '关于加强公路养护管理的通知', date: '2026-05-20', category: '通知公告' },
  { id: 9, title: '关于开展安全生产专项检查的通知', date: '2026-05-15', category: '通知公告' },
]

const categories = ['全部', '政务动态', '通知公告', '部门工作']
const activeCategory = ref('全部')
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">新闻动态</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>新闻动态</span>
        </div>
      </div>
    </div>

    <div class="py-12">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3 mb-8">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-6 py-2 rounded-full transition-all duration-300"
            :class="activeCategory === category ? 'bg-red-600 text-white' : 'bg-white text-gray-600 hover:bg-red-50'"
          >
            {{ category }}
          </button>
        </div>

        <div class="space-y-4">
          <a
            v-for="item in newsItems"
            :key="item.id"
            href="#"
            class="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <span class="inline-block px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full mb-3">{{ item.category }}</span>
                <h3 class="text-xl font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors">{{ item.title }}</h3>
              </div>
              <div class="flex-shrink-0 ml-6">
                <span class="text-gray-500 text-sm">{{ item.date }}</span>
              </div>
            </div>
          </a>
        </div>

        <div class="flex justify-center items-center space-x-2 mt-12">
          <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button class="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">1</button>
          <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors">2</button>
          <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors">3</button>
          <span class="text-gray-400">...</span>
          <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors">10</button>
          <button class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-500">© 2024 天津市市政公路管理局 版权所有</p>
      </div>
    </footer>
  </div>
</template>
