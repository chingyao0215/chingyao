<template>
<div class="app-container">
  <!-- Upper section - Main navigation -->
  <header class="main-header">
    <div class="logo">
      <h1>Chingyao</h1>
    </div>
    <nav class="main-nav">
      <ul>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/components">Components</router-link></li>
        <li><router-link to="/game">Game</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <div class="header-actions">
      <button class="theme-toggle" @click="toggleTheme">🌙</button>
      <a href="https://github.com/chingyao0215" class="github-link" target="_blank">
        <span class="github-icon">GitHub</span>
      </a>
    </div>
  </header>

  <!-- Main content area with sidebar and content -->
  <div class="main-container">
    <!-- Left sidebar - Sub navigation -->
    <aside class="sidebar">
      <nav class="sub-nav">
        <template v-if="currentMainRoute === 'components'">
          <h3>Components</h3>
          <ul>
            <li><a href="#" class="active">Buttons</a></li>
            <li><a href="#">Text Inputs</a></li>
            <li><a href="#">Select</a></li>
            <li><a href="#">Animations</a></li>
            <li><a href="#">Layout</a></li>
          </ul>
        </template>
        
        <template v-else-if="currentMainRoute === 'blog'">
          <h3>Categories</h3>
          <ul>
            <li><a href="#" class="active">All Posts</a></li>
            <li><a href="#">Vue.js</a></li>
            <li><a href="#">TypeScript</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">Design</a></li>
          </ul>
        </template>
        
        <template v-else-if="currentMainRoute === 'game'">
          <h3>Games</h3>
          <ul>
            <li><a href="#" class="active">All Games</a></li>
            <li><a href="#">Memory Match</a></li>
            <li><a href="#">Vue Quiz</a></li>
            <li><a href="#">Coming Soon</a></li>
          </ul>
        </template>
        
        <template v-else-if="currentMainRoute === 'about'">
          <h3>About</h3>
          <ul>
            <li><a href="#" class="active">Profile</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </template>
      </nav>
    </aside>

    <!-- Right part - Content area -->
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isDarkMode = ref(false);

const currentMainRoute = computed(() => {
  const path = route.path;
  if (path.startsWith('/blog')) return 'blog';
  if (path.startsWith('/components')) return 'components';
  if (path.startsWith('/game')) return 'game';
  if (path.startsWith('/about')) return 'about';
  return '';
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  // You can implement dark mode logic here
};
</script>


<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #f5f5f5;
}

/* Header styles */
.main-header {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: #212A31; /* Dark gray from the image */
  color: white;
  border-bottom: 1px solid #2E3944;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.main-nav {
  margin-left: 2rem;
  flex-grow: 1;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin-right: 1.5rem;
}

.main-nav a {
  color: #748D92; /* Light gray-teal from the image */
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.main-nav a.router-link-active {
  color: white;
  border-bottom: 2px solid #124E66; /* Teal from the image */
}

.main-nav a:hover {
  color: white;
  border-bottom: 2px solid #124E66; /* Teal from the image */
}

.header-actions {
  display: flex;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
  color: #748D92;
}

.github-link {
  color: #748D92;
  text-decoration: none;
}

.github-link:hover {
  color: white;
}

/* Main container styles */
.main-container {
  display: flex;
  flex-grow: 1;
}

/* Sidebar styles */
.sidebar {
  width: 250px;
  background-color: #D3D9D4; /* Light gray-green from the image */
  border-right: 1px solid #748D92;
  padding: 2rem 0;
}

.sub-nav h3 {
  padding: 0 1.5rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #212A31; /* Dark gray from the image */
}

.sub-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sub-nav li {
  margin: 0;
}

.sub-nav a {
  display: block;
  padding: 0.5rem 1.5rem;
  color: #124E66; /* Teal from the image */
  text-decoration: none;
  font-size: 0.95rem;
  transition: background-color 0.2s;
}

.sub-nav a.active {
  color: #212A31; /* Dark gray from the image */
  background-color: rgba(116, 141, 146, 0.2); /* Light gray-teal with transparency */
  border-right: 2px solid #124E66; /* Teal from the image */
}

.sub-nav a:hover {
  background-color: rgba(116, 141, 146, 0.3);
}

/* Content styles */
.content {
  flex-grow: 1;
  padding: 2rem;
  background-color: white;
}
</style>
