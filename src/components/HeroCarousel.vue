<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoPlayInterval: number | null = null

const slides = [
  {
    id: 1,
    title: '深入贯彻落实二十大精神',
    subtitle: '推进市政公路事业高质量发展',
    color: 'from-red-700 to-red-800'
  },
  {
    id: 2,
    title: '服务群众 保障民生',
    subtitle: '持续优化公路基础设施服务质量',
    color: 'from-blue-700 to-blue-800'
  },
  {
    id: 3,
    title: '安全生产 警钟长鸣',
    subtitle: '筑牢安全生产防线 保障公路安全畅通',
    color: 'from-orange-700 to-orange-800'
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
  <div class="relative h-64 md:h-80 overflow-hidden">
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0 transition-opacity duration-700"
      :class="[
        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
      ]"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r"
        :class="slide.color"
      ></div>

      <div class="relative z-20 h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            class="text-center"
            :style="{
              transform: index === currentSlide ? 'translateY(0)' : 'translateY(-20px)',
              opacity: index === currentSlide ? '1' : '0',
              transition: 'all 0.7s ease-out'
            }"
          >
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">
              {{ slide.title }}
            </h2>
            <p class="text-lg md:text-xl text-white/90">
              {{ slide.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="[
          index === currentSlide
            ? 'w-8 bg-white'
            : 'bg-white/50 hover:bg-white/70'
        ]"
      ></button>
    </div>
  </div>
</template>
