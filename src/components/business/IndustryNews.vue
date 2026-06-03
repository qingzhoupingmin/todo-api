<template>
  <div class="industry-news">
    <div class="container">
      <div class="section-title">
        <span>行业资讯</span>
        <a href="/news/industry" class="more-link">更多 ></a>
      </div>

      <div class="news-grid">
        <div 
          v-for="item in industryNews" 
          :key="item.id" 
          class="news-item"
        >
          <span class="news-date">{{ item.date }}</span>
          <span class="news-title">{{ item.title }}</span>
          <ArrowRight class="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { industryNews } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.industry-news {
  padding: $space-xl 0;
  background-color: $color-bg-card;

  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $space-sm;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }

  .news-item {
    display: flex;
    align-items: center;
    padding: $space-sm $space-md;
    background-color: $color-bg-page;
    border-radius: $border-radius-sm;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: $color-bg-hover;
      padding-left: $space-lg;
    }

    .news-date {
      font-size: 12px;
      color: $color-text-muted;
      margin-right: $space-md;
      flex-shrink: 0;
    }

    .news-title {
      flex: 1;
      font-size: 14px;
      color: $color-text-primary;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .arrow-icon {
      width: 16px;
      height: 16px;
      color: $color-text-muted;
      margin-left: $space-sm;
      transition: all 0.2s;
    }

    &:hover .arrow-icon {
      color: $color-primary;
      transform: translateX(4px);
    }
  }
}
</style>