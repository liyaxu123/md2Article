<script setup lang="ts">
import { useData, withBase, useRouter } from "vitepress";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { data as articlesData } from "../articles.data";

const { frontmatter: fm } = useData();
const router = useRouter();
const searchQuery = ref("");
const showResults = ref(false);
const searchResults = ref<any[]>([]);
// 添加点击事件监听器
const searchContainer = ref(null);

// 计算属性：根据搜索关键词过滤文章
const filteredArticles = computed(() => {
  if (!searchQuery.value.trim()) return [];

  const query = searchQuery.value.toLowerCase();
  return articlesData.allPosts
    .filter((article) => {
      const title = article.frontmatter.title?.toLowerCase() || "";
      const author = article.frontmatter.author?.toLowerCase() || "";

      return title.includes(query) || author.includes(query);
    })
    .slice(0, 5); // 限制显示前5条结果
});

// 处理搜索
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    searchResults.value = filteredArticles.value;
    showResults.value = true;
  }
};

// 处理点击搜索结果
const handleResultClick = (url) => {
  router.go(withBase(url));
  showResults.value = false;
  searchQuery.value = "";
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// 处理点击外部事件
const handleClickOutside = (event: MouseEvent) => {
  if (searchContainer.value && !(event.target as Node).contains(searchContainer.value as Node)) {
    showResults.value = false;
  }
};
</script>

<template>
  <section
    class="hero"
    v-if="fm.hero"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fm.hero.bg})`,
    }"
    loading="lazy"
  >
    <div class="container">
      <div class="hero-content">
        <h2>{{ fm.hero.title }}</h2>
        <p>{{ fm.hero.subTitle }}</p>
        <div class="search-container" ref="searchContainer">
          <div class="search-box">
            <input
              type="text"
              v-model="searchQuery"
              :placeholder="fm.hero.searchPlaceholder"
              @input="showResults = searchQuery.trim().length > 0"
              @keyup.enter="handleSearch"
            />
            <button @click="handleSearch"><i class="bi bi-search"></i></button>
          </div>
          <div
            class="search-results"
            v-if="showResults && filteredArticles.length > 0"
          >
            <ul>
              <li
                v-for="(article, index) in filteredArticles"
                :key="index"
                @click="handleResultClick(article.url)"
              >
                <div class="result-title">{{ article.frontmatter.title }}</div>
                <div class="result-meta" v-if="article.frontmatter.author">
                  作者: {{ article.frontmatter.author }}
                </div>
              </li>
            </ul>
          </div>
          <div
            class="search-results no-results"
            v-else-if="
              showResults && searchQuery.trim() && filteredArticles.length === 0
            "
          >
            <p>未找到相关结果</p>
          </div>
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

.search-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-box {
  display: flex;
  width: 100%;
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

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 5px;
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
  color: #333;
}

.search-results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-results li:last-child {
  border-bottom: none;
}

.search-results li:hover {
  background-color: #f5f5f5;
}

.result-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.result-meta {
  font-size: 0.85rem;
  color: #666;
}

.no-results {
  padding: 15px;
  text-align: center;
  color: #666;
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
    font-size: 0.9rem;
  }

  .search-box button {
    padding: 0 15px;
  }

  .search-container {
    max-width: 90%;
  }

  .search-results {
    max-height: 250px;
  }

  .result-title {
    font-size: 0.9rem;
  }

  .result-meta {
    font-size: 0.8rem;
  }
}
</style>
