<template>
  <div class="news-section">
    <div class="container">
      <div class="section-title">
        <span>要闻动态</span>
        <a href="/news" class="more-link">更多 ></a>
      </div>

      <div class="news-content">
        <div class="news-main">
          <div class="news-card large" v-if="newsItems.length > 0">
            <div class="news-image">
              <img :src="newsItems[0].image" :alt="newsItems[0].title" />
            </div>
            <div class="news-info">
              <span :class="['tag', `tag-${newsItems[0].type.toLowerCase()}`]">[{{ newsItems[0].type }}]</span>
              <h3>{{ newsItems[0].title }}</h3>
              <span class="news-date">{{ newsItems[0].date }}</span>
            </div>
          </div>
        </div>

        <div class="news-list">
          <div 
            v-for="item in newsItems.slice(1, 5)" 
            :key="item.id" 
            class="news-card small"
          >
            <div class="news-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="news-info">
              <h4>{{ item.title }}</h4>
              <span class="news-date">{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { newsItems } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.news-section {
  padding: $space-xl 0;

  .news-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $space-lg;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }

  .news-main {
    .news-card.large {
      display: flex;
      flex-direction: column;
      height: 100%;

      .news-image {
        flex: 1;
        min-height: 240px;
        overflow: hidden;
        border-radius: $border-radius-md $border-radius-md 0 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .news-info {
        padding: $space-md;
        background-color: $color-bg-card;
        border-radius: 0 0 $border-radius-md $border-radius-md;

        h3 {
          font-size: 18px;
          font-weight: 600;
          color: $color-text-primary;
          margin: $space-sm 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .news-date {
          font-size: 12px;
          color: $color-text-muted;
        }
      }
    }
  }

  .news-list {
    display: flex;
    flex-direction: column;
    gap: $space-md;

    .news-card.small {
      display: flex;
      gap: $space-md;
      background-color: $color-bg-card;
      padding: $space-sm;
      border-radius: $border-radius-md;
      transition: all 0.2s;

      &:hover {
        box-shadow: $shadow-sm;
      }

      .news-image {
        width: 100px;
        height: 75px;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: $border-radius-sm;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .news-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;

        h4 {
          font-size: 14px;
          font-weight: 500;
          color: $color-text-primary;
          margin-bottom: $space-xs;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .news-date {
          font-size: 12px;
          color: $color-text-muted;
        }
      }
    }
  }
}
</style>