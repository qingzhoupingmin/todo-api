<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const departments = [
  { name: '办公室', description: '负责机关日常运转，承担文电、会务、机要、档案、信息、安全、保密、信访、政务公开等工作。' },
  { name: '规划处', description: '负责组织编制市政公路发展规划和年度计划，负责重大建设项目的前期工作。' },
  { name: '建设处', description: '负责市政公路建设市场监管，负责工程建设项目的招投标、质量监督、竣工验收等工作。' },
  { name: '养护处', description: '负责市政公路养护管理，制定养护标准和技术规范，组织实施养护工程。' },
  { name: '路政处', description: '负责市政公路路政管理，保护公路路产路权，查处违法侵占、损坏公路的行为。' },
  { name: '财务处', description: '负责机关财务管理，指导监督下属单位财务工作，负责国有资产管理。' },
  { name: '人事处', description: '负责机关和下属单位的人事管理、机构编制、教育培训等工作。' },
  { name: '科技信息处', description: '负责市政公路科技和信息化工作，组织科技项目研究和成果推广应用。' }
]

const subordinateUnits = [
  '天津市公路工程质量安全监督总站',
  '天津市市政工程设计研究院',
  '天津市公路养护中心',
  '天津市市政设施管理中心',
  '天津市交通工程建设管理中心',
  '天津市市政工程质量检测中心'
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-4">机构职能</h1>
        <div class="flex items-center justify-center space-x-2 text-red-100">
          <a href="/" class="hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="/zwgk" class="hover:text-white transition-colors">政务公开</a>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span>机构职能</span>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            主要职责
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-bold">1</span>
              </div>
              <p class="text-gray-700">贯彻执行国家和本市有关市政公路管理的法律、法规、规章和政策</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-bold">2</span>
              </div>
              <p class="text-gray-700">负责编制市政公路发展规划和年度计划，并组织实施</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-bold">3</span>
              </div>
              <p class="text-gray-700">负责市政公路建设市场和工程质量安全监督管理</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-bold">4</span>
              </div>
              <p class="text-gray-700">负责市政公路养护管理，保障公路安全畅通</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-bold">5</span>
              </div>
              <p class="text-gray-700">负责市政公路路政管理，保护公路路产路权</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-bold">6</span>
              </div>
              <p class="text-gray-700">负责市政公路科技进步和信息化建设工作</p>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            内设机构
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="dept in departments"
              :key="dept.name"
              class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span class="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                {{ dept.name }}
              </h3>
              <p class="text-gray-600">{{ dept.description }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            下属单位
          </h2>
          <div class="bg-white rounded-2xl shadow-sm p-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="(unit, index) in subordinateUnits"
                :key="unit"
                class="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">{{ index + 1 }}</span>
                </div>
                <span class="text-gray-700 font-medium">{{ unit }}</span>
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
