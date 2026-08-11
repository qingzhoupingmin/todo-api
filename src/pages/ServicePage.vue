<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const services = [
  { name: '公路施工许可', icon: 'document' },
  { name: '路政审批服务', icon: 'clipboard' },
  { name: '资质证书查询', icon: 'search' },
  { name: '办事进度查询', icon: 'clock' },
  { name: '在线咨询', icon: 'chat' },
  { name: '投诉建议', icon: 'feedback' }
]

const getIcon = (name: string) => {
  switch(name) {
    case 'document':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>'
    case 'clipboard':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>'
    case 'search':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>'
    case 'clock':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
    case 'chat':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>'
    case 'feedback':
      return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>'
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
        <h1 class="text-4xl font-bold text-white mb-4">政务服务</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>政务服务</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.name"
            class="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getIcon(service.icon)"></svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ service.name }}</h3>
            <p class="text-gray-500 text-sm">点击进入服务大厅</p>
          </div>
        </div>

        <div class="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">办事指南</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">在线申请</h4>
                <p class="text-gray-600 text-sm">填写申请信息，上传相关材料</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">受理审核</h4>
                <p class="text-gray-600 text-sm">工作人员在3个工作日内审核</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span class="text-yellow-600 font-bold">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">办理审批</h4>
                <p class="text-gray-600 text-sm">根据业务类型在规定时限内完成</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span class="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">领取结果</h4>
                <p class="text-gray-600 text-sm">在线获取或现场领取办理结果</p>
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
