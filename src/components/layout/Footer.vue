<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section footer-info">
        <div class="footer-logo">
          <div class="logo-icon">津</div>
          <span class="logo-text">天津市市政公路管理局</span>
        </div>
        <div class="contact-info">
          <p><MapLocation class="icon" />地址：{{ orgInfo.address }}</p>
          <p><Phone class="icon" />联系电话：{{ orgInfo.phone }}</p>
          <p><Message class="icon" />邮编：{{ orgInfo.zipcode }}</p>
        </div>
      </div>

      <div class="footer-section footer-links">
        <h4>快速链接</h4>
        <ul>
          <li v-for="link in footerLinks" :key="link.name">
            <a :href="link.url" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-section footer-qrcode">
        <div class="qrcode-item">
          <div class="qrcode">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=simple%20QR%20code%20black%20white%20minimal&image_size=square" alt="微信公众号" />
          </div>
          <span>微信公众号</span>
        </div>
        <div class="qrcode-item">
          <div class="qrcode">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=simple%20QR%20code%20black%20white%20minimal&image_size=square" alt="津心办APP" />
          </div>
          <span>津心办APP</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© 2024 天津市市政公路管理局 版权所有</p>
        <p>ICP备案号：津ICP备12345678号-1 | 津公网安备 12010102000000号</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapLocation, Phone, Message } from '@element-plus/icons-vue'
import { footerLinks, orgInfo } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-primary;
  color: #FFFFFF;
  padding: $space-xl 0;

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: $space-xl;
    margin-bottom: $space-xl;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
      gap: $space-lg;
    }
  }

  .footer-section {
    .footer-logo {
      display: flex;
      align-items: center;
      margin-bottom: $space-lg;

      .logo-icon {
        width: 40px;
        height: 40px;
        background-color: #E84A4A;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: bold;
        margin-right: 12px;
      }

      .logo-text {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .contact-info {
      p {
        display: flex;
        align-items: center;
        margin-bottom: $space-sm;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);

        .icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }
      }
    }

    &.footer-links {
      h4 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: $space-md;
      }

      ul {
        li {
          margin-bottom: $space-sm;

          a {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            transition: color 0.2s;

            &:hover {
              color: #FFFFFF;
            }
          }
        }
      }
    }

    &.footer-qrcode {
      display: flex;
      justify-content: flex-end;
      gap: $space-lg;

      .qrcode-item {
        text-align: center;

        .qrcode {
          width: 80px;
          height: 80px;
          background-color: #FFFFFF;
          border-radius: $border-radius-sm;
          overflow: hidden;
          margin-bottom: $space-xs;

          img {
            width: 100%;
            height: 100%;
          }
        }

        span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      @media (max-width: $breakpoint-md) {
        justify-content: flex-start;
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: $space-lg;

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: $space-sm;

      p {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
      }

      @media (max-width: $breakpoint-sm) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  }
}
</style>