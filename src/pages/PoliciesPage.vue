<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const policies = [
  { id: 1, title: '天津市人民政府关于加强公路养护管理的意见', date: '2024-01-10', type: '政府文件' },
  { id: 2, title: '市政工程建设项目管理办法', date: '2024-01-08', type: '部门规章' },
  { id: 3, title: '公路工程质量监督实施细则', date: '2024-01-05', type: '规范性文件' },
  { id: 4, title: '关于优化行政审批流程的通知', date: '2024-01-03', type: '通知' },
  { id: 5, title: '天津市公路管理条例', date: '2023-12-25', type: '地方法规' },
  { id: 6, title: '关于加强安全生产管理的规定', date: '2023-12-20', type: '部门规章' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">政策文件</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="/zwgk" class="hover:text-white transition-colors">政务公开</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>政策文件</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <div
            v-for="policy in policies"
            :key="policy.id"
            class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-3 mb-2">
                  <span class="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">{{ policy.type }}</span>
                  <span class="text-sm text-gray-500">{{ policy.date }}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors">{{ policy.title }}</h3>
              </div>
              <div class="flex-shrink-0 ml-4">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
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
