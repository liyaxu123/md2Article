<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Article from "./Article.vue";
import About from "./About.vue";
import Category from "./Category.vue";
const { page, frontmatter } = useData();
</script>

<template>
  <Header />
  <NotFound v-if="page.isNotFound" />

  <div v-else>
    <Home v-if="frontmatter.layout === 'home'" />
    <About v-else-if="frontmatter.layout === 'about'" />
    <Category v-else-if="frontmatter.layout === 'category'" />
    <!-- 此处将渲染 markdown 内容 -->
    <Article v-else />
  </div>

  <Footer />
</template>
