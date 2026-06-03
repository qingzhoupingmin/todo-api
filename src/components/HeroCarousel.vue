<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoPlayInterval: number | null = null

const slides = [
  {
    id: 1,
    title: '天津路网',
    subtitle: '天津市市政公路管理局',
    description: '构建现代化交通网络，服务城市发展',
    color: 'from-blue-400 via-blue-500 to-blue-700'
  },
  {
    id: 2,
    title: '智慧交通',
    subtitle: '科技创新引领未来',
    description: '运用大数据技术，提升交通管理智能化水平',
    color: 'from-cyan-400 via-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: '绿色出行',
    subtitle: '建设生态宜居城市',
    description: '推进绿色交通发展，打造美丽天津',
    color: 'from-green-400 via-teal-500 to-cyan-600'
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
  autoPlayInterval = window.setInterval(nextSlide, 6000)
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
    class="relative h-[500px] md:h-[550px] overflow-hidden"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div 
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0 transition-all duration-1000"
      :class="[
        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
      ]"
    >
      <div 
        class="absolute inset-0 bg-gradient-to-b"
        :class="slide.color"
      ></div>
      
      <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
      
      <div class="absolute bottom-0 left-0 right-0 h-48">
        <svg viewBox="0 0 1920 300" preserveAspectRatio="none" class="w-full h-full">
          <defs>
            <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#374151;stop-opacity:1" />
            </linearGradient>
          </defs>
          <path d="M0,150 Q480,120 960,150 T1920,150 L1920,300 L0,300 Z" fill="url(#grassGradient)" />
          <path d="M0,180 Q480,160 960,180 T1920,180 L1920,220 Q960,200 0,220 Z" fill="url(#roadGradient)" />
          <path d="M955,180 L955,300" stroke="#fbbf24" stroke-width="8" />
          <path d="M965,180 L965,300" stroke="#fbbf24" stroke-width="8" />
          <path d="M950,200 L970,200" stroke="#fbbf24" stroke-width="6" />
          <path d="M950,250 L970,250" stroke="#fbbf24" stroke-width="6" />
          <path d="M950,280 L970,280" stroke="#fbbf24" stroke-width="6" />
        </svg>
      </div>

      <div class="absolute bottom-[120px] left-1/2 -translate-x-1/2 flex items-end justify-center gap-3">
        <div class="w-16 h-24 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg shadow-lg">
          <div class="w-full h-8 bg-gray-500"></div>
        </div>
        <div class="w-20 h-32 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg shadow-lg">
          <div class="w-full h-6 bg-gray-500"></div>
        </div>
        <div class="w-24 h-40 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-lg shadow-lg">
          <div class="w-full h-10 bg-gray-600"></div>
        </div>
        <div class="w-28 h-48 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-lg shadow-lg">
          <div class="w-full h-12 bg-gray-600"></div>
        </div>
        <div class="w-24 h-40 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-lg shadow-lg">
          <div class="w-full h-10 bg-gray-600"></div>
        </div>
        <div class="w-20 h-32 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg shadow-lg">
          <div class="w-full h-6 bg-gray-500"></div>
        </div>
        <div class="w-16 h-24 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg shadow-lg">
          <div class="w-full h-8 bg-gray-500"></div>
        </div>
      </div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          v-for="i in 6" 
          :key="i"
          class="absolute rounded-full opacity-40 animate-pulse"
          :style="{
            width: `${8 + Math.random() * 12}px`,
            height: `${8 + Math.random() * 12}px`,
            backgroundColor: '#fff',
            left: `${10 + i * 15 + Math.random() * 5}%`,
            top: `${20 + Math.random() * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }"
        ></div>
      </div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <svg class="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#fff;stop-opacity:0.8" />
              <stop offset="100%" style="stop-color:#fff;stop-opacity:0.2" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="45" r="25" fill="none" stroke="url(#orbitGradient)" stroke-width="0.5" />
          <circle cx="50" cy="45" r="35" fill="none" stroke="url(#orbitGradient)" stroke-width="0.3" />
          <circle cx="50" cy="45" r="45" fill="none" stroke="url(#orbitGradient)" stroke-width="0.2" />
        </svg>
      </div>

      <div class="relative z-20 h-full flex items-center justify-center">
        <div class="text-center px-4">
          <div 
            class="space-y-4"
            :style="{
              transform: index === currentSlide ? 'translateY(0)' : 'translateY(-30px)',
              opacity: index === currentSlide ? '1' : '0',
              transition: 'all 0.8s ease-out'
            }"
          >
            <h2 class="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
              {{ slide.title }}
            </h2>
            <p class="text-xl md:text-2xl text-white/90 mb-6 font-medium">
              {{ slide.subtitle }}
            </p>
            <p class="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {{ slide.description }}
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <button class="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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

    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7 7 7"></path>
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="goToSlide(index)"
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
