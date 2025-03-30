<script setup>
import { useData } from "vitepress";
const { page, frontmatter } = useData();
</script>

<template>
  <h1>我的自定义布局</h1>

  <div v-if="page.isNotFound">Custom 404 page!</div>
  <div v-if="frontmatter.layout === 'home'">Custom home page!</div>
  <!-- 此处将渲染 markdown 内容 -->
  <Content v-else />
</template>
