<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const specialTopics = [
  { id: 1, title: '中华民族共同体意识', description: '深入开展民族团结进步创建，铸牢中华民族共同体意识', image: 'https://images.unsplash.com/photo-1529161697922-c5e6b89e8f53?w=400&h=300&fit=crop', date: '2026-05-20' },
  { id: 2, title: '行业文明创建', description: '推进精神文明建设，提升行业文明服务水平', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', date: '2026-05-18' },
  { id: 3, title: '涉企行政检查', description: '规范涉企行政执法检查，优化营商环境', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop', date: '2026-05-15' },
  { id: 4, title: '普法依法治理', description: '深入开展法治宣传教育，全面推进依法治市', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&h=300&fit=crop', date: '2026-05-12' },
  { id: 5, title: '安全生产专项整治', description: '全面开展安全生产专项整治三年行动', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop', date: '2026-05-10' },
  { id: 6, title: '优化营商环境', description: '持续优化营商环境，促进经济高质量发展', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', date: '2026-05-08' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">专题专栏</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>专题专栏</span>
        </div>
      </div>
    </div>

    <div class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="topic in specialTopics"
            :key="topic.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
          >
            <div class="relative h-48 overflow-hidden">
              <img :src="topic.image" :alt="topic.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div class="p-6">
              <span class="text-gray-500 text-sm mb-2 block">{{ topic.date }}</span>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{{ topic.title }}</h3>
              <p class="text-gray-600 mb-4">{{ topic.description }}</p>
              <div class="flex items-center text-red-600 font-medium">
                查看详情
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </div>
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
