<script setup lang="ts">
import { useData, useRoute, useRouter, withBase } from "vitepress";
import { ref } from "vue";
const { site } = useData();
const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

const isActive = (link: string) => {
  return route.path === link;
};

const goHome = () => {
  router.go(withBase("/"));
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo" @click="goHome">
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
      </div>
      <!-- 桌面端导航 -->
      <nav class="desktop-nav" v-if="site.themeConfig.nav.length">
        <ul>
          <li v-for="item in site.themeConfig.nav">
            <a
              :href="withBase(item.link)"
              :class="{ active: isActive(withBase(item.link)) }"
              >{{ item.text }}</a
            >
          </li>
        </ul>
      </nav>
      <!-- 移动端汉堡菜单按钮 -->
      <div class="mobile-menu-toggle" @click="toggleMenu">
        <div class="hamburger" :class="{ 'is-active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 移动端下拉菜单 -->
    <div
      class="mobile-nav"
      :class="{ 'is-open': isMenuOpen }"
      v-if="site.themeConfig.nav.length"
    >
      <ul>
        <li v-for="item in site.themeConfig.nav">
          <a
            :href="withBase(item.link)"
            :class="{ active: isActive(withBase(item.link)) }"
            @click="closeMenu"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
}

.logo h1 {
  font-family: "ZCOOL XiaoWei", serif;
  font-size: 2rem;
  color: #5a6268;
  margin-bottom: 5px;
}

.logo p {
  font-size: 0.9rem;
  color: #8c7853;
}

nav ul {
  display: flex;
}

nav ul li {
  margin-left: 25px;
}

nav ul li a {
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
}

nav ul li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8c7853;
  transition: width 0.3s ease;
}

nav ul li a:hover::after,
nav ul li a.active::after {
  width: 100%;
}

/* 移动端菜单按钮样式 */
.mobile-menu-toggle {
  display: none;
  cursor: pointer;
}

.hamburger {
  width: 30px;
  height: 24px;
  position: relative;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #5a6268;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  top: 20px;
}

.hamburger.is-active span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.is-active span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

/* 移动端下拉菜单样式 */
.mobile-nav {
  display: none;
  background-color: #fff;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-nav.is-open {
  max-height: 330px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.mobile-nav ul {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.mobile-nav ul li {
  margin: 10px 0;
  text-align: center;
}

.mobile-nav ul li a {
  display: block;
  padding: 8px 0;
}

@media (max-width: 768px) {
  header {
    padding: 8px 0;
  }

  header .container {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
  }

  .logo {
    margin-bottom: 0;
    text-align: left;
  }

  .logo h1 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .logo p {
    font-size: 0.8rem;
    margin-top: 2px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .mobile-nav {
    display: block;
  }
}
</style>
