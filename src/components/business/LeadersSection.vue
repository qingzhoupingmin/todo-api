<template>
  <div class="leaders-section">
    <div class="container">
      <div class="section-title">
        <span>领导班子</span>
        <a href="/organization/leaders" class="more-link">更多 ></a>
      </div>

      <div class="leaders-grid">
        <div 
          v-for="leader in leaders.slice(0, 6)" 
          :key="leader.id" 
          class="leader-card"
        >
          <div class="leader-avatar">
            <User class="avatar-icon" />
          </div>
          <h4>{{ leader.name }}</h4>
          <p>{{ leader.position }}</p>
          <span class="view-detail">查看分工 ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import { leaders } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.leaders-section {
  padding: $space-xl 0;

  .leaders-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: $space-md;

    @media (max-width: $breakpoint-xl) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .leader-card {
    text-align: center;
    padding: $space-md;
    background-color: $color-bg-card;
    border-radius: $border-radius-md;
    transition: all 0.3s;

    &:hover {
      box-shadow: $shadow-md;
      transform: translateY(-4px);
    }

    .leader-avatar {
      width: 80px;
      height: 100px;
      margin: 0 auto $space-sm;
      background-color: $color-bg-page;
      border-radius: $border-radius-sm;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .avatar-icon {
        width: 40px;
        height: 40px;
        color: $color-text-muted;
      }
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
      color: $color-text-primary;
      margin-bottom: $space-xs;
    }

    p {
      font-size: 12px;
      color: $color-text-muted;
      margin-bottom: $space-sm;
      line-height: 1.5;
    }

    .view-detail {
      font-size: 12px;
      color: $color-primary;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover .view-detail {
      opacity: 1;
    }
  }
}
</style>