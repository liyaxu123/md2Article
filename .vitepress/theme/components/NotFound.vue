<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <div class="divider"></div>
      <h2 class="error-title">页面未找到</h2>
      <p class="error-description">
        抱歉，您访问的页面不存在或已被移动到其他位置。
      </p>
      <div class="action-buttons">
        <a class="btn" :href="withBase('/')">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from "vitepress";

const goBack = () => {
  window.history.back();
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
}

.not-found-content {
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-brand);
  line-height: 1;
}

.divider {
  height: 4px;
  width: 60px;
  background-color: var(--vp-c-brand);
  margin: 1.5rem auto;
  border-radius: 2px;
}

.error-title {
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.error-description {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .error-code {
    font-size: 6rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .error-description {
    font-size: 1rem;
  }
}
</style>
