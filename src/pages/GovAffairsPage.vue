<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = [
  { name: '领导介绍', path: '/zwgk/ldjs', icon: 'users', color: 'from-blue-500 to-blue-600' },
  { name: '机构职能', path: '/zwgk/jgzn', icon: 'building', color: 'from-green-500 to-green-600' },
  { name: '政策文件', path: '/zwgk/zcwj', icon: 'document', color: 'from-purple-500 to-purple-600' },
  { name: '政策解读', path: '/zwgk/zcjd', icon: 'book', color: 'from-orange-500 to-orange-600' },
  { name: '规划信息', path: '/zwgk/ghxx', icon: 'map', color: 'from-pink-500 to-pink-600' },
  { name: '财政信息', path: '#', icon: 'money', color: 'from-cyan-500 to-cyan-600' }
]

const getIcon = (name: string) => {
  switch(name) {
    case 'users':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>'
    case 'building':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>'
    case 'document':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>'
    case 'book':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>'
    case 'map':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>'
    case 'money':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
    default:
      return ''
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">政务公开</h1>
        <p class="text-xl text-red-100 max-w-2xl mx-auto">坚持以公开为常态、不公开为例外，全面推进决策、执行、管理、服务、结果公开</p>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div
            v-for="category in categories"
            :key="category.path"
            @click="router.push(category.path)"
            class="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <div class="w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4" :class="category.color">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getIcon(category.icon)"></svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
            <p class="text-gray-500 text-sm">点击查看详细信息</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">公开指南</h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">主动公开</h4>
                <p class="text-gray-600 text-sm">对涉及公众利益调整、需要公众广泛知晓或者需要公众参与决策的政府信息，本机关应当主动公开</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">依申请公开</h4>
                <p class="text-gray-600 text-sm">公民、法人或者其他组织可以向本机关申请获取相关政府信息</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© 2024 天津市市政公路管理局 版权所有</p>
      </div>
    </footer>
  </div>
</template>
