<template>
  <footer class="footer">
    <!-- 主内容区 -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- 单位信息 -->
          <div class="footer-section org-section">
            <div class="footer-logo">
              <div class="logo-icon">津</div>
              <span class="logo-text">天津市市政公路管理局</span>
            </div>
            <div class="contact-info">
              <p><MapLocation class="icon" />地址：{{ orgInfo.address }}</p>
              <p><Phone class="icon" />电话：{{ orgInfo.phone }}</p>
              <p><Message class="icon" />邮编：{{ orgInfo.zipcode }}</p>
            </div>
          </div>

          <!-- 机构职能 -->
          <div class="footer-section">
            <h4 class="section-title">机构职能</h4>
            <ul class="link-list">
              <li><a href="/organization/intro">单位简介</a></li>
              <li><a href="/organization/leaders">领导分工</a></li>
              <li><a href="/organization/structure">机构设置</a></li>
              <li><a href="/organization/contact">联系方式</a></li>
            </ul>
          </div>

          <!-- 政策法规 -->
          <div class="footer-section">
            <h4 class="section-title">政策法规</h4>
            <ul class="link-list">
              <li><a href="/policy/laws">法律法规</a></li>
              <li><a href="/policy">政策文件</a></li>
              <li><a href="/policy/plans">规划计划</a></li>
              <li><a href="/policy/statistics">统计数据</a></li>
            </ul>
          </div>

          <!-- 政务公开 -->
          <div class="footer-section">
            <h4 class="section-title">政务公开</h4>
            <ul class="link-list">
              <li><a href="/policy/guide">信息公开指南</a></li>
              <li><a href="/policy/annual">信息公开年报</a></li>
              <li><a href="/policy/apply">依申请公开</a></li>
              <li><a href="/policy/decisions">重大行政决策</a></li>
              <li><a href="/policy/enforcement">执法公示</a></li>
            </ul>
          </div>

          <!-- 政务服务 -->
          <div class="footer-section">
            <h4 class="section-title">政务服务</h4>
            <ul class="link-list">
              <li><a href="/service/gov/one-stop">高效办成一件事</a></li>
              <li><a href="/service/gov/progress">办件进度查询</a></li>
              <li><a href="/service/gov/qualification">资格资质查询</a></li>
              <li><a href="/service/gov/map">政务服务地图</a></li>
            </ul>
          </div>

          <!-- 政民互动 -->
          <div class="footer-section">
            <h4 class="section-title">政民互动</h4>
            <ul class="link-list">
              <li><a href="/interactive/suggestions">意见征集</a></li>
              <li><a href="/interactive/interview">在线访谈</a></li>
              <li><a href="/interactive/faq">常见问题</a></li>
              <li><a href="/interactive/complaint">咨询投诉</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部信息栏 -->
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <div class="copyright">
            <p>© 2024 天津市市政公路管理局 版权所有</p>
          </div>
          <div class="icp-info">
            <a href="https://beian.miit.gov.cn/" target="_blank">津ICP备12345678号</a>
            <span>|</span>
            <a href="http://www.beian.gov.cn/" target="_blank">津公网安备 12010102000000号</a>
          </div>
          <div class="gov-links">
            <a href="http://www.tj.gov.cn" target="_blank">天津政务网</a>
            <span>|</span>
            <a href="http://jtys.tj.gov.cn" target="_blank">天津市交通运输委员会</a>
            <span>|</span>
            <a href="http://www.tj.gov.cn/xxgk/" target="_blank">天津市政府信息公开专栏</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapLocation, Phone, Message } from '@element-plus/icons-vue'
import { orgInfo } from '@/data/mockData'
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-primary;
  color: #FFFFFF;

  .footer-main {
    padding: 40px 0 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr repeat(5, 1fr);
      gap: 30px;

      @media (max-width: $breakpoint-lg) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: $breakpoint-md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
      }
    }

    .footer-section {
      &.org-section {
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 16px;

          .logo-icon {
            width: 40px;
            height: 40px;
            background-color: #E84A4A;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-size: 18px;
            font-weight: bold;
            margin-right: 12px;
          }

          .logo-text {
            font-size: 16px;
            font-weight: 600;
          }
        }

        .contact-info {
          p {
            display: flex;
            align-items: flex-start;
            margin-bottom: 8px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;

            .icon {
              width: 14px;
              height: 14px;
              margin-right: 8px;
              margin-top: 3px;
              flex-shrink: 0;
            }
          }
        }
      }

      .section-title {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 14px;
        color: #FFFFFF;
      }

      .link-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 8px;

          a {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.75);
            text-decoration: none;
            transition: color 0.2s;
            display: inline-block;

            &:hover {
              color: #FFFFFF;
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    padding: 16px 0;

    .bottom-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        text-align: center;
      }

      .copyright {
        p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
      }

      .icp-info,
      .gov-links {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;

        @media (max-width: $breakpoint-md) {
          justify-content: center;
        }

        a {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: #FFFFFF;
          }
        }

        span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
</style>
