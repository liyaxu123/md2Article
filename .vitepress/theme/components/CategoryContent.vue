<script setup lang="ts">
import { withBase, useRouter } from "vitepress";
import SimpleArticleCard from "./SimpleArticleCard.vue";
import { data as postsData } from "../articles.data";
import { computed } from "vue";

const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});

// 根据分类筛选文章
const filteredPosts = computed(() => {
  const allPosts = postsData.allPosts.filter(
    (item) => !item.frontmatter.layout
  );

  if (!props.category) {
    return allPosts;
  }
  return allPosts.filter(
    (post) => post.frontmatter.category === props.category
  );
});
</script>

<template>
  <!-- 作文展示区 -->
  <main class="essay-container">
    <template v-if="filteredPosts.length > 0">
      <SimpleArticleCard
        v-for="item in filteredPosts"
        :key="item.title"
        :title="item.frontmatter.title"
        :link="withBase(item.url)"
        :time="item.frontmatter.time"
        :category="item.frontmatter.category"
        :details="item.frontmatter.details"
        :author="item.frontmatter.author"
      />
    </template>

    <div v-else class="empty-state">
      <div class="empty-icon">📭</div>
      <h3>暂无内容</h3>
      <p>该分类下暂时没有文章，敬请期待...</p>
    </div>
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

/* 空状态样式 */
.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin: 2rem 0;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.empty-state p {
  color: var(--vp-c-text-2);
}
</style>
