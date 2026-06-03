<template>
  <div class="banner">
    <div class="banner-container">
      <div 
        v-for="(item, index) in bannerItems" 
        :key="item.id"
        class="banner-item"
        :class="{ active: currentIndex === index }"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1>{{ item.title }}</h1>
          <p>{{ item.subtitle }}</p>
        </div>
      </div>
    </div>

    <div class="banner-indicators">
      <button 
        v-for="(item, index) in bannerItems" 
        :key="item.id"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="goTo(index)"
      ></button>
    </div>

    <button class="banner-prev" @click="prev">
      <ArrowLeft class="icon" />
    </button>
    <button class="banner-next" @click="next">
      <ArrowRight class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { bannerItems } from '@/data/mockData'

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval>

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % bannerItems.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + bannerItems.length) % bannerItems.length
}

const goTo = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  timer = setInterval(next, 6000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 420px;
  overflow: hidden;

  @media (max-width: $breakpoint-lg) {
    height: 320px;
  }

  @media (max-width: $breakpoint-sm) {
    height: 220px;
  }
}

.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .banner-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    text-align: center;

    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

      @media (max-width: $breakpoint-lg) {
        font-size: 36px;
      }

      @media (max-width: $breakpoint-sm) {
        font-size: 24px;
      }
    }

    p {
      font-size: 20px;
      opacity: 0.9;

      @media (max-width: $breakpoint-lg) {
        font-size: 16px;
      }

      @media (max-width: $breakpoint-sm) {
        font-size: 14px;
      }
    }
  }
}

.banner-indicators {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 2;

  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s;

    &.active {
      width: 32px;
      border-radius: 6px;
      background-color: #FFFFFF;
    }
  }
}

.banner-prev,
.banner-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #FFFFFF;
  transition: all 0.3s;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  &.banner-prev {
    left: 24px;
  }

  &.banner-next {
    right: 24px;
  }

  @media (max-width: $breakpoint-sm) {
    width: 32px;
    height: 32px;
    top: auto;
    bottom: 24px;
    transform: none;

    &.banner-prev {
      left: calc(50% - 48px);
    }

    &.banner-next {
      right: calc(50% - 48px);
    }
  }
}
</style>