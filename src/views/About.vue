<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">首页</a>
          <span>></span>
          <span>关于我们</span>
        </div>
        <h1>关于我们</h1>
      </div>
    </div>

    <div class="container">
      <div class="about-content">
        <div class="about-info">
          <div class="org-logo">
            <div class="logo-icon">津</div>
            <span class="org-name">天津市市政公路管理局</span>
          </div>
          <div class="contact-details">
            <p><MapLocation class="icon" />地址：天津市和平区重庆道118号</p>
            <p><Phone class="icon" />联系电话：022-23316965</p>
            <p><Message class="icon" />邮编：300050</p>
            <p><Message class="icon" />传真：022-23136714</p>
          </div>
        </div>

        <div class="section-card">
          <h2>主要职责</h2>
          <ul class="responsibility-list">
            <li v-for="(item, index) in responsibilities" :key="index">
              {{ index + 1 }}. {{ item }}
            </li>
          </ul>
        </div>

        <div class="section-card">
          <h2>单位简介</h2>
          <p class="intro-text">
            天津市市政公路管理局是主管全市市政道桥、公路管理工作的市政府直属事业单位。多年来，管理局始终坚持以服务人民为宗旨，致力于提升市政公路基础设施建设和管理水平，为天津市的经济社会发展提供坚实的交通保障。
          </p>
          <p class="intro-text">
            管理局承担着全市市政道路、桥梁、排水设施的养护管理工作，负责编制市政公路发展规划，组织实施重大养护工程，同时加强行业监管，确保市政公路设施安全有序运行。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapLocation, Phone, Message } from '@element-plus/icons-vue'
import { responsibilities } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.about-page {
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

  .about-content {
    padding: $space-xl 0;

    .about-info {
      display: flex;
      gap: $space-xl;
      margin-bottom: $space-xl;
      padding: $space-lg;
      background-color: $color-bg-card;
      border-radius: $border-radius-md;

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

      .contact-details {
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

    .section-card {
      background-color: $color-bg-card;
      padding: $space-xl;
      border-radius: $border-radius-md;
      margin-bottom: $space-xl;

      h2 {
        font-size: 20px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-lg;
        padding-bottom: $space-sm;
        border-bottom: 2px solid $color-primary;
      }

      .responsibility-list {
        li {
          font-size: 14px;
          color: $color-text-secondary;
          line-height: 2;
          margin-bottom: $space-sm;
        }
      }

      .intro-text {
        font-size: 14px;
        color: $color-text-secondary;
        line-height: 1.8;
        margin-bottom: $space-md;
        text-indent: 2em;
      }
    }
  }
}
</style>