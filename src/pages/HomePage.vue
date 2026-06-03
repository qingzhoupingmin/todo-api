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

const quickLinks = [
  { title: '领导介绍', path: '/zwgk/ldjs' },
  { title: '机构职能', path: '/zwgk/jgzn' },
  { title: '政策文件', path: '/zwgk/zcwj' },
  { title: '政策解读', path: '/zwgk/zcjd' },
  { title: '规划信息', path: '/zwgk/ghxx' },
  { title: '政民互动', path: '/zmhd' },
]

const govOpenItems = [
  { title: '政府信息公开指南' },
  { title: '政府信息公开制度' },
  { title: '法定主动公开内容' },
  { title: '政府信息公开年报' },
  { title: '依申请公开' },
]

const websiteLinks = [
  { name: '中华人民共和国中央人民政府' },
  { name: '中华人民共和国交通运输部' },
  { name: '天津市人民政府' },
  { name: '廉韵津沽' },
]

const activeTab = ref('news')
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <HeaderNav />
    <HeroCarousel />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- 政务公开快捷入口 -->
      <div class="mb-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="link in quickLinks"
            :key="link.path"
            class="cursor-pointer"
          >
            <a :href="link.path" class="block bg-white border border-gray-200 p-4 hover:bg-red-50 hover:border-red-200 transition-all text-center">
              <h3 class="text-gray-800 font-medium">{{ link.title }}</h3>
            </a>
          </div>
        </div>
      </div>

      <!-- 新闻和政策区域 -->
      <div class="grid lg:grid-cols-3 gap-8 mb-8">
        <!-- 新闻动态 -->
        <div class="lg:col-span-2 bg-white border border-gray-200">
          <div class="flex items-center border-b-2 border-gray-200">
            <button
              @click="activeTab = 'news'"
              class="px-6 py-4 text-lg font-medium transition-colors"
              :class="activeTab === 'news' ? 'text-red-600 border-b-2 border-red-600 -mb-0.5' : 'text-gray-600 hover:text-gray-800'"
            >
              政务动态
            </button>
            <button
              @click="activeTab = 'notice'"
              class="px-6 py-4 text-lg font-medium transition-colors"
              :class="activeTab === 'notice' ? 'text-red-600 border-b-2 border-red-600 -mb-0.5' : 'text-gray-600 hover:text-gray-800'"
            >
              通知公告
            </button>
            <a href="#" class="ml-auto text-gray-600 hover:text-red-600 px-6 py-4 text-sm">
              更多 &gt;
            </a>
          </div>

          <div v-show="activeTab === 'news'" class="p-4">
            <ul class="space-y-3">
              <li
                v-for="item in newsItems"
                :key="item.id"
              >
                <a href="#" class="flex items-center justify-between p-2 hover:bg-gray-50 group">
                  <span class="text-gray-800 group-hover:text-red-600 flex items-center">
                    <span class="text-red-600 mr-2">●</span>
                    {{ item.title }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ item.date }}</span>
                </a>
              </li>
            </ul>
          </div>

          <div v-show="activeTab === 'notice'" class="p-4">
            <ul class="space-y-3">
              <li
                v-for="item in noticeItems"
                :key="item.id"
              >
                <a href="#" class="flex items-center justify-between p-2 hover:bg-gray-50 group">
                  <span class="text-gray-800 group-hover:text-red-600 flex items-center">
                    <span class="text-red-600 mr-2">●</span>
                    {{ item.title }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ item.date }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 政策文件 -->
        <div class="bg-white border border-gray-200">
          <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 py-4">
            <h3 class="text-lg font-medium text-red-600">政策文件</h3>
            <a href="#" class="text-gray-600 hover:text-red-600 text-sm">
              更多 &gt;
            </a>
          </div>
          <div class="p-4">
            <ul class="space-y-3">
              <li
                v-for="item in policies"
                :key="item.id"
              >
                <a href="#" class="flex items-center justify-between p-2 hover:bg-gray-50 group">
                  <span class="text-gray-800 group-hover:text-red-600 flex items-center">
                    <span class="text-red-600 mr-2">●</span>
                    {{ item.title }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ item.date }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 政府信息公开区域 -->
      <div class="bg-white border border-gray-200 mb-8">
        <div class="border-b-2 border-gray-200 px-6 py-4">
          <h3 class="text-lg font-medium text-red-600">政府信息公开</h3>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div
              v-for="item in govOpenItems"
              :key="item.title"
              class="text-center"
            >
              <a href="#" class="block py-3 px-4 border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-colors">
                <span class="text-gray-800">{{ item.title }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 网站链接 -->
      <div class="bg-white border border-gray-200 mb-8">
        <div class="border-b-2 border-gray-200 px-6 py-4">
          <h3 class="text-lg font-medium text-gray-800">网站链接</h3>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-6">
            <a
              v-for="link in websiteLinks"
              :key="link.name"
              href="#"
              class="text-gray-600 hover:text-red-600 transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <div class="mb-6">
              <h3 class="text-xl font-bold">天津市市政公路管理局</h3>
            </div>
            
            <div class="space-y-2 text-gray-400 text-sm">
              <p>地址：天津市河东区十一经路100号</p>
              <p>邮编：300171</p>
              <p>联系电话：022-24136666</p>
              <p>传真：022-24136688</p>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-4">快速链接</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务公开</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务服务</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政民互动</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站地图</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">服务</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站声明</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站地图</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p class="mb-2">主办单位：天津市市政公路管理局</p>
          <p class="mb-2">津ICP备XXXXXXXX号-X | 网站标识码：XXXXXXXXXX</p>
          <p>津公网安备 XXXXXXXXXXX号 | 建议使用IE8.0以上版本浏览本站</p>
        </div>
      </div>
    </footer>
  </div>
</template>
