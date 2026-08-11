<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const plans = [
  { id: 1, title: '天津市市政公路发展\"十四五\"规划', date: '2024-01-15', status: '已发布' },
  { id: 2, title: '2024年度公路建设计划', date: '2024-01-10', status: '已发布' },
  { id: 3, title: '智慧交通发展专项规划', date: '2023-12-25', status: '已发布' },
  { id: 4, title: '绿色公路建设实施方案', date: '2023-12-20', status: '已发布' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">规划信息</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="/zwgk" class="hover:text-white transition-colors">政务公开</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>规划信息</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-3 mb-2">
                  <span class="px-3 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">{{ plan.status }}</span>
                  <span class="text-sm text-gray-500">{{ plan.date }}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors">{{ plan.title }}</h3>
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
