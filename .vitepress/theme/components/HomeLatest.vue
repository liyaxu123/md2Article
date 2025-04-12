<script setup lang="ts">
import { useData, withBase } from "vitepress";
import SimpleArticleCard from "./SimpleArticleCard.vue";
const { frontmatter: fm } = useData();
import { data as postsData } from "../articles.data";
</script>

<template>
  <section class="latest" v-if="fm.latest">
    <div class="container">
      <h2 class="section-title">{{ fm.latest.title }}</h2>
      <div class="latest-grid" v-if="postsData.latests?.length > 0">
        <!-- 作文卡片 -->
        <SimpleArticleCard
          v-for="item in postsData.latests"
          :key="item.frontmatter.title"
          :title="item.frontmatter.title"
          :link="withBase(item.url)"
          :time="item.frontmatter.time"
          :category="item.frontmatter.category"
          :details="item.frontmatter.details"
          :author="item.frontmatter.author"
        />
      </div>
      <div class="view-more">
        <a :href="withBase(fm.latest.action.link)" class="btn">{{
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
