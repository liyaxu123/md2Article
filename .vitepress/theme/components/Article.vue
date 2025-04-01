<script setup>
import { useData } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <main class="essay-detail">
    <div class="article-detail-container">
      <article>
        <!-- 文章头部 -->
        <div class="article-header">
          <h1 class="article-title">{{ fm.title }}</h1>
          <div class="article-meta">
            <span><i class="bi bi-person"></i> 作者：{{ fm.author }}</span>
            <span><i class="bi bi-calendar3"></i> {{ fm.time }}</span>
            <span><i class="bi bi-book"></i> {{ fm.category }}</span>
            <span><i class="bi bi-eye"></i> 1342 次阅读</span>
            <span><i class="bi bi-hand-thumbs-up"></i> 238 次点赞</span>
          </div>
          <!-- 封面图 -->
          <div
            class="article-cover"
            :style="{ backgroundImage: `url(${fm.cover})` }"
          ></div>
        </div>

        <!-- 文章内容 -->
        <div class="essay-content">
          <Content />
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
/* 作文详情页特定样式 */
.article-detail-container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 2rem;
}

/* 文章头部 */
.article-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.article-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
  line-height: 1.4;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #999;
}

.article-meta span {
  margin: 0 1rem;
  display: flex;
  align-items: center;
}

.article-meta i {
  margin-right: 0.3rem;
  font-size: 1.1rem;
}

.article-cover {
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin-bottom: 2rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
}

/* 文章内容 */
.essay-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  background-color: #fff;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
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
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 3px;
}

.essay-content :deep(blockquote) {
  border-left: 3px solid #e0d4c4;
  padding-left: 1.5rem;
  margin: 2rem 0;
  color: #666;
  font-style: italic;
}

.essay-content :deep(blockquote p) {
  text-indent: 0;
}

@media (max-width: 768px) {
  .article-detail-container {
    padding: 0 1rem;
  }

  .essay-content {
    padding: 1.5rem;
  }

  .article-cover {
    height: 250px;
  }

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

  .article-meta {
    justify-content: space-between;
  }
}

@media (max-width: 576px) {
  .article-detail-container {
    padding: 0 1rem;
  }

  .essay-content {
    padding: 1.5rem;
  }

  .article-cover {
    height: 250px;
  }

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
