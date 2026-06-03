<template>
  <div class="service-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">首页</a>
          <span>></span>
          <span>政务服务</span>
        </div>
        <h1>政务服务</h1>
      </div>
    </div>

    <div class="container">
      <div class="service-content">
        <div class="service-grid">
          <div class="service-card" v-for="service in serviceItems" :key="service.name">
            <div class="service-icon" :style="{ background: service.bgColor }">
              <component :is="getIcon(service.icon)" class="icon" />
            </div>
            <h3>{{ service.name }}</h3>
            <p>{{ service.desc }}</p>
            <button class="service-btn">进入服务 ></button>
          </div>
        </div>

        <div class="service-section">
          <h2>高效办成一件事</h2>
          <div class="one-stop-grid">
            <div class="one-stop-card" v-for="item in oneStopItems" :key="item.name">
              <h4>{{ item.name }}</h4>
              <p>{{ item.desc }}</p>
              <div class="items-list">
                <span v-for="(subItem, idx) in item.items" :key="idx">{{ subItem }}</span>
              </div>
              <button class="action-btn">立即申请</button>
            </div>
          </div>
        </div>

        <div class="service-section">
          <h2>办件进度查询</h2>
          <div class="progress-search">
            <el-input placeholder="请输入办件编号" v-model="searchNumber" class="search-input">
              <template #append>
                <el-button type="primary" @click="searchProgress">查询</el-button>
              </template>
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Document, EditPen, Search, MapLocation, Calendar, Help, Download, Phone, CircleCheck, DocumentChecked } from '@element-plus/icons-vue'

const searchNumber = ref('')

const serviceItems = [
  { name: '办事指南', desc: '各类业务办理流程说明', icon: 'Document', bgColor: 'linear-gradient(135deg, #1E5AA8 0%, #4A90D9 100%)' },
  { name: '行政许可', desc: '许可申请入口', icon: 'EditPen', bgColor: 'linear-gradient(135deg, #388E3C 0%, #66BB6A 100%)' },
  { name: '进度查询', desc: '输入编号查询办理状态', icon: 'Search', bgColor: 'linear-gradient(135deg, #F57C00 0%, #FFA726 100%)' },
  { name: '路况信息', desc: '公路路况实时信息', icon: 'MapLocation', bgColor: 'linear-gradient(135deg, #7B1FA2 0%, #AB47BC 100%)' },
  { name: '规划公示', desc: '在建/待建工程公示', icon: 'Calendar', bgColor: 'linear-gradient(135deg, #0288D1 0%, #42A5F5 100%)' },
  { name: '常见问题', desc: '热点问题解答', icon: 'Help', bgColor: 'linear-gradient(135deg, #546E7A 0%, #78909C 100%)' },
  { name: '表格下载', desc: '业务表格集中下载', icon: 'Download', bgColor: 'linear-gradient(135deg, #C62828 0%, #EF5350 100%)' },
  { name: '咨询投诉', desc: '咨询、投诉入口', icon: 'Phone', bgColor: 'linear-gradient(135deg, #5D4037 0%, #8D6E63 100%)' }
]

const oneStopItems = [
  { 
    name: '公路建设项目审批', 
    desc: '建设单位办理新建公路项目',
    items: ['项目立项', '规划许可', '施工许可']
  },
  { 
    name: '超限运输许可', 
    desc: '货运企业或个人运输大件货物',
    items: ['超限运输申请', '路线勘验']
  },
  { 
    name: '道路占用挖掘许可', 
    desc: '单位或个人因施工需占用道路',
    items: ['占用许可', '挖掘许可', '恢复验收']
  },
  { 
    name: '养护工程验收', 
    desc: '养护施工单位办理工程验收',
    items: ['方案审批', '过程监督', '竣工验收']
  }
]

const iconMap: Record<string, any> = {
  Document,
  EditPen,
  Search,
  MapLocation,
  Calendar,
  Help,
  Download,
  Phone,
  CircleCheck,
  DocumentChecked
}

const getIcon = (iconName: string) => {
  return iconMap[iconName] || FileText
}

const searchProgress = () => {
  if (!searchNumber.value) {
    alert('请输入办件编号')
    return
  }
  alert(`查询办件编号: ${searchNumber.value}`)
}
</script>

<style lang="scss" scoped>
.service-page {
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

  .service-content {
    padding: $space-xl 0;

    .service-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: $space-lg;
      margin-bottom: $space-xxl;

      @media (max-width: $breakpoint-lg) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
      }

      .service-card {
        background-color: $color-bg-card;
        padding: $space-lg;
        border-radius: $border-radius-md;
        text-align: center;
        transition: all 0.3s;

        &:hover {
          transform: translateY(-4px);
          box-shadow: $shadow-md;
        }

        .service-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto $space-md;

          .icon {
            width: 36px;
            height: 36px;
            color: #FFFFFF;
          }
        }

        h3 {
          font-size: 16px;
          font-weight: 600;
          color: $color-text-primary;
          margin-bottom: $space-xs;
        }

        p {
          font-size: 12px;
          color: $color-text-muted;
          margin-bottom: $space-md;
        }

        .service-btn {
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

    .service-section {
      margin-bottom: $space-xxl;

      h2 {
        font-size: 20px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-lg;
        padding-bottom: $space-sm;
        border-bottom: 2px solid $color-primary;
      }
    }

    .one-stop-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: $space-lg;

      @media (max-width: $breakpoint-lg) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
      }

      .one-stop-card {
        background-color: $color-bg-card;
        padding: $space-lg;
        border-radius: $border-radius-md;
        border-left: 4px solid $color-primary;

        h4 {
          font-size: 16px;
          font-weight: 600;
          color: $color-text-primary;
          margin-bottom: $space-xs;
        }

        p {
          font-size: 12px;
          color: $color-text-muted;
          margin-bottom: $space-md;
        }

        .items-list {
          display: flex;
          flex-wrap: wrap;
          gap: $space-xs;
          margin-bottom: $space-md;

          span {
            padding: 2px 8px;
            background-color: $color-bg-page;
            color: $color-text-secondary;
            font-size: 12px;
            border-radius: $border-radius-sm;
          }
        }

        .action-btn {
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

    .progress-search {
      background-color: $color-bg-card;
      padding: $space-lg;
      border-radius: $border-radius-md;

      .search-input {
        max-width: 500px;
      }
    }
  }
}
</style>