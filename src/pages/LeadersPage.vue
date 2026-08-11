<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const leaders = [
  { name: '张建国', position: '局长、党组书记', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', introduction: '主持全面工作，负责党的建设和行政工作' },
  { name: '李明华', position: '副局长、党组成员', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face', introduction: '负责规划、建设和工程管理工作' },
  { name: '王秀兰', position: '副局长、党组成员', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', introduction: '负责养护、路政和安全管理工作' },
  { name: '赵文强', position: '副局长、党组成员', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', introduction: '负责政务服务、信息化和财务工作' },
  { name: '刘冬梅', position: '纪检组长、党组成员', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face', introduction: '负责纪检监察和党风廉政建设工作' },
  { name: '陈光明', position: '总工程师', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', introduction: '负责技术标准、质量监督和科技工作' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">领导介绍</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="/zwgk" class="hover:text-white transition-colors">政务公开</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>领导介绍</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="leader in leaders"
            :key="leader.name"
            class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="relative">
              <img :src="leader.avatar" :alt="leader.name" class="w-full h-72 object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-bold text-white mb-1">{{ leader.name }}</h3>
                <p class="text-red-200">{{ leader.position }}</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600">{{ leader.introduction }}</p>
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
