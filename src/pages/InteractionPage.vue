<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'
import { ref } from 'vue'

const formData = ref({
  type: '咨询',
  title: '',
  content: '',
  name: '',
  phone: '',
  email: ''
})

const onSubmit = () => {
  alert('提交成功！我们会尽快处理您的留言。')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">政民互动</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>政民互动</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">在线咨询</h3>
            <p class="text-gray-600 text-sm">有问题可以在线咨询，我们会及时回复</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">投诉举报</h3>
            <p class="text-gray-600 text-sm">发现问题可以投诉举报，我们会认真处理</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">意见建议</h3>
            <p class="text-gray-600 text-sm">欢迎对我们的工作提出宝贵意见和建议</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">我要留言</h2>
          <form @submit.prevent="onSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">留言类型</label>
              <select v-model="formData.type" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                <option>咨询</option>
                <option>投诉</option>
                <option>建议</option>
                <option>举报</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">标题</label>
              <input v-model="formData.title" type="text" placeholder="请输入标题" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">内容</label>
              <textarea v-model="formData.content" rows="6" placeholder="请输入详细内容" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"></textarea>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <input v-model="formData.name" type="text" placeholder="请输入姓名" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">联系电话</label>
                <input v-model="formData.phone" type="tel" placeholder="请输入电话" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">电子邮箱</label>
                <input v-model="formData.email" type="email" placeholder="请输入邮箱" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
              </div>
            </div>
            <button type="submit" class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              提交留言
            </button>
          </form>
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
