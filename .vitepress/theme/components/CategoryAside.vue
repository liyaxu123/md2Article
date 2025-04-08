<script setup lang="ts">
import { withBase } from "vitepress";
import { data as postsData } from "../articles.data";
const emit = defineEmits(["onChange"]);
const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});

const handleClick = () => {
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type");
  emit("onChange", type);
};
</script>

<template>
  <!-- 侧边栏 -->
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3>作文分类</h3>
      <ul class="category-list">
        <li v-for="item in postsData.categorys" :key="item.title">
          <a
            :href="withBase(item.link)"
            @click="handleClick"
            :class="props.category === item.title ? 'active' : ''"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3>热门标签</h3>
      <div class="popular-tags">
        <span class="tag">青春</span>
        <span class="tag">成长</span>
        <span class="tag">亲情</span>
        <span class="tag">友情</span>
        <span class="tag">梦想</span>
        <span class="tag">环保</span>
        <span class="tag">科技</span>
        <span class="tag">传统文化</span>
        <span class="tag">家国情怀</span>
      </div>
    </div>

    <div class="sidebar-section" v-if="postsData.featureds?.length">
      <h3>精选推荐</h3>
      <ul class="category-list">
        <li v-for="item in postsData.featureds" :key="item.url">
          <a :href="withBase(item.url)">《{{ item.frontmatter.title }}》</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* 侧边栏 */
.sidebar {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  height: fit-content;
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section h3 {
  color: #4a6b7d;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e6d5b8;
}

.category-list {
  list-style: none;
}

.category-list li {
  margin-bottom: 0.8rem;
}

.category-list a {
  color: #333333;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  padding: 0.3rem 0;
}

.category-list a:hover {
  color: #8ba88e;
  transform: translateX(5px);
}

.category-list .active {
  color: #8ba88e;
  transform: translateX(5px);
  font-weight: bold;
  position: relative;
  padding-left: 1rem;
}

.category-list .active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background-color: #8ba88e;
  border-radius: 2px;
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #e6d5b8;
  color: #4a6b7d;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag:hover {
  background-color: #8ba88e;
  color: white;
}
</style>
