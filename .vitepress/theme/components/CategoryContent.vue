<script setup lang="ts">
import { withBase } from "vitepress";
import SimpleArticleCard from "./SimpleArticleCard.vue";
import { data as postsData } from "../articles.data";
</script>

<template>
  <!-- 作文展示区 -->
  <main class="essay-container">
    <SimpleArticleCard
      v-for="item in postsData.featureds"
      :key="item.title"
      :title="item.frontmatter.title"
      :link="withBase(item.url)"
      :time="item.frontmatter.time"
      :category="item.frontmatter.category"
      :details="item.frontmatter.details"
      :author="item.frontmatter.author"
    />
  </main>
</template>

<style scoped>
/* 作文展示区 */
.essay-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start; /* 防止卡片被拉伸，从顶部开始对齐 */
  grid-auto-rows: min-content; /* 确保行高由内容决定 */
}
</style>
