<template>
  <div class="notice-section">
    <div class="container">
      <div class="section-title">
        <span>通知公告</span>
        <a href="/news/notices" class="more-link">更多 ></a>
      </div>

      <div class="notice-list">
        <div 
          v-for="item in noticeItems.slice(0, 8)" 
          :key="item.id" 
          class="notice-item"
        >
          <span :class="['tag', getTagClass(item.type)]">[{{ item.type }}]</span>
          <span class="notice-title">{{ item.title }}</span>
          <span class="notice-date">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { noticeItems } from '@/data/mockData'

const getTagClass = (type: string) => {
  const typeMap: Record<string, string> = {
    '招标': 'tag-bid',
    '政策': 'tag-policy',
    '公告': 'tag-announcement',
    '动态': 'tag-dynamic'
  }
  return typeMap[type] || 'tag-announcement'
}
</script>

<style lang="scss" scoped>
.notice-section {
  padding: $space-xl 0;
  background-color: $color-bg-card;

  .notice-list {
    display: flex;
    flex-direction: column;
    gap: $space-sm;

    .notice-item {
      display: flex;
      align-items: center;
      padding: $space-sm $space-md;
      background-color: $color-bg-page;
      border-radius: $border-radius-sm;
      transition: all 0.2s;

      &:hover {
        background-color: $color-bg-hover;
      }

      .tag {
        margin-right: $space-md;
        flex-shrink: 0;
      }

      .notice-title {
        flex: 1;
        font-size: 14px;
        color: $color-text-primary;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-right: $space-md;
      }

      .notice-date {
        font-size: 12px;
        color: $color-text-muted;
        flex-shrink: 0;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: $breakpoint-sm) {
    .notice-item {
      flex-wrap: wrap;
      gap: $space-xs;

      .tag {
        margin-right: $space-sm;
      }

      .notice-title {
        width: 100%;
        margin-right: 0;
      }
    }
  }
}
</style>