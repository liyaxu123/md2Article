<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Article from "./Article.vue";
const { page, frontmatter } = useData();

console.log("page:", page);
console.log("frontmatter:", frontmatter);
</script>

<template>
  <Header />
  <NotFound v-if="page.isNotFound" />
  <Home v-if="frontmatter.layout === 'home'" />
  <!-- 此处将渲染 markdown 内容 -->
  <Article v-else />
  <Footer />
</template>
