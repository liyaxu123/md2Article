<script setup lang="ts">
import { useData, withBase } from "vitepress";
const { frontmatter: fm } = useData();
</script>

<template>
  <section
    class="share"
    v-if="fm.share"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fm.share.bg})`,
    }"
  >
    <div class="container">
      <div class="share-content">
        <h2>{{ fm.share.title }}</h2>
        <p>{{ fm.share.desc }}</p>
        <a :href="withBase(fm.share.action.link)" class="btn btn-primary">{{
          fm.share.action.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.share {
  padding: 80px 0;
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
}

.share-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.share-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
