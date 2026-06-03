<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoPlayInterval: number | null = null

const slides = [
  {
    id: 1,
    title: '天津市政公路建设成就',
    subtitle: '打造现代化综合交通体系',
    description: '积极推进公路基础设施建设，提升城市交通服务水平',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35683f31af9e?w=1600&h=600&fit=crop',
    color: 'from-blue-900 to-blue-700'
  },
  {
    id: 2,
    title: '智慧交通引领未来',
    subtitle: '科技创新驱动发展',
    description: '运用大数据和人工智能技术，提升交通管理智能化水平',
    imageUrl: 'https://images.unsplash.com/photo-1533122013360-bf8a9c4b3b2a1b8c4b3b2a1?w=1600&h=600&fit=crop',
    color: 'from-green-900 to-green-700'
  },
  {
    id: 3,
    title: '便民服务暖民心',
    subtitle: '政务服务便利化',
    description: '优化办事流程，提升服务质量，让群众少跑腿',
    imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600&h=600&fit=crop',
    color: 'from-red-900 to-red-700'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  autoPlayInterval = window.setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div 
    class="relative h-[500px] md:h-[600px] overflow-hidden">
    <div 
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0 transition-opacity transition-transform duration-700"
      :class="[
        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
      ]"
    >
      <div class="absolute inset-0">
        <img
          :src="slide.imageUrl"
          :alt="slide.title"
          class="w-full h-full object-cover"
        />
        <div 
          class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"
          :class="slide.color"
        ></div>
      </div>
      
      <div class="relative z-20 h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="max-w-2xl">
            <div 
              class="space-y-4"
              :style="{
                transform: index === currentSlide ? 'translateX(0)' : 'translateX(-100px)',
                opacity: index === currentSlide ? '1' : '0',
                transition: 'all 0.8s ease-out'
              }"
            >
              <span class="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
                最新动态
              </span>
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {{ slide.title }}
              </h2>
              <p class="text-xl md:text-2xl text-white/90 mb-2">
                {{ slide.subtitle }}
              </p>
              <p class="text-lg text-white/80 mb-8 max-w-xl">
                {{ slide.description }}
              </p>
              <div class="flex flex-wrap gap-4">
                <button class="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                了解更多
              </button>
              <button class="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                查看详情
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="prevSlide; stopAutoPlay(); startAutoPlay()"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7 7 7"></path>
      </svg>
    </button>
    <button
      @click="nextSlide; stopAutoPlay(); startAutoPlay()"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="goToSlide(index); stopAutoPlay(); startAutoPlay()"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="[
          index === currentSlide 
            ? 'w-12 bg-white' 
            : 'bg-white/50 hover:bg-white/70'
        ]"
      ></button>
    </div>
  </div>
</template>
