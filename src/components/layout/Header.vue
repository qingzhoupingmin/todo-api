<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <div class="logo" @click="$router.push('/')">
          <div class="logo-icon">津</div>
          <div class="logo-text">
            <span class="logo-title">天津市市政公路管理局</span>
            <span class="logo-subtitle">Tianjin Municipal Highway Administration</span>
          </div>
        </div>

        <nav class="nav-menu" v-if="!isMobile">
          <ul class="nav-list">
            <li v-for="item in navItems" :key="item.name" class="nav-item">
              <router-link 
                :to="item.path" 
                class="nav-link"
                :class="{ active: currentPath === item.path }"
              >
                {{ item.name }}
                <span v-if="item.children" class="nav-arrow">▼</span>
              </router-link>
              <div v-if="item.children" class="nav-dropdown">
                <a 
                  v-for="child in item.children" 
                  :key="child.name"
                  :href="child.path"
                  class="dropdown-item"
                >
                  {{ child.name }}
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <button class="search-btn" @click="showSearch = !showSearch">
            <Search class="icon" />
          </button>
          <button class="accessibility-btn">
            <Bell class="icon" />
          </button>
          <button class="wechat-btn">
            <Message class="icon" />
          </button>
          <button class="mobile-menu-btn" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <Menu class="icon" />
          </button>
        </div>
      </div>

      <div v-if="showSearch" class="search-box">
        <input type="text" placeholder="请输入关键词搜索..." class="search-input" />
        <button class="search-submit">
          <Search class="icon" />
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <div class="mobile-menu-header">
        <span>导航菜单</span>
        <button class="close-btn" @click="isMobileMenuOpen = false">
          <Close class="icon" />
        </button>
      </div>
      <ul class="mobile-nav-list">
        <li v-for="item in navItems" :key="item.name" class="mobile-nav-item">
          <a 
            :href="item.path" 
            class="mobile-nav-link"
            @click="handleMobileNavClick(item)"
          >
            {{ item.name }}
            <ArrowRight v-if="item.children" class="arrow-icon" />
          </a>
          <div v-if="item.children" class="mobile-dropdown">
            <a 
              v-for="child in item.children" 
              :key="child.name"
              :href="child.path"
              class="mobile-dropdown-item"
              @click="isMobileMenuOpen = false"
            >
              {{ child.name }}
            </a>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Search, Bell, Message, Menu, Close, ArrowRight } from '@element-plus/icons-vue'
import { navItems } from '@/data/mockData'

const isScrolled = ref(false)
const showSearch = ref(false)
const isMobile = ref(false)
const isMobileMenuOpen = ref(false)

const currentPath = computed(() => {
  return window.location.pathname
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 992
  if (isMobile.value && isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const handleMobileNavClick = (item: any) => {
  if (!item.children) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: $color-primary;
  height: $header-height;
  transition: all 0.3s ease;

  &.header-scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: $breakpoint-sm) {
    height: $header-height-mobile;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo-icon {
    width: 48px;
    height: 48px;
    background-color: #E84A4A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    margin-right: 12px;

    @media (max-width: $breakpoint-sm) {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }

  .logo-text {
    display: flex;
    flex-direction: column;

    .logo-title {
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 600;

      @media (max-width: $breakpoint-md) {
        font-size: 16px;
      }

      @media (max-width: $breakpoint-sm) {
        display: none;
      }
    }

    .logo-subtitle {
      color: rgba(255, 255, 255, 0.7);
      font-size: 10px;
      letter-spacing: 1px;

      @media (max-width: $breakpoint-sm) {
        display: none;
      }
    }
  }
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;

  .nav-list {
    display: flex;
    gap: 8px;
  }

  .nav-item {
    position: relative;
    padding: 0 16px;

    .nav-link {
      display: flex;
      align-items: center;
      height: $header-height;
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }

      &.active {
        border-bottom: 3px solid #FFFFFF;
      }

      .nav-arrow {
        font-size: 10px;
        margin-left: 4px;
        transition: transform 0.2s;
      }

      &:hover .nav-arrow {
        transform: rotate(180deg);
      }
    }

    .nav-dropdown {
      position: absolute;
      top: $header-height;
      left: 0;
      min-width: 160px;
      background-color: #FFFFFF;
      box-shadow: $shadow-md;
      border-radius: $border-radius-sm;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s;
      z-index: 1001;

      .dropdown-item {
        display: block;
        padding: 12px 16px;
        color: $color-text-primary;
        font-size: 14px;
        transition: background-color 0.2s;

        &:hover {
          background-color: $color-bg-hover;
        }
      }
    }

    &:hover .nav-dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    .icon {
      width: 20px;
      height: 20px;
    }

    &.mobile-menu-btn {
      display: none;
    }
  }

  @media (max-width: $breakpoint-md) {
    button {
      &.wechat-btn {
        display: none;
      }

      &.mobile-menu-btn {
        display: flex;
      }
    }
  }
}

.search-box {
  position: absolute;
  top: $header-height;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  max-width: 500px;
  display: flex;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: $shadow-md;
  padding: 4px;

  .search-input {
    flex: 1;
    height: 40px;
    padding: 0 16px;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .search-submit {
    width: 40px;
    height: 40px;
    background-color: $color-primary;
    border-radius: 16px;
    color: #FFFFFF;

    .icon {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: $breakpoint-md) {
    width: calc(100% - 32px);
  }
}

.mobile-menu {
  position: fixed;
  top: $header-height-mobile;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFFFF;
  z-index: 999;
  overflow-y: auto;

  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid $color-border;
    font-size: 16px;
    font-weight: 500;

    .close-btn {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: $color-bg-page;

      .icon {
        width: 18px;
        height: 18px;
      }
    }
  }

  .mobile-nav-list {
    padding: 16px 0;

    .mobile-nav-item {
      border-bottom: 1px solid $color-border-light;

      .mobile-nav-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        font-size: 16px;
        color: $color-text-primary;

        .arrow-icon {
          width: 18px;
          height: 18px;
          color: $color-text-muted;
          transition: transform 0.2s;
        }
      }

      .mobile-dropdown {
        background-color: $color-bg-page;

        .mobile-dropdown-item {
          display: block;
          padding: 12px 48px;
          font-size: 14px;
          color: $color-text-secondary;

          &:hover {
            background-color: $color-bg-hover;
          }
        }
      }
    }
  }
}
</style>