<script setup lang="ts">
import HomeHero from "./HomeHero.vue";
import HomeFeatured from "./HomeFeatured.vue";
import HomeCategories from "./HomeCategories.vue";
import HomeLatest from "./HomeLatest.vue";
import HomeShare from "./HomeShare.vue";
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <div class="home">
    <HomeHero />
    <HomeFeatured />
    <HomeCategories />
    <HomeLatest />
    <HomeShare />
  </div>
</template>

<style scoped>
/* 自定义样式 */
</style>
