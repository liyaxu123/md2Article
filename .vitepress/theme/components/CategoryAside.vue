<script setup lang="ts"></script>

<template>
  <!-- 侧边栏 -->
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3>作文分类</h3>
      <ul class="category-list">
        <li><a href="#">记叙文</a></li>
        <li><a href="#">议论文</a></li>
        <li><a href="#">说明文</a></li>
        <li><a href="#">应用文</a></li>
        <li><a href="#">散文</a></li>
        <li><a href="#">诗歌</a></li>
        <li><a href="#">小说</a></li>
        <li><a href="#">古文鉴赏</a></li>
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

    <div class="sidebar-section">
      <h3>本周推荐</h3>
      <ul class="category-list">
        <li><a href="#">《窗外的梧桐》</a></li>
        <li><a href="#">《论坚持的意义》</a></li>
        <li><a href="#">《故乡的端午》</a></li>
        <li><a href="#">《科技与人文》</a></li>
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
  color: #4A6B7D;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #E6D5B8;
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
  color: #8BA88E;
  transform: translateX(5px);
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #E6D5B8;
  color: #4A6B7D;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag:hover {
  background-color: #8BA88E;
  color: white;
}
</style>
