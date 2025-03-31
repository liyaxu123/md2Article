<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <section class="latest" v-if="fm.latest">
    <div class="container">
      <h2 class="section-title">{{ fm.latest.title }}</h2>
      <div class="latest-grid" v-if="fm.featured.items.length > 0">
        <div
          class="essay-card"
          v-for="item in fm.latest.items"
          :key="item.title"
        >
          <h3>
            <a :href="item.link">{{ item.title }}</a>
          </h3>
          <p>
            {{ item.details }}
          </p>
          <div class="card-meta">
            <span><i class="bi bi-person"></i> {{ item.author }}</span>
            <span><i class="bi bi-calendar3"></i> {{ item.time }}</span>
            <span class="category">{{ item.category }}</span>
          </div>
        </div>
      </div>
      <div class="view-more">
        <a :href="fm.latest.action.link" class="btn">{{
          fm.latest.action.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.latest {
  padding: 80px 0;
}

.latest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.essay-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.essay-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.essay-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.essay-card h3 a {
  color: #5a6268;
}

.essay-card h3 a:hover {
  color: #8c7853;
}

.essay-card p {
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

.category {
  display: inline-block;
  padding: 5px 12px;
  background-color: #f0ebe1;
  color: #8c7853;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 15px;
}

.view-more {
  text-align: center;
  margin-top: 40px;
}

@media (max-width: 992px) {
  .latest-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .latest-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>
