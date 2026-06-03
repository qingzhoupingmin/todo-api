<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const interpretations = [
  { id: 1, title: '《天津市公路管理条例》修订解读', date: '2024-01-15', summary: '本次修订主要加强了公路养护管理，完善了路政执法机制，强化了安全保障措施。' },
  { id: 2, title: '关于加强公路养护管理意见的政策解读', date: '2024-01-12', summary: '明确了公路养护责任主体，建立了养护资金保障机制，提升了养护质量标准。' },
  { id: 3, title: '市政工程建设项目管理办法解读', date: '2024-01-08', summary: '规范了项目招投标流程，加强了质量安全监管，完善了竣工验收制度。' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">政策解读</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="/zwgk" class="hover:text-white transition-colors">政务公开</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>政策解读</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <div
            v-for="item in interpretations"
            :key="item.id"
            class="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow"
          >
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
                <p class="text-sm text-gray-500">{{ item.date }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">{{ item.summary }}</p>
            <button class="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center">
              查看详情 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
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
