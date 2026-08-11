<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'

const functions = [
  {
    id: 1,
    title: '（一）',
    content: '贯彻执行有关市政道桥、公路管理的法律、法规、规章和方针政策，起草相关地方性法规、规章草案和规范性文件并组织实施。'
  },
  {
    id: 2,
    title: '（二）',
    content: '拟订市政道桥、公路专项规划和建设计划；制定市政道桥、公路基础设施养护、维修计划；会同市财政局制定并下达市政道桥、公路养护维修资金计划；负责资金的安排和管理；负责已接收管理的道桥、公路范围内地下管网施工的协调管理。'
  },
  {
    id: 3,
    title: '（三）',
    content: '组织实施市政道桥、公路的养护及大中维修项目；负责对全市市政道桥、公路设施状况进行检测评定，并对运行服务进行监督考核；负责市政道桥、公路设施的综合统计工作；参与市政道桥、公路建设市场的管理。'
  },
  {
    id: 4,
    title: '（四）',
    content: '承担道路、公路运行设施执法监督的相关工作；负责有关行政复议工作；负责市政道桥、公路设施命名申报工作。'
  },
  {
    id: 5,
    title: '（五）',
    content: '负责市政道桥、公路养护维修工程的质量和安全监督。'
  },
  {
    id: 6,
    title: '（六）',
    content: '拟订市政道桥、公路设施有关收费标准；负责高速公路联网收费的管理；编制修订养护工程定额。'
  },
  {
    id: 7,
    title: '（七）',
    content: '组织推动市政道桥、公路养护维修技术发展，拟订行业技术标准及规范，组织科技攻关，推广科技成果；组织实施信息化建设工作。'
  },
  {
    id: 8,
    title: '（八）',
    content: '负责市政道桥、公路基础设施管理。'
  },
  {
    id: 9,
    title: '（九）',
    content: '负责市政道桥、公路养护管理；指导推动市政道桥、公路养护专业技能培训工作；配合有关部门负责专业人员技术资格评审工作；指导有关行业协会、学会工作。'
  },
  {
    id: 10,
    title: '（十）',
    content: '承办市委、市政府交办的其它事项。'
  }
]

const departments = [
  '办公室', '计划处', '设施管理处', '设施养护处', '建设管理处', '规划处', '财务处', '规费管理处', 
  '审计处', '资产管理处', '劳动人事处', '科技处', '安全保卫处(武装部)', '法规处（政策研究室）', 
  '党委办公室', '纪检委（监察室）', '宣传部', '组织部(统战部)', '老干部处'
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderNav />
    
    <div class="bg-gradient-to-r from-red-700 to-red-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center">
          <a href="/" class="text-red-100 hover:text-white transition-colors">首页</a>
          <svg class="w-4 h-4 text-red-100 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <a href="/zwgk" class="text-red-100 hover:text-white transition-colors">政务公开</a>
          <svg class="w-4 h-4 text-red-100 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="text-white">机构职能</span>
        </div>
        <h1 class="text-4xl font-bold text-white mt-4">机构职能</h1>
      </div>
    </div>

    <div class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div class="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
            <h2 class="text-xl font-bold text-white">主要职能</h2>
          </div>
          <div class="p-6">
            <div class="space-y-6">
              <div 
                v-for="func in functions" 
                :key="func.id"
                class="flex gap-4"
              >
                <span class="flex-shrink-0 w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-bold text-lg">
                  {{ func.id }}
                </span>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ func.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ func.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div class="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
            <h2 class="text-xl font-bold text-white">内设机构</h2>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-6">天津市市政公路管理局机关内设19个职能处室：</p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div 
                v-for="(dept, index) in departments" 
                :key="index"
                class="flex items-center justify-center h-14 bg-gray-50 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
              >
                <span class="text-gray-700">{{ dept }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">联系我们</h3>
            <p class="text-gray-400 text-sm">地址：天津市河东区十一经路100号</p>
            <p class="text-gray-400 text-sm">邮编：300171</p>
            <p class="text-gray-400 text-sm">电话：022-24136666</p>
            <p class="text-gray-400 text-sm">传真：022-24136688</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">快速链接</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务公开</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政务服务</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">政民互动</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">专题专栏</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">相关网站</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">天津市人民政府</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">交通运输部</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">中国公路网</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">网站地图</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">网站声明</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">使用帮助</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-500 text-sm">© 2024 天津市市政公路管理局 版权所有</p>
          <p class="text-gray-600 text-xs mt-2">津ICP备XXXXXXXX号-1 | 津公网安备XXXXXXXXXXXXXX号</p>
        </div>
      </div>
    </footer>
  </div>
</template>
