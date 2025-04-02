<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  time: {
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
  <!-- 简约文章卡片 -->
  <div class="essay-card">
    <h3>
      <a :href="props.link">{{ props.title }}</a>
    </h3>
    <p>{{ props.details }}</p>
    <div class="card-meta">
      <span><i class="bi bi-person"></i> {{ props.author }}</span>
      <span><i class="bi bi-calendar3"></i> {{ props.time }}</span>
      <span class="category">{{ props.category }}</span>
    </div>
  </div>
</template>

<style scoped>
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
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

.category {
  display: inline-block;
  padding: 5px 12px;
  background-color: #f0ebe1;
  color: #8c7853;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 15px;
}
</style>
