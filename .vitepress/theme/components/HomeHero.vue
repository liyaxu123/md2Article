<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <section
    class="hero"
    v-if="fm.hero"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fm.hero.bg})`,
    }"
  >
    <div class="container">
      <div class="hero-content">
        <h2>{{ fm.hero.title }}</h2>
        <p>{{ fm.hero.subTitle }}</p>
        <div class="search-box">
          <input type="text" :placeholder="fm.hero.searchPlaceholder" />
          <button><i class="bi bi-search"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 100px 0;
  text-align: center;
}

.hero-content h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.search-box {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

.search-box input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  outline: none;
}

.search-box button {
  padding: 0 25px;
  background-color: #8c7853;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-box button:hover {
  background-color: #6a5c3d;
}

@media (max-width: 992px) {
  .hero-content h2 {
    font-size: 2.3rem;
  }
}

@media (max-width: 768px) {
  .hero-content h2 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 70px 0;
  }

  .hero-content h2 {
    font-size: 1.7rem;
  }

  .search-box input {
    padding: 12px 15px;
  }

  .search-box button {
    padding: 0 15px;
  }
}
</style>
