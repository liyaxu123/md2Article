<script setup lang="ts">
import { useData } from "vitepress";
const { site } = useData();
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>{{ site.title }}</h2>
          <p>{{ site.description }}</p>
        </div>
        <div class="footer-links" v-if="site.themeConfig.nav.length">
          <h3>快速链接</h3>
          <ul>
            <li v-for="item in site.themeConfig.nav">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>联系我们</h3>
          <p>
            <i class="bi bi-envelope"></i>
            {{ site.themeConfig.footer.contactUs.emile }}
          </p>
          <p>
            <i class="bi bi-telephone"></i>
            {{ site.themeConfig.footer.contactUs.phone }}
          </p>
          <div class="social-links">
            <a href="#"><i class="bi bi-wechat"></i></a>
            <a href="#"><i class="bi bi-sina-weibo"></i></a>
            <a href="#"><i class="bi bi-tencent-qq"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ site.themeConfig.footer.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #2c3035;
  color: #fff;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo h2 {
  font-family: "ZCOOL XiaoWei", serif;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.footer-logo p {
  color: #bbb;
}

.footer-links h3,
.footer-contact h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-links h3::after,
.footer-contact h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: #8c7853;
}

.footer-links ul li {
  margin-bottom: 10px;
}

.footer-links ul li a {
  color: #bbb;
}

.footer-links ul li a:hover {
  color: #fff;
}

.footer-contact p {
  margin-bottom: 15px;
  color: #bbb;
  display: flex;
  align-items: center;
}

.footer-contact p i {
  margin-right: 10px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #3a3f44;
  color: #fff;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: #8c7853;
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #3a3f44;
  color: #bbb;
  font-size: 0.9rem;
}
</style>
