import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Service from '@/views/Service.vue'
import Interactive from '@/views/Interactive.vue'
import Organization from '@/views/Organization.vue'
import Policy from '@/views/Policy.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/interactive',
    name: 'interactive',
    component: Interactive
  },
  {
    path: '/organization',
    name: 'organization',
    component: Organization
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router