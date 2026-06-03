<template>
  <div class="quick-services">
    <div class="container">
      <div class="grid grid-cols-8">
        <div 
          v-for="service in quickServices" 
          :key="service.name" 
          class="service-item"
          @click="$router.push(service.path)"
        >
          <div class="service-icon">
            <component :is="getIcon(service.icon)" class="icon" />
          </div>
          <span class="service-name">{{ service.name }}</span>
          <span class="service-desc">{{ service.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document, EditPen, Search, MapLocation, Calendar, Help, Download, Phone } from '@element-plus/icons-vue'
import { quickServices } from '@/data/mockData'

const iconMap: Record<string, any> = {
  Document,
  EditPen,
  Search,
  MapLocation,
  Calendar,
  Help,
  Download,
  Phone
}

const getIcon = (iconName: string) => {
  return iconMap[iconName] || Document
}
</script>

<style lang="scss" scoped>
.quick-services {
  padding: $space-lg 0;
  background-color: $color-bg-card;

  .grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: $space-md;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: $breakpoint-md) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $space-md;
    background-color: $color-bg-page;
    border-radius: $border-radius-md;
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover {
      background-color: $color-bg-card;
      box-shadow: $shadow-sm;
      transform: translateY(-4px);
      border-left: 4px solid $color-primary;
    }

    .service-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-primary-lighter;
      border-radius: 50%;
      margin-bottom: $space-sm;
      transition: all 0.25s ease-out;

      .icon {
        width: 24px;
        height: 24px;
        color: $color-primary;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    .service-name {
      font-size: 14px;
      font-weight: 500;
      color: $color-text-primary;
      margin-bottom: $space-xs;
    }

    .service-desc {
      font-size: 12px;
      color: $color-text-muted;
      text-align: center;
      display: none;

      @media (min-width: $breakpoint-lg) {
        display: block;
      }
    }
  }
}
</style>