<script setup lang="ts">
import { useData, useRoute } from "vitepress";
const { site } = useData();
const route = useRoute();

const isActive = (link: string) => {
  return route.path === link;
};

const goHome = () => {
  window.location.href = "/";
};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo" @click="goHome">
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
      </div>
      <nav v-if="site.themeConfig.nav.length">
        <ul>
          <li v-for="item in site.themeConfig.nav">
            <a :href="item.link" :class="{ active: isActive(item.link) }">{{
              item.text
            }}</a>
          </li>
        </ul>
      </nav>
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

@media (max-width: 768px) {
  header .container {
    flex-direction: column;
  }

  .logo {
    margin-bottom: 15px;
    text-align: center;
  }

  nav ul {
    justify-content: center;
  }

  nav ul li {
    margin: 0 10px;
  }
}
</style>
