<template>
<div class="app-container">
  <!-- Upper section - Main navigation -->
  <header class="main-header">
    <div class="logo">
      <h1>Chingyao</h1>
    </div>
    <nav class="main-nav">
      <ul>
        <li><a href="#" class="active">Blog</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">Game</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <button class="theme-toggle">🌙</button>
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
        <h3>Components</h3>
        <ul>
          <li><a href="#" class="active">Buttons</a></li>
          <li><a href="#">Text Inputs</a></li>
          <li><a href="#">Select</a></li>
          <li><a href="#">Animations</a></li>
          <li><a href="#">Layout</a></li>
        </ul>
      </nav>
    </aside>

    <!-- Right part - Content area -->
    <main class="content">
      <h2>Buttons</h2>
      <p>A collection of button components with different styles and effects.</p>
      
      <div class="component-showcase">
        <div class="component-item">
          <h3>Basic Button</h3>
          <Button 
            text="My Button"
            :classWrapper="['mr-10']"/>
          <pre><code>{{ '<Button text="My Button" />' }}</code></pre>
        </div>
        
        <div class="component-item">
          <h3>Ripple Effect Button</h3>
          <RippleButton 
            text="Ripple Effect" 
            :classWrapper="[]"/>
          <pre><code>{{ '<RippleButton text="Ripple Effect" />' }}</code></pre>
        </div>
      </div>
      
      <div class="component-showcase">
        <div class="component-item">
          <h3>Text Input</h3>
          <TextInput />
        </div>
        
        <div class="component-item">
          <h3>Model Text Input</h3>
          <DefineModelTextInputParent />
        </div>
        
        <div class="component-item">
          <h3>Select Component</h3>
          <Select2 />
        </div>
      </div>
    </main>
  </div>
</div>
</template>


<script setup lang="ts">
import Button from './components/Button.vue';
import RippleButton from './components/RippleButton.vue';
import TextInput from './components/TextInput.vue';
import Select2 from './components/Select2.vue';
import DefineModelTextInputParent from './components/DefineModelTextInputParent.vue';
</script>


<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Header styles */
.main-header {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #eaecef;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #3eaf7c; /* Vue.js green color */
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
  color: #2c3e50;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s;
}

.main-nav a.active,
.main-nav a:hover {
  border-bottom: 2px solid #3eaf7c;
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
}

.github-link {
  color: #2c3e50;
  text-decoration: none;
}

/* Main container styles */
.main-container {
  display: flex;
  flex-grow: 1;
}

/* Sidebar styles */
.sidebar {
  width: 250px;
  background-color: #f9f9f9;
  border-right: 1px solid #eaecef;
  padding: 2rem 0;
}

.sub-nav h3 {
  padding: 0 1.5rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
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
  color: #2c3e50;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background-color 0.2s;
}

.sub-nav a.active {
  color: #3eaf7c;
  background-color: #e6f7ef;
  border-right: 2px solid #3eaf7c;
}

.sub-nav a:hover {
  background-color: #e6f7ef;
}

/* Content styles */
.content {
  flex-grow: 1;
  padding: 2rem;
  background-color: #ffffff;
}

.content h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
}

.content p {
  margin-bottom: 2rem;
  color: #476582;
  line-height: 1.6;
}

.component-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.component-item {
  flex: 1 1 300px;
  padding: 1.5rem;
  border: 1px solid #eaecef;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.component-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #2c3e50;
}

pre {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #282c34;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  color: #e2e2e2;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
}
</style>
