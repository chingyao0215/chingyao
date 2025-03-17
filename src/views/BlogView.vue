<template>
  <div class="blog-view">
    <h2>Blog</h2>
    <p>Welcome to my blog! Here I share my thoughts and experiences about web development, design, and technology.</p>
    
    <div class="blog-posts">
      <article class="blog-post">
        <h3>Getting Started with Vue 3 Composition API</h3>
        <div class="post-meta">Posted on September 15, 2024</div>
        <p>
          The Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It's the recommended approach for new Vue 3 applications...
        </p>
        <a href="#" class="read-more">Read more</a>
      </article>
      
      <article class="blog-post">
        <h3>Building Custom UI Components</h3>
        <div class="post-meta">Posted on August 28, 2024</div>
        <p>
          Creating reusable UI components is essential for maintaining a consistent design system. In this post, I'll share my approach to building a component library...
        </p>
        <a href="#" class="read-more">Read more</a>
      </article>
      
      <article class="blog-post">
        <h3>CSS Color Schemes for Modern Web Design</h3>
        <div class="post-meta">Posted on August 10, 2024</div>
        <p>
          Choosing the right color scheme for your website can significantly impact user experience. Let's explore some modern color palettes and how to implement them...
        </p>
        <a href="#" class="read-more">Read more</a>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
// Blog component logic can be added here
</script>

<style scoped>
.blog-view {
  width: 100%;
}

h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #212A31;
}

p {
  margin-bottom: 2rem;
  color: #2E3944;
  line-height: 1.6;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-post {
  padding: 1.5rem;
  border: 1px solid #D3D9D4;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.blog-post h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #124E66;
}

.post-meta {
  font-size: 0.9rem;
  color: #748D92;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #124E66;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style> 