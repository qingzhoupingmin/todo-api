<template>
  <div class="interactive-page">
    <div class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/">首页</a>
          <span>></span>
          <span>政民互动</span>
        </div>
        <h1>政民互动</h1>
      </div>
    </div>

    <div class="container">
      <div class="interactive-content">
        <div class="interactive-grid">
          <div class="interactive-card" v-for="item in interactiveItems" :key="item.name">
            <div class="card-icon">
              <component :is="getIcon(item.icon)" class="icon" />
            </div>
            <div class="card-content">
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <ArrowRight class="arrow-icon" />
          </div>
        </div>

        <div class="contact-section">
          <h2>联系方式</h2>
          <div class="contact-card">
            <div class="contact-info">
              <div class="contact-item">
                <Phone class="icon" />
                <div class="info-content">
                  <span class="label">咨询电话</span>
                  <span class="value">022-23316965</span>
                </div>
              </div>
              <div class="contact-item">
                <Mail class="icon" />
                <div class="info-content">
                  <span class="label">电子邮箱</span>
                  <span class="value">contact@tjjzglj.gov.cn</span>
                </div>
              </div>
              <div class="contact-item">
                <MapLocation class="icon" />
                <div class="info-content">
                  <span class="label">办公地址</span>
                  <span class="value">天津市和平区重庆道118号</span>
                </div>
              </div>
              <div class="contact-item">
                <Clock class="icon" />
                <div class="info-content">
                  <span class="label">办公时间</span>
                  <span class="value">周一至周五 9:00-17:00（法定节假日除外）</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feedback-section">
          <h2>在线咨询</h2>
          <div class="feedback-form">
            <el-form :model="form" label-width="100px">
              <el-form-item label="您的姓名">
                <el-input v-model="form.name" placeholder="请输入姓名" />
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.phone" placeholder="请输入联系电话" />
              </el-form-item>
              <el-form-item label="咨询类型">
                <el-select v-model="form.type" placeholder="请选择咨询类型">
                  <el-option label="政策咨询" value="policy" />
                  <el-option label="业务办理" value="service" />
                  <el-option label="投诉建议" value="complaint" />
                  <el-option label="其他" value="other" />
                </el-select>
              </el-form-item>
              <el-form-item label="咨询内容">
                <el-input type="textarea" v-model="form.content" :rows="4" placeholder="请输入咨询内容" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">提交咨询</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { EditPen, Message, Help, Phone, MapLocation, Clock, ArrowRight } from '@element-plus/icons-vue'
import { interactionItems } from '@/data/mockData'

const form = reactive({
  name: '',
  phone: '',
  type: '',
  content: ''
})

const iconMap: Record<string, any> = {
  EditPen,
  MessageCircle,
  HelpCircle,
  Phone
}

const getIcon = (iconName: string) => {
  return iconMap[iconName] || HelpCircle
}

const submitForm = () => {
  if (!form.name || !form.phone || !form.content) {
    alert('请填写完整信息')
    return
  }
  alert('提交成功，我们将尽快回复您！')
  form.name = ''
  form.phone = ''
  form.type = ''
  form.content = ''
}
</script>

<style lang="scss" scoped>
.interactive-page {
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

  .interactive-content {
    padding: $space-xl 0;

    .interactive-grid {
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

      .interactive-card {
        display: flex;
        align-items: center;
        gap: $space-md;
        padding: $space-lg;
        background-color: $color-bg-card;
        border-radius: $border-radius-md;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: $color-primary;
          transform: translateX(8px);

          .card-icon {
            background-color: rgba(255, 255, 255, 0.2);

            .icon {
              color: #FFFFFF;
            }
          }

          h3, p {
            color: #FFFFFF;
          }

          .arrow-icon {
            color: #FFFFFF;
          }
        }

        .card-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $color-primary-lighter;
          border-radius: 50%;
          flex-shrink: 0;

          .icon {
            width: 28px;
            height: 28px;
            color: $color-primary;
          }
        }

        .card-content {
          flex: 1;
          min-width: 0;

          h3 {
            font-size: 16px;
            font-weight: 600;
            color: $color-text-primary;
            margin-bottom: $space-xs;
          }

          p {
            font-size: 12px;
            color: $color-text-muted;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          color: $color-text-muted;
          flex-shrink: 0;
        }
      }
    }

    .contact-section {
      margin-bottom: $space-xxl;

      h2 {
        font-size: 20px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-lg;
        padding-bottom: $space-sm;
        border-bottom: 2px solid $color-primary;
      }

      .contact-card {
        background-color: $color-bg-card;
        border-radius: $border-radius-md;
        overflow: hidden;

        .contact-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;

          @media (max-width: $breakpoint-md) {
            grid-template-columns: 1fr;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: $space-md;
            padding: $space-lg;
            border-bottom: 1px solid $color-border;
            border-right: 1px solid $color-border;

            &:nth-child(2n) {
              border-right: none;
            }

            &:nth-last-child(-n+2) {
              border-bottom: none;
            }

            .icon {
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: $color-primary-lighter;
              border-radius: 50%;
              color: $color-primary;
              flex-shrink: 0;
            }

            .info-content {
              display: flex;
              flex-direction: column;

              .label {
                font-size: 12px;
                color: $color-text-muted;
                margin-bottom: $space-xs;
              }

              .value {
                font-size: 14px;
                color: $color-text-primary;
                font-weight: 500;
              }
            }
          }
        }
      }
    }

    .feedback-section {
      h2 {
        font-size: 20px;
        font-weight: 600;
        color: $color-text-primary;
        margin-bottom: $space-lg;
        padding-bottom: $space-sm;
        border-bottom: 2px solid $color-primary;
      }

      .feedback-form {
        background-color: $color-bg-card;
        padding: $space-xl;
        border-radius: $border-radius-md;
        max-width: 600px;

        .el-form-item {
          margin-bottom: $space-md;
        }

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>