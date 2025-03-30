<script setup>
import { useData } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <main class="essay-detail">
    <div class="container">
      <article>
        <header class="essay-header">
          <h1 class="essay-title">{{ fm.title }}</h1>
          <div class="essay-meta">
            <span><i class="bi bi-person"></i> {{ fm.author }}</span>
            <span><i class="bi bi-calendar3"></i> {{ fm.time }}</span>
            <span><i class="bi bi-eye"></i> 1342 次阅读</span>
            <span><i class="bi bi-hand-thumbs-up"></i> 238 次点赞</span>
            <span class="essay-category">{{ fm.category }}</span>
          </div>
        </header>

        <div class="essay-content">
          <img :src="fm.cover" alt="封面图" v-if="fm.cover" />

          <Content />
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
/* 作文详情页特定样式 */
.essay-detail {
  padding: 60px 0;
}

.essay-header {
  margin-bottom: 40px;
  padding: 25px;
  background-color: #f9f7f2;
  border-radius: 12px;
  border-left: 4px solid #8c7853;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.essay-header::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    circle at top right,
    rgba(140, 120, 83, 0.1),
    transparent 70%
  );
  z-index: 0;
}

.essay-title {
  font-size: 2.5rem;
  color: #5a6268;
  margin-bottom: 20px;
  font-weight: 700;
}

.essay-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 25px;
  color: #888;
}

.essay-meta span {
  margin-right: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.essay-meta i {
  margin-right: 5px;
}

.essay-category {
  display: inline-block;
  padding: 5px 12px;
  background-color: #f0ebe1;
  color: #8c7853;
  border-radius: 20px;
  font-size: 0.9rem;
}

.essay-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 40px;
}

.essay-content :deep(h1) {
  display: none;
}

.essay-content :deep(p) {
  margin-bottom: 20px;
  text-indent: 2em;
}

.essay-content :deep(img) {
  max-width: 100%;
  margin: 30px auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .essay-title {
    font-size: 2rem;
  }

  .essay-actions {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .related-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .essay-title {
    font-size: 1.7rem;
  }

  .essay-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .essay-meta span {
    margin-bottom: 8px;
  }
}
</style>
