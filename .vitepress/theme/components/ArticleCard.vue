<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  cover: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="featured-card">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${props.cover})` }"
      loading="lazy"
    ></div>
    <div class="card-content">
      <span class="category">{{ props.category }}</span>
      <h3>
        <a :href="props.url">{{ props.title }}</a>
      </h3>
      <p>{{ props.details }}</p>
      <div class="card-meta">
        <span><i class="bi bi-person"></i> {{ props.author }}</span>
        <span><i class="bi bi-eye"></i> 1342</span>
        <span><i class="bi bi-hand-thumbs-up"></i> 238</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
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
</style>
