<template>
  <div class="home-page">
    <Banner />
    <QuickServices />
    <NewsSection />
    <div class="home-content">
      <div class="container">
        <div class="content-grid">
          <div class="content-left">
            <NoticeSection />
            <TopicsSection />
          </div>
          <div class="content-right">
            <PolicySection />
            <LeadersSection />
          </div>
        </div>
      </div>
    </div>
    <IndustryNews />
    <InteractionSection />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/business/Banner.vue'
import QuickServices from '@/components/business/QuickServices.vue'
import NewsSection from '@/components/business/NewsSection.vue'
import NoticeSection from '@/components/business/NoticeSection.vue'
import PolicySection from '@/components/business/PolicySection.vue'
import TopicsSection from '@/components/business/TopicsSection.vue'
import LeadersSection from '@/components/business/LeadersSection.vue'
import IndustryNews from '@/components/business/IndustryNews.vue'
import InteractionSection from '@/components/business/InteractionSection.vue'
</script>

<style lang="scss" scoped>
.home-page {
  .home-content {
    padding: $space-xl 0;

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: $space-lg;

      @media (max-width: $breakpoint-lg) {
        grid-template-columns: 1fr;
      }
    }

    .content-left,
    .content-right {
      display: flex;
      flex-direction: column;
      gap: $space-xl;
    }
  }
}
</style>