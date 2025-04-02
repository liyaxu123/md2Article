<script setup lang="ts">
import CategoryAside from "./CategoryAside.vue";
import CategoryContent from "./CategoryContent.vue";
</script>

<template>
  <div class="main-container">
    <!-- 侧边栏 -->
    <CategoryAside />
    <!-- 作文展示区 -->
    <CategoryContent />
  </div>
</template>

<style scoped>
/* 主要内容 */
.main-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-container {
    grid-template-columns: 1fr;
  }

  .essay-container {
    grid-template-columns: 1fr;
  }

  nav ul {
    display: none;
  }
}
</style>
