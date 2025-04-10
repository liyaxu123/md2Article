<script setup lang="ts">
import { withBase } from "vitepress";
import { data as postsData } from "../articles.data";
import { ref, onMounted, onUnmounted } from "vue";
const emit = defineEmits(["onChange"]);
const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});

// 控制抽屉导航的显示和隐藏
const isDrawerOpen = ref(false);
const isMobile = ref(false);

// 检测屏幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

// 打开/关闭抽屉导航
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

// 关闭抽屉导航
const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const handleClick = () => {
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type");
  emit("onChange", type);
  // 在移动端点击分类后关闭抽屉
  if (isMobile.value) {
    closeDrawer();
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <!-- 移动端抽屉按钮 -->
  <div v-if="isMobile" class="drawer-toggle" @click="toggleDrawer">
    <div class="hamburger" :class="{ 'is-active': isDrawerOpen }">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <span class="toggle-text">分类导航</span>
  </div>

  <!-- 侧边栏 - 桌面端显示正常，移动端使用抽屉 -->
  <aside
    class="sidebar"
    :class="{
      drawer: isMobile,
      'drawer-open': isMobile && isDrawerOpen,
    }"
  >
    <!-- 移动端关闭按钮 -->
    <div v-if="isMobile" class="drawer-close" @click="closeDrawer">
      <span>&times;</span>
    </div>

    <div class="sidebar-section">
      <h3>作文分类</h3>
      <ul class="category-list">
        <li v-for="item in postsData.categorys" :key="item.title">
          <a
            :href="withBase(item.link)"
            @click="handleClick"
            :class="props.category === item.title ? 'active' : ''"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3>热门标签</h3>
      <div class="popular-tags">
        <span class="tag">青春</span>
        <span class="tag">成长</span>
        <span class="tag">亲情</span>
        <span class="tag">友情</span>
        <span class="tag">梦想</span>
        <span class="tag">环保</span>
        <span class="tag">科技</span>
        <span class="tag">传统文化</span>
        <span class="tag">家国情怀</span>
      </div>
    </div>

    <div class="sidebar-section" v-if="postsData.featureds?.length">
      <h3>精选推荐</h3>
      <ul class="category-list">
        <li v-for="item in postsData.featureds" :key="item.url">
          <a :href="withBase(item.url)">《{{ item.frontmatter.title }}》</a>
        </li>
      </ul>
    </div>
  </aside>

  <!-- 抽屉背景遮罩 -->
  <div
    v-if="isMobile"
    class="drawer-backdrop"
    :class="{ active: isDrawerOpen }"
    @click="closeDrawer"
  ></div>
</template>

<style scoped>
/* 侧边栏 */
.sidebar {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  height: fit-content;
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section h3 {
  color: #4a6b7d;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e6d5b8;
}

.category-list {
  list-style: none;
}

.category-list li {
  margin-bottom: 0.8rem;
}

.category-list a {
  color: #333333;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  padding: 0.3rem 0;
}

.category-list a:hover {
  color: #8ba88e;
  transform: translateX(5px);
}

.category-list .active {
  color: #8ba88e;
  transform: translateX(5px);
  font-weight: bold;
  position: relative;
  padding-left: 1rem;
}

.category-list .active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background-color: #8ba88e;
  border-radius: 2px;
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #e6d5b8;
  color: #4a6b7d;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag:hover {
  background-color: #8ba88e;
  color: white;
}

/* 移动端抽屉按钮样式 - 悬浮圆形按钮 */
.drawer-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8ba88e;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  /* 悬浮定位在左下角 */
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  margin: 0;
  z-index: 999;
  border-radius: 50%;
}

.drawer-toggle:hover {
  background-color: #7a9a7e;
  transform: scale(1.05);
}

.toggle-text {
  display: none; /* 隐藏文字，只保留图标 */
}

/* 汉堡菜单图标 */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
  /* 居中图标 */
  margin: 0 auto;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* 抽屉关闭按钮 */
.drawer-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a6b7d;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.drawer-close:hover {
  background-color: #f5f5f5;
}

/* 抽屉背景遮罩 */
.drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.drawer-backdrop.active {
  opacity: 1;
  visibility: visible;
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 抽屉导航样式 */
  .drawer {
    position: fixed;
    top: 0;
    left: -280px; /* 初始位置在屏幕外 */
    width: 280px;
    height: 100vh;
    z-index: 1002;
    border-radius: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;
    overflow-y: auto;
  }

  .drawer-open {
    left: 0; /* 打开时移动到屏幕内 */
  }
  
  /* 移除主容器上边距，因为我们现在使用悬浮按钮 */
  :deep(.main-container) {
    padding-top: 1rem; /* 恢复正常间距 */
  }
}
</style>
