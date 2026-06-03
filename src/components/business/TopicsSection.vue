<template>
  <div class="topics-section">
    <div class="container">
      <div class="section-title">
        <span>专题专栏</span>
        <a href="/news/special" class="more-link">更多 ></a>
      </div>

      <div class="topics-grid">
        <div 
          v-for="topic in specialTopics" 
          :key="topic.id" 
          class="topic-card"
          :style="{ '--topic-color': topic.color }"
        >
          <div class="topic-icon">
            <component :is="getIcon(topic.icon)" class="icon" />
          </div>
          <h4>{{ topic.name }}</h4>
          <span class="topic-arrow">进入专题 ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, CircleCheckFilled, Trophy, Check } from '@element-plus/icons-vue'
import { specialTopics } from '@/data/mockData'

const iconMap: Record<string, any> = {
  Heart: Trophy,
  Shield: CircleCheckFilled,
  Leaf: Check,
  Star
}

const getIcon = (iconName: string) => {
  return iconMap[iconName] || Star
}
</script>

<style lang="scss" scoped>
.topics-section {
  padding: $space-xl 0;

  .topics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $space-lg;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }

  .topic-card {
    position: relative;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-bg-card;
    border-radius: $border-radius-lg;
    overflow: hidden;
    transition: all 0.3s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background-color: var(--topic-color);
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-md;
    }

    .topic-icon {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(30, 90, 168, 0.1);
      border-radius: 50%;
      margin-bottom: $space-md;

      .icon {
        width: 28px;
        height: 28px;
        color: var(--topic-color);
      }
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
      color: $color-text-primary;
      margin-bottom: $space-sm;
    }

    .topic-arrow {
      font-size: 12px;
      color: var(--topic-color);
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover .topic-arrow {
      opacity: 1;
    }
  }
}
</style>