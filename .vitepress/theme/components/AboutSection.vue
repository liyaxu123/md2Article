<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <section class="about-section" v-if="fm.section">
    <div class="container">
      <h2 class="section-title">{{ fm.section.title }}</h2>
      <div class="about-intro">
        <p>{{ fm.section.text1 }}</p>
        <p>{{ fm.section.text2 }}</p>
      </div>

      <h2 class="section-title">{{ fm.section.subtitle }}</h2>
      <div class="mission-values" v-if="fm.section.items?.length > 0">
        <div
          class="mission-card"
          v-for="item in fm.section.items"
          :key="item.title"
        >
          <div class="mission-icon"><i :class="item.icon"></i></div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 80px 0;
}

.about-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.about-intro p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

.mission-values {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.mission-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.mission-icon {
  font-size: 2.5rem;
  color: #8c7853;
  margin-bottom: 20px;
}

.mission-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #5a6268;
}
</style>
