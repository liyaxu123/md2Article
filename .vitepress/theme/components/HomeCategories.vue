<script setup lang="ts">
import { useData, withBase } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <section class="categories" v-if="fm.categories">
    <div class="container">
      <h2 class="section-title">{{ fm.categories.title }}</h2>
      <div class="categories-grid" v-if="fm.categories.items.length > 0">
        <a
          :href="withBase(item.link)"
          class="category-card"
          v-for="item in fm.categories.items"
          :key="item.title"
        >
          <div class="category-icon"><i :class="item.icon"></i></div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.details }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: 80px 0;
  background-color: #f0ebe1;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.category-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 2.5rem;
  color: #8c7853;
  margin-bottom: 20px;
}

.category-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #5a6268;
}

.category-card p {
  color: #888;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>
