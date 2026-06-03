import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import GovAffairsPage from '@/pages/GovAffairsPage.vue'
import LeadersPage from '@/pages/LeadersPage.vue'
import OrganizationPage from '@/pages/OrganizationPage.vue'
import PoliciesPage from '@/pages/PoliciesPage.vue'
import InterpretationPage from '@/pages/InterpretationPage.vue'
import PlanningPage from '@/pages/PlanningPage.vue'
import ServicePage from '@/pages/ServicePage.vue'
import InteractionPage from '@/pages/InteractionPage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import SpecialPage from '@/pages/SpecialPage.vue'

// 定义路由配置
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/zwgk',
    name: 'govAffairs',
    component: GovAffairsPage,
  },
  {
    path: '/zwgk/ldjs',
    name: 'leaders',
    component: LeadersPage,
  },
  {
    path: '/zwgk/jgzn',
    name: 'organization',
    component: OrganizationPage,
  },
  {
    path: '/zwgk/zcwj',
    name: 'policies',
    component: PoliciesPage,
  },
  {
    path: '/zwgk/zcjd',
    name: 'interpretation',
    component: InterpretationPage,
  },
  {
    path: '/zwgk/ghxx',
    name: 'planning',
    component: PlanningPage,
  },
  {
    path: '/zwfw',
    name: 'service',
    component: ServicePage,
  },
  {
    path: '/zmhd',
    name: 'interaction',
    component: InteractionPage,
  },
  {
    path: '/xwdt',
    name: 'news',
    component: NewsPage,
  },
  {
    path: '/ztzl',
    name: 'special',
    component: SpecialPage,
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
