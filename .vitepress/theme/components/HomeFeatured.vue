<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <section class="featured" v-if="fm.featured">
    <div class="container">
      <h2 class="section-title">{{ fm.featured.title }}</h2>
      <div class="featured-grid" v-if="fm.featured.items.length > 0">
        <!-- 卡片 -->
        <div
          class="featured-card"
          v-for="item in fm.featured.items"
          :key="item.title"
        >
          <div
            class="card-image"
            :style="{ backgroundImage: `url(${item.cover})` }"
          ></div>
          <div class="card-content">
            <span class="category">{{ item.category }}</span>
            <h3>
              <a :href="item.link">{{ item.title }}</a>
            </h3>
            <p>
              {{ item.details }}
            </p>
            <div class="card-meta">
              <span><i class="bi bi-person"></i> {{ item.author }}</span>
              <span><i class="bi bi-eye"></i> {{ item.view }}</span>
              <span><i class="bi bi-hand-thumbs-up"></i> {{ item.love }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more" v-if="fm.featured.action">
        <a :href="fm.featured.action.link" class="btn">{{
          fm.featured.action.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured {
  padding: 80px 0;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.featured-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 25px;
}

.category {
  display: inline-block;
  padding: 5px 12px;
  background-color: #f0ebe1;
  color: #8c7853;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 15px;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #5a6268;
}

.card-content p {
  color: #666;
  margin-bottom: 20px;
}

.card-meta {
  display: flex;
  color: #888;
  font-size: 0.9rem;
}

.card-meta span {
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.card-meta i {
  margin-right: 5px;
}

.view-more {
  text-align: center;
  margin-top: 40px;
}
</style>
