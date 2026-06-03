<template>
  <div class="interaction-section">
    <div class="container">
      <div class="section-title">
        <span>政民互动</span>
        <a href="/interactive" class="more-link">更多 ></a>
      </div>

      <div class="interaction-grid">
        <div 
          v-for="item in interactionItems" 
          :key="item.id" 
          class="interaction-card"
          @click="$router.push(item.path)"
        >
          <div class="interaction-icon">
            <component :is="getIcon(item.icon)" class="icon" />
          </div>
          <h4>{{ item.name }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditPen, Message, Help, Phone } from '@element-plus/icons-vue'
import { interactionItems } from '@/data/mockData'

const iconMap: Record<string, any> = {
  EditPen,
  Message,
  Help,
  Phone
}

const getIcon = (iconName: string) => {
  return iconMap[iconName] || Help
}
</script>

<style lang="scss" scoped>
.interaction-section {
  padding: $space-xl 0;
  background-color: $color-bg-card;

  .interaction-grid {
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

  .interaction-card {
    padding: $space-lg;
    background-color: $color-bg-page;
    border-radius: $border-radius-md;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: $color-primary;
      transform: translateY(-4px);

      .interaction-icon {
        background-color: rgba(255, 255, 255, 0.2);

        .icon {
          color: #FFFFFF;
        }
      }

      h4, p {
        color: #FFFFFF;
      }
    }

    .interaction-icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-primary-lighter;
      border-radius: 50%;
      margin: 0 auto $space-md;
      transition: all 0.3s;

      .icon {
        width: 32px;
        height: 32px;
        color: $color-primary;
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
    }
  }
}
</style>