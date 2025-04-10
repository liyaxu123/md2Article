<script setup lang="ts">
import CategoryAside from "./CategoryAside.vue";
import CategoryContent from "./CategoryContent.vue";
import { ref, onMounted } from "vue";

const curCategory = ref();

onMounted(() => {
  // 初始化时获取参数
  const url = new URL(window.location.href);
  curCategory.value = url.searchParams.get("type");
});

const handleChange = (type) => {
  curCategory.value = type;
};
</script>

<template>
  <div class="main-container">
    <!-- 侧边栏 -->
    <CategoryAside :category="curCategory" @onChange="handleChange" />
    <!-- 作文展示区 -->
    <CategoryContent :category="curCategory" />
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
    gap: 1rem;
  }

  .essay-container {
    grid-template-columns: 1fr;
  }
}
</style>
