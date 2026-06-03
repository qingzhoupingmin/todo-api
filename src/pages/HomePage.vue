<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'
import HeroCarousel from '../components/HeroCarousel.vue'
import { ref } from 'vue'

const newsItems = [
  { id: 1, title: '聚焦2026世界智能产业博览会', date: '2026-05-27', tag: '工作动态' },
  { id: 2, title: '李强主持召开国务院常务会议 研究推进全国统一大...', date: '2026-05-22', tag: '工作动态' },
  { id: 3, title: '2026世界智能产业博览会将于5月28日在天津举行', date: '2026-05-18', tag: '工作动态' },
  { id: 4, title: '以科技之力驭浪行舟', date: '2026-05-13', tag: '工作动态' },
  { id: 5, title: '天津海域公布渔船推荐航路', date: '2026-05-11', tag: '工作动态' },
  { id: 6, title: '总书记寄语广大青年建功奋进新征程', date: '2026-05-07', tag: '工作动态' },
]

const noticeItems = [
  { id: 1, title: '天津市市政公路管理局关于印发《2026年工作要点》的通知', date: '2026-05-28', type: '通知' },
  { id: 2, title: '关于加强公路养护管理的通知', date: '2026-05-20', type: '通知' },
  { id: 3, title: '关于开展安全生产专项检查的通知', date: '2026-05-15', type: '通知' },
]

const policies = [
  { id: 1, title: '天津市人民政府关于加强公路养护管理的意见', date: '2026-01-10', type: '政府文件' },
  { id: 2, title: '市政工程建设项目管理办法', date: '2026-01-08', type: '部门规章' },
  { id: 3, title: '公路工程质量监督实施细则', date: '2026-01-05', type: '规范性文件' },
  { id: 4, title: '关于优化行政审批流程的通知', date: '2026-01-03', type: '通知' },
]

const interpretations = [
  { id: 1, title: '《天津市公路管理条例》修订解读', date: '2026-01-15' },
  { id: 2, title: '关于加强公路养护管理意见的政策解读', date: '2026-01-12' },
  { id: 3, title: '市政工程建设项目管理办法解读', date: '2026-01-08' },
]

const plans = [
  { id: 1, title: '天津市市政公路发展“十四五”规划', date: '2026-01-15', status: '已发布' },
  { id: 2, title: '2026年度公路建设计划', date: '2026-01-10', status: '已发布' },
  { id: 3, title: '智慧交通发展专项规划', date: '2025-12-25', status: '已发布' },
]

const quickLinks = [
  { icon: 'users', title: '领导介绍', path: '/zwgk/ldjs', color: 'from-blue-500 to-blue-600' },
  { icon: 'building', title: '机构职能', path: '/zwgk/jgzn', color: 'from-green-500 to-green-600' },
  { icon: 'file-text', title: '政策文件', path: '/zwgk/zcwj', color: 'from-purple-500 to-purple-600' },
  { icon: 'book-open', title: '政策解读', path: '/zwgk/zcjd', color: 'from-orange-500 to-orange-600' },
  { icon: 'map', title: '规划信息', path: '/zwgk/ghxx', color: 'from-pink-500 to-pink-600' },
  { icon: 'phone', title: '政民互动', path: '/zmhd', color: 'from-cyan-500 to-cyan-600' },
]

const rightLinks = [
  { title: '统计数据', icon: 'chart', color: 'from-orange-500 to-red-500' },
  { title: '建议提案办理', icon: 'document', color: 'from-blue-500 to-cyan-500' },
  { title: '资质证件查询', icon: 'id', color: 'from-blue-600 to-indigo-600' },
  { title: '行政执法人员查询', icon: 'police', color: 'from-cyan-500 to-blue-500' },
  { title: '交通运输领域扫黑除恶线索征集', icon: 'search', color: 'from-blue-500 to-blue-600' },
  { title: '公路养护管理投诉举报', icon: 'report', color: 'from-gray-500 to-gray-600' },
  { title: '交通运输建设工程投诉举报', icon: 'warning', color: 'from-orange-600 to-red-600' },
]

const specialBanners = [
  { id: 1, title: '中华民族共同体意识', color: 'from-red-600 to-red-800' },
  { id: 2, title: '行业文明创建', color: 'from-red-500 to-orange-500' },
  { id: 3, title: '涉企行政检查', color: 'from-blue-600 to-cyan-600' },
  { id: 4, title: '普法依法治理', color: 'from-blue-500 to-indigo-600' },
  { id: 5, title: '铸牢中华民族共同体意识', color: 'from-red-700 to-red-900' },
]

const govOpenItems = [
  { title: '政府信息公开指南', icon: 'guide' },
  { title: '政府信息公开制度', icon: 'law' },
  { title: '法定主动公开内容', icon: 'list' },
  { title: '政府信息公开年报', icon: 'chart' },
  { title: '依申请公开', icon: 'apply' },
]

const websiteLinks = [
  { name: '中华人民共和国中央人民政府' },
  { name: '中华人民共和国交通运输部' },
  { name: '天津市人民政府' },
  { name: '廉韵津沽' },
]

const stats = [
  { number: '1268', label: '公路总里程(公里)' },
  { number: '452', label: '桥梁总数(座)' },
  { number: '2380', label: '养护人员(人)' },
  { number: '99.8%', label: '路况优良率' },
]

const activeTab = ref('news')

const getIcon = (name: string) => {
  switch(name) {
    case 'users': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>'
    case 'building': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>'
    case 'file-text': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>'
    case 'book-open': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>'
    case 'map': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>'
    case 'phone': return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>'
    default: return ''
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    <HeroCarousel />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex gap-8">
        <!-- 左侧快捷入口 -->
        <div class="hidden lg:block w-32 space-y-4 flex-shrink-0">
          <div 
            v-for="(link, index) in rightLinks.slice(0, 4)" 
            :key="link.title"
            class="group cursor-pointer"
          >
            <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br rounded-lg flex items-center justify-center" :class="link.color">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <p class="text-center text-gray-800 font-medium mt-3 text-sm">{{ link.title }}</p>
            </div>
          </div>
        </div>

        <!-- 主内容区 -->
        <div class="flex-1">
          <!-- 统计数据 -->
          <div class="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">
                  {{ stat.number }}
                </div>
                <div class="text-gray-600 font-medium">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- 政务公开快捷入口 -->
          <div class="mb-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">政务公开</h2>
              <div class="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div
                v-for="link in quickLinks"
                :key="link.path"
                class="group cursor-pointer"
              >
                <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br flex items-center justify-center" :class="link.color">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="getIcon(link.icon)"></svg>
                  </div>
                  <h3 class="text-gray-900 font-semibold group-hover:text-red-600 transition-colors">{{ link.title }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- 专题专栏Banner -->
          <div class="mb-8">
            <div class="bg-white rounded-xl shadow-sm p-4">
              <div class="flex items-center gap-4">
                <button class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <div class="flex-1 overflow-hidden">
                  <div class="flex gap-4">
                    <div
                      v-for="banner in specialBanners"
                      :key="banner.id"
                      class="flex-shrink-0 w-64 h-24 bg-gradient-to-r rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-all"
                      :class="banner.color"
                    >
                      <span class="text-white font-bold text-lg">{{ banner.title }}</span>
                    </div>
                  </div>
                </div>
                <button class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 新闻和政策区域 -->
          <div class="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div class="flex items-center mb-6 border-b border-gray-200">
                <button
                  @click="activeTab = 'news'"
                  class="px-6 py-3 text-lg font-bold border-b-3 transition-colors"
                  :class="activeTab === 'news' ? 'text-red-600 border-red-600' : 'text-gray-500 border-transparent'"
                >
                  政务动态
                </button>
                <button
                  @click="activeTab = 'notice'"
                  class="px-6 py-3 text-lg font-bold border-b-3 transition-colors"
                  :class="activeTab === 'notice' ? 'text-red-600 border-red-600' : 'text-gray-500 border-transparent'"
                >
                  通知公告
                </button>
                <button
                  @click="activeTab = 'department'"
                  class="px-6 py-3 text-lg font-bold border-b-3 transition-colors"
                  :class="activeTab === 'department' ? 'text-red-600 border-red-600' : 'text-gray-500 border-transparent'"
                >
                  部门工作
                </button>
                <a href="#" class="ml-auto text-red-600 hover:text-red-700 font-medium flex items-center">
                  更多 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>

              <div v-show="activeTab === 'news'" class="space-y-3">
                <a
                  v-for="item in newsItems"
                  :key="item.id"
                  href="#"
                  class="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <span class="flex-shrink-0 text-red-600">●</span>
                  <div class="flex-1 min-w-0">
                    <p class="text-gray-800 group-hover:text-red-600 transition-colors truncate">{{ item.title }}</p>
                  </div>
                  <span class="text-gray-500 text-sm flex-shrink-0">[{{ item.date }}]</span>
                </a>
              </div>

              <div v-show="activeTab === 'notice'" class="space-y-3">
                <a
                  v-for="item in noticeItems"
                  :key="item.id"
                  href="#"
                  class="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <span class="flex-shrink-0 text-red-600">●</span>
                  <div class="flex-1 min-w-0">
                    <p class="text-gray-800 group-hover:text-red-600 transition-colors truncate">{{ item.title }}</p>
                  </div>
                  <span class="text-gray-500 text-sm flex-shrink-0">[{{ item.date }}]</span>
                </a>
              </div>

              <div v-show="activeTab === 'department'" class="space-y-3">
                <p class="text-gray-500 text-center py-8">暂无内容</p>
              </div>
            </div>

            <div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <button class="px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-t-lg">政策文件</button>
                <button class="px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-t-lg hover:bg-gray-200">政策解读</button>
                <button class="px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-t-lg hover:bg-gray-200">规划信息</button>
                <button class="px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-t-lg hover:bg-gray-200">招考录用</button>
              </div>

              <div class="space-y-3">
                <a
                  v-for="item in policies"
                  :key="item.id"
                  href="#"
                  class="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <span class="flex-shrink-0 text-red-600">●</span>
                  <div class="flex-1 min-w-0">
                    <p class="text-gray-800 group-hover:text-red-600 transition-colors truncate">{{ item.title }}</p>
                  </div>
                  <span class="text-gray-500 text-sm flex-shrink-0">[{{ item.date }}]</span>
                </a>
              </div>
            </div>
          </div>

          <!-- 政府信息公开区域 -->
          <div class="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-sm p-8 mb-8 border border-blue-100">
            <div class="flex items-center gap-8">
              <div class="text-center">
                <div class="writing-mode-vertical text-2xl font-bold text-blue-800 tracking-wider">
                  <span class="block">政</span>
                  <span class="block">府</span>
                  <span class="block">信</span>
                  <span class="block">息</span>
                  <span class="block">公</span>
                  <span class="block">开</span>
                </div>
              </div>
              <div class="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4">
                <div
                  v-for="item in govOpenItems"
                  :key="item.title"
                  class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{{ item.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 网站链接 -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">网站链接</h3>
            <div class="flex flex-wrap gap-6">
              <a
                v-for="link in websiteLinks"
                :key="link.name"
                href="#"
                class="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>

        <!-- 右侧快捷入口 -->
        <div class="hidden lg:block w-32 space-y-4 flex-shrink-0">
          <div 
            v-for="(link, index) in rightLinks.slice(4)" 
            :key="link.title"
            class="group cursor-pointer"
          >
            <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br rounded-lg flex items-center justify-center" :class="link.color">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <p class="text-center text-gray-800 font-medium mt-3 text-sm">{{ link.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 政民互动 -->
    <div class="bg-gradient-to-br from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">政民互动</h2>
        <p class="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          欢迎您对市政公路工作提出宝贵意见和建议，我们将认真听取并积极改进
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-all duration-300 shadow-lg">
            我要咨询
          </button>
          <button class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            我要投诉
          </button>
          <button class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            我要建议
          </button>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21l1.65-3.4a5 5 0 0110.7 0L21 21M12 15a5 5 0 100-10 5 5 0 000 10z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold">天津市市政公路管理局</h3>
              </div>
            </div>
            
            <div class="space-y-3 text-gray-300">
              <p class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                地址：天津市河东区十一经路100号
              </p>
              <p class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                邮编：300171
              </p>
              <p class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                联系电话：022-24136666
              </p>
              <p class="flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4a2 2 0 012-2v-6a2 2 0 012-2H9a2 2 0 01-2-2v6a2 2 0 012 2h2a2 2 0 012-2v4a2 2 0 012 2H17a2 2 0 012-2v-4z"></path>
                </svg>
                传真：022-24136688
              </p>
            </div>

            <div class="flex space-x-4 mt-6">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-2.209 0-4 1.79-4 4 0 2.209 1.791 4 4 4 2.209 0 4-1.791 4-4 0-2.21-1.791-4-4-4zm0 10.162c-2.209 0-4 1.791-4 4 0 2.21 1.791 4 4 4s4-1.79 4-4c0-2.209-1.791-4-4-4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">快速链接</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务公开</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务服务</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政民互动</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站地图</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">服务</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站声明</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站地图</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p class="mb-2">主办单位：天津市市政公路管理局</p>
          <p class="mb-2">津ICP备XXXXXXXX号-X | 网站标识码：XXXXXXXXXX</p>
          <p>津公网安备 XXXXXXXXXXX号 | 建议使用IE8.0以上版本浏览本站</p>
        </div>
      </div>
    </footer>

    <!-- 回到顶部 -->
    <button class="fixed bottom-8 right-8 w-12 h-12 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all transform hover:scale-110 flex items-center justify-center">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
</template>
