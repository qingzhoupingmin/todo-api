<template>
  <div class="news-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">首页</a>
          <span>></span>
          <span>新闻动态</span>
        </div>
        <h1>新闻动态</h1>
      </div>
    </div>

    <div class="container">
      <div class="news-content">
        <div class="news-sidebar">
          <div class="sidebar-section">
            <h3>新闻分类</h3>
            <ul class="category-list">
              <li :class="{ active: activeCategory === 'all' }" @click="activeCategory = 'all'">全部</li>
              <li :class="{ active: activeCategory === 'news' }" @click="activeCategory = 'news'">要闻动态</li>
              <li :class="{ active: activeCategory === 'notice' }" @click="activeCategory = 'notice'">通知公告</li>
              <li :class="{ active: activeCategory === 'policy' }" @click="activeCategory = 'policy'">政策解读</li>
              <li :class="{ active: activeCategory === 'industry' }" @click="activeCategory = 'industry'">行业资讯</li>
            </ul>
          </div>

          <div class="sidebar-section">
            <h3>热门标签</h3>
            <div class="tag-cloud">
              <span class="tag tag-hot">安全生产</span>
              <span class="tag tag-new">政策法规</span>
              <span class="tag">养护工程</span>
              <span class="tag">智慧交通</span>
              <span class="tag">党建工作</span>
              <span class="tag tag-important">招标公告</span>
            </div>
          </div>
        </div>

        <div class="news-main">
          <div class="search-bar">
            <el-input placeholder="搜索新闻..." v-model="searchKeyword" class="search-input">
              <template #append>
                <el-button @click="handleSearch">
                  <Search class="icon" />
                </el-button>
              </template>
            </el-input>
          </div>

          <div class="news-list">
            <div 
              v-for="item in filteredNews" 
              :key="item.id" 
              class="news-card"
            >
              <div class="news-image">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="news-info">
                <div class="news-header">
                  <span :class="['tag', `tag-${item.type?.toLowerCase() || 'announcement'}`]">[{{ item.type || '新闻' }}]</span>
                  <span class="news-date">{{ item.date }}</span>
                </div>
                <h3>{{ item.title }}</h3>
                <p class="news-summary">
                  {{ item.summary || '点击查看详情...' }}
                </p>
                <button class="read-more">阅读全文 ></button>
              </div>
            </div>
          </div>

          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              :total="100"
              :current-page="currentPage"
              :page-size="10"
              @current-change="currentPage = $event"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { newsItems, noticeItems } from '@/data/mockData'

const activeCategory = ref('all')
const searchKeyword = ref('')
const currentPage = ref(1)

const allNews = computed(() => {
  const news = newsItems.map(item => ({ ...item, type: item.type || '动态' }))
  const notices = noticeItems.map(item => ({ ...item, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=government%20document%20office%20professional&image_size=landscape_4_3' }))
  return [...news, ...notices]
})

const filteredNews = computed(() => {
  let result = allNews.value
  
  if (activeCategory.value !== 'all') {
    const typeMap: Record<string, string> = {
      news: '动态',
      notice: '公告',
      policy: '政策',
      industry: '行业'
    }
    const targetType = typeMap[activeCategory.value]
    if (targetType) {
      result = result.filter(item => item.type === targetType)
    }
  }

  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(item => 
      item.title.toLowerCase().includes(keyword)
    )
  }

  return result
})

const handleSearch = () => {
  currentPage.value = 1
}
</script>

<style lang="scss" scoped>
.news-page {
  .page-header {
    background-color: $color-primary;
    color: #FFFFFF;
    padding: $space-xl 0;

    .breadcrumb {
      margin-bottom: $space-md;
      font-size: 14px;

      a {
        color: rgba(255, 255, 255, 0.8);

        &:hover {
          color: #FFFFFF;
        }
      }

      span {
        margin: 0 $space-xs;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    h1 {
      font-size: 32px;
      font-weight: 600;
    }
  }

  .news-content {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: $space-xl;
    padding: $space-xl 0;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }

  .news-sidebar {
    @media (max-width: $breakpoint-lg) {
      display: none;
    }

    .sidebar-section {
      background-color: $color-bg-card;
      padding: $space-lg;
      border-radius: $border-radius-md;
      margin-bottom: $space-lg;

      h3 {
        font-size: 16px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-md;
        padding-bottom: $space-sm;
        border-bottom: 2px solid $color-primary;
      }

      .category-list {
        li {
          padding: $space-sm 0;
          font-size: 14px;
          color: $color-text-secondary;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            color: $color-primary;
            padding-left: $space-sm;
          }

          &.active {
            color: $color-primary;
            font-weight: 500;
            background-color: $color-bg-hover;
            padding-left: $space-sm;
          }
        }
      }

      .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: $space-sm;

        .tag {
          padding: 4px 12px;
          font-size: 12px;
          background-color: $color-bg-page;
          color: $color-text-secondary;
          border-radius: $border-radius-sm;
          cursor: pointer;

          &:hover {
            background-color: $color-primary;
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .news-main {
    .search-bar {
      margin-bottom: $space-lg;

      .search-input {
        width: 400px;

        @media (max-width: $breakpoint-md) {
          width: 100%;
        }
      }
    }

    .news-list {
      .news-card {
        display: flex;
        gap: $space-lg;
        padding: $space-lg;
        background-color: $color-bg-card;
        border-radius: $border-radius-md;
        margin-bottom: $space-lg;
        transition: all 0.2s;

        &:hover {
          box-shadow: $shadow-md;
        }

        @media (max-width: $breakpoint-md) {
          flex-direction: column;
        }

        .news-image {
          width: 200px;
          height: 150px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: $border-radius-sm;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: $breakpoint-md) {
            width: 100%;
            height: 200px;
          }
        }

        .news-info {
          flex: 1;
          display: flex;
          flex-direction: column;

          .news-header {
            display: flex;
            align-items: center;
            gap: $space-md;
            margin-bottom: $space-sm;

            .tag {
              font-size: 12px;
            }

            .news-date {
              font-size: 12px;
              color: $color-text-muted;
            }
          }

          h3 {
            font-size: 18px;
            font-weight: 600;
            color: $color-text-primary;
            margin-bottom: $space-sm;
            line-height: 1.4;
          }

          .news-summary {
            flex: 1;
            font-size: 14px;
            color: $color-text-secondary;
            line-height: 1.6;
            margin-bottom: $space-md;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .read-more {
            align-self: flex-start;
            padding: $space-xs $space-md;
            background-color: $color-primary;
            color: #FFFFFF;
            border-radius: $border-radius-sm;
            font-size: 14px;
            transition: background-color 0.2s;

            &:hover {
              background-color: $color-primary-dark;
            }
          }
        }
      }
    }

    .pagination {
      display: flex;
      justify-content: center;
      padding: $space-xl 0;
    }
  }
}
</style>