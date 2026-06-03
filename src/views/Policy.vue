<template>
  <div class="policy-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">首页</a>
          <span>></span>
          <span>政务公开</span>
        </div>
        <h1>政务公开</h1>
      </div>
    </div>

    <div class="container">
      <div class="policy-content">
        <div class="policy-sidebar">
          <div class="sidebar-section">
            <h3>公开目录</h3>
            <ul class="category-list">
              <li :class="{ active: activeCategory === 'all' }" @click="activeCategory = 'all'">全部</li>
              <li :class="{ active: activeCategory === 'laws' }" @click="activeCategory = 'laws'">政策法规</li>
              <li :class="{ active: activeCategory === 'plans' }" @click="activeCategory = 'plans'">规划计划</li>
              <li :class="{ active: activeCategory === 'statistics' }" @click="activeCategory = 'statistics'">统计数据</li>
              <li :class="{ active: activeCategory === 'personnel' }" @click="activeCategory = 'personnel'">人事信息</li>
              <li :class="{ active: activeCategory === 'finance' }" @click="activeCategory = 'finance'">财政预决算</li>
              <li :class="{ active: activeCategory === 'enforcement' }" @click="activeCategory = 'enforcement'">执法公示</li>
            </ul>
          </div>

          <div class="sidebar-section">
            <h3>最新文件</h3>
            <ul class="latest-list">
              <li v-for="item in policyItems.slice(0, 5)" :key="item.id">
                <a href="#">{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="policy-main">
          <div class="filter-bar">
            <div class="filter-item">
              <span class="filter-label">时间范围</span>
              <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
            </div>
            <div class="filter-item">
              <span class="filter-label">文档类型</span>
              <el-select v-model="docType" placeholder="请选择">
                <el-option label="全部" value="all" />
                <el-option label="法规" value="law" />
                <el-option label="规章" value="regulation" />
                <el-option label="规范性文件" value="normative" />
              </el-select>
            </div>
            <div class="filter-item">
              <span class="filter-label">发文机构</span>
              <el-select v-model="org" placeholder="请选择">
                <el-option label="全部" value="all" />
                <el-option label="天津市交通运输委员会" value="tjjt" />
                <el-option label="天津市市政公路管理局" value="tjjzglj" />
              </el-select>
            </div>
            <el-button type="primary" @click="handleFilter">筛选</el-button>
          </div>

          <div class="file-list">
            <div class="file-card" v-for="item in policyItems" :key="item.id">
              <div class="file-icon">
                <Document class="icon" />
              </div>
              <div class="file-info">
                <div class="file-num">{{ item.num }}</div>
                <h3>{{ item.title }}</h3>
                <div class="file-meta">
                  <span>发文机构：{{ item.org }}</span>
                  <span>发文日期：{{ item.date }}</span>
                  <span>浏览：125次</span>
                </div>
              </div>
              <div class="file-actions">
                <button class="view-btn">查看详情</button>
              </div>
            </div>
          </div>

          <div class="pagination">
            <el-pagination
              layout="prev, pager, next"
              :total="50"
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
import { ref } from 'vue'
import { Document } from '@element-plus/icons-vue'
import { policyItems } from '@/data/mockData'

const activeCategory = ref('all')
const dateRange = ref([])
const docType = ref('all')
const org = ref('all')
const currentPage = ref(1)

const handleFilter = () => {
  currentPage.value = 1
}
</script>

<style lang="scss" scoped>
.policy-page {
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

  .policy-content {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: $space-xl;
    padding: $space-xl 0;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }

  .policy-sidebar {
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

      .latest-list {
        li {
          padding: $space-xs 0;

          a {
            font-size: 13px;
            color: $color-text-secondary;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;

            &:hover {
              color: $color-primary;
            }
          }
        }
      }
    }
  }

  .policy-main {
    .filter-bar {
      display: flex;
      align-items: center;
      gap: $space-lg;
      padding: $space-lg;
      background-color: $color-bg-card;
      border-radius: $border-radius-md;
      margin-bottom: $space-lg;
      flex-wrap: wrap;

      .filter-item {
        display: flex;
        align-items: center;
        gap: $space-sm;

        .filter-label {
          font-size: 14px;
          color: $color-text-secondary;
          white-space: nowrap;
        }
      }
    }

    .file-list {
      .file-card {
        display: flex;
        gap: $space-md;
        padding: $space-lg;
        background-color: $color-bg-card;
        border-radius: $border-radius-md;
        margin-bottom: $space-md;
        border-left: 4px solid $color-primary;
        transition: all 0.2s;

        &:hover {
          box-shadow: $shadow-md;
        }

        @media (max-width: $breakpoint-md) {
          flex-wrap: wrap;
        }

        .file-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $color-primary-lighter;
          border-radius: $border-radius-sm;
          flex-shrink: 0;

          .icon {
            width: 24px;
            height: 24px;
            color: $color-primary;
          }
        }

        .file-info {
          flex: 1;
          min-width: 0;

          .file-num {
            font-size: 12px;
            color: $color-primary;
            margin-bottom: $space-xs;
          }

          h3 {
            font-size: 16px;
            font-weight: 500;
            color: $color-text-primary;
            margin-bottom: $space-xs;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .file-meta {
            display: flex;
            gap: $space-lg;
            font-size: 12px;
            color: $color-text-muted;
            flex-wrap: wrap;
          }
        }

        .file-actions {
          flex-shrink: 0;

          .view-btn {
            padding: $space-xs $space-md;
            background-color: $color-primary;
            color: #FFFFFF;
            border-radius: $border-radius-sm;
            font-size: 12px;
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