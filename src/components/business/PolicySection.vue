<template>
  <div class="policy-section">
    <div class="container">
      <div class="section-title">
        <span>政策文件</span>
        <a href="/policy" class="more-link">更多 ></a>
      </div>

      <div class="policy-list">
        <div 
          v-for="item in policyItems.slice(0, 5)" 
          :key="item.id" 
          class="policy-item"
        >
          <div class="policy-num">{{ item.num }}</div>
          <div class="policy-content">
            <h4>{{ item.title }}</h4>
            <div class="policy-meta">
              <span>发文机构：{{ item.org }}</span>
              <span>发文日期：{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { policyItems } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.policy-section {
  padding: $space-xl 0;

  .policy-list {
    display: flex;
    flex-direction: column;
    gap: $space-md;

    .policy-item {
      display: flex;
      gap: $space-md;
      padding: $space-md;
      background-color: $color-bg-card;
      border-radius: $border-radius-md;
      border-left: 4px solid $color-primary;
      transition: all 0.2s;

      &:hover {
        box-shadow: $shadow-sm;
        transform: translateX(4px);
      }

      .policy-num {
        font-size: 12px;
        color: $color-primary;
        font-weight: 500;
        flex-shrink: 0;
      }

      .policy-content {
        flex: 1;

        h4 {
          font-size: 14px;
          font-weight: 500;
          color: $color-text-primary;
          margin-bottom: $space-xs;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .policy-meta {
          display: flex;
          gap: $space-lg;
          font-size: 12px;
          color: $color-text-muted;

          @media (max-width: $breakpoint-sm) {
            flex-direction: column;
            gap: $space-xs;
          }
        }
      }
    }
  }
}
</style>