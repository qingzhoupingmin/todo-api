<template>
  <div class="organization-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">首页</a>
          <span>></span>
          <span>机构职能</span>
        </div>
        <h1>机构职能</h1>
      </div>
    </div>

    <div class="container">
      <div class="org-content">
        <div class="org-sidebar">
          <ul class="sidebar-nav">
            <li :class="{ active: activeTab === 'intro' }" @click="activeTab = 'intro'">单位简介</li>
            <li :class="{ active: activeTab === 'leaders' }" @click="activeTab = 'leaders'">领导分工</li>
            <li :class="{ active: activeTab === 'structure' }" @click="activeTab = 'structure'">机构设置</li>
            <li :class="{ active: activeTab === 'affiliated' }" @click="activeTab = 'affiliated'">直属单位</li>
          </ul>
        </div>

        <div class="org-main">
          <div v-if="activeTab === 'intro'" class="tab-content">
            <h2>单位简介</h2>
            <div class="intro-card">
              <div class="intro-info">
                <div class="org-logo">
                  <div class="logo-icon">津</div>
                  <span class="org-name">天津市市政公路管理局</span>
                </div>
                <div class="basic-info">
                  <p><MapLocation class="icon" />地址：天津市和平区重庆道118号</p>
                  <p><Phone class="icon" />联系电话：022-23316965</p>
                  <p><Message class="icon" />邮编：300050</p>
                  <p><Message class="icon" />传真：022-23136714</p>
                </div>
              </div>
            </div>
            <div class="section-card">
              <h3>主要职责</h3>
              <ul class="responsibility-list">
                <li v-for="(item, index) in responsibilities" :key="index">
                  {{ index + 1 }}. {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div v-if="activeTab === 'leaders'" class="tab-content">
            <h2>领导分工</h2>
            <div class="leaders-grid">
              <div class="leader-card" v-for="leader in leaders" :key="leader.id">
                <div class="leader-avatar">
                  <User class="avatar-icon" />
                </div>
                <h4>{{ leader.name }}</h4>
                <p>{{ leader.position }}</p>
                <button class="view-btn">查看分工</button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'structure'" class="tab-content">
            <h2>内设机构</h2>
            <div class="structure-grid">
              <div class="structure-card" v-for="(dept, index) in departments" :key="index">
                <OfficeBuilding class="dept-icon" />
                <span>{{ dept }}</span>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'affiliated'" class="tab-content">
            <h2>直属单位</h2>
            <div class="affiliated-grid">
              <div class="affiliated-card" v-for="unit in affiliatedUnits" :key="unit.id">
                <div class="unit-header">
                  <OfficeBuilding class="unit-icon" />
                  <h4>{{ unit.name }}</h4>
                </div>
                <p>{{ unit.desc }}</p>
                <button class="unit-btn">进入官网 ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapLocation, Phone, Message, User, OfficeBuilding } from '@element-plus/icons-vue'
import { leaders, departments, affiliatedUnits, responsibilities } from '@/data/mockData'

const activeTab = ref('intro')
</script>

<style lang="scss" scoped>
.organization-page {
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

  .org-content {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: $space-xl;
    padding: $space-xl 0;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }

  .org-sidebar {
    @media (max-width: $breakpoint-lg) {
      display: none;
    }

    .sidebar-nav {
      background-color: $color-bg-card;
      border-radius: $border-radius-md;
      overflow: hidden;

      li {
        padding: $space-md;
        font-size: 14px;
        color: $color-text-secondary;
        cursor: pointer;
        border-bottom: 1px solid $color-border;
        transition: all 0.2s;

        &:last-child {
          border-bottom: none;
        }

        &:hover {
          background-color: $color-bg-hover;
          padding-left: $space-lg;
        }

        &.active {
          background-color: $color-primary;
          color: #FFFFFF;
          font-weight: 500;
        }
      }
    }
  }

  .org-main {
    .tab-content {
      h2 {
        font-size: 20px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-lg;
        padding-bottom: $space-sm;
        border-bottom: 2px solid $color-primary;
      }
    }

    .intro-card {
      background-color: $color-bg-card;
      border-radius: $border-radius-md;
      margin-bottom: $space-xl;

      .intro-info {
        display: flex;
        gap: $space-xl;
        padding: $space-xl;

        @media (max-width: $breakpoint-md) {
          flex-direction: column;
        }

        .org-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-right: $space-xl;
          border-right: 1px solid $color-border;

          @media (max-width: $breakpoint-md) {
            border-right: none;
            border-bottom: 1px solid $color-border;
            padding-right: 0;
            padding-bottom: $space-lg;
          }

          .logo-icon {
            width: 80px;
            height: 80px;
            background-color: #E84A4A;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-size: 40px;
            font-weight: bold;
            margin-bottom: $space-md;
          }

          .org-name {
            font-size: 18px;
            font-weight: 600;
            color: $color-text-primary;
          }
        }

        .basic-info {
          flex: 1;

          p {
            display: flex;
            align-items: center;
            margin-bottom: $space-sm;
            font-size: 14px;
            color: $color-text-secondary;

            .icon {
              width: 16px;
              height: 16px;
              margin-right: $space-sm;
              color: $color-primary;
            }
          }
        }
      }
    }

    .section-card {
      background-color: $color-bg-card;
      padding: $space-xl;
      border-radius: $border-radius-md;

      h3 {
        font-size: 16px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-lg;
      }

      .responsibility-list {
        li {
          font-size: 14px;
          color: $color-text-secondary;
          line-height: 2;
          margin-bottom: $space-sm;
        }
      }
    }

    .leaders-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: $space-lg;

      @media (max-width: $breakpoint-lg) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: $breakpoint-md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
      }

      .leader-card {
        background-color: $color-bg-card;
        padding: $space-lg;
        border-radius: $border-radius-md;
        text-align: center;
        transition: all 0.3s;

        &:hover {
          box-shadow: $shadow-md;
        }

        .leader-avatar {
          width: 100px;
          height: 120px;
          margin: 0 auto $space-md;
          background-color: $color-bg-page;
          border-radius: $border-radius-sm;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          .avatar-icon {
            width: 50px;
            height: 50px;
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
          margin-bottom: $space-md;
          line-height: 1.5;
        }

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

    .structure-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: $space-md;

      @media (max-width: $breakpoint-lg) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: $breakpoint-md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
      }

      .structure-card {
        display: flex;
        align-items: center;
        gap: $space-sm;
        padding: $space-md;
        background-color: $color-bg-card;
        border-radius: $border-radius-md;

        .dept-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $color-primary-lighter;
          border-radius: 50%;
          color: $color-primary;
        }

        span {
          font-size: 14px;
          color: $color-text-primary;
        }
      }
    }

    .affiliated-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: $space-lg;

      @media (max-width: $breakpoint-md) {
        grid-template-columns: 1fr;
      }

      .affiliated-card {
        background-color: $color-bg-card;
        padding: $space-lg;
        border-radius: $border-radius-md;
        border-left: 4px solid $color-primary;

        .unit-header {
          display: flex;
          align-items: center;
          gap: $space-sm;
          margin-bottom: $space-sm;

          .unit-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $color-primary-lighter;
            border-radius: 50%;
            color: $color-primary;
          }

          h4 {
            font-size: 16px;
            font-weight: 600;
            color: $color-text-primary;
          }
        }

        p {
          font-size: 14px;
          color: $color-text-muted;
          margin-bottom: $space-md;
        }

        .unit-btn {
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
}
</style>