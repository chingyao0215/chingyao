<template>
  <div class="about-view">
    <h2>About Me</h2>
    <div class="about-content">
      <div class="profile-section">
        <div class="profile-image">
          <div class="image-placeholder">
            <span>Profile Photo</span>
          </div>
        </div>
        <div class="profile-info">
          <h3>Chingyao</h3>
          <p class="job-title">Frontend Developer</p>
          <div class="social-links">
            <a href="https://github.com/chingyao0215" target="_blank" class="social-link">GitHub</a>
            <a href="#" target="_blank" class="social-link">LinkedIn</a>
            <a href="#" target="_blank" class="social-link">Twitter</a>
          </div>
        </div>
      </div>
      
      <div class="bio-section">
        <h3>Biography</h3>
        <p>
          Hello! I'm a passionate frontend developer with a focus on creating beautiful, 
          responsive, and user-friendly web applications. I specialize in Vue.js and modern 
          JavaScript frameworks, with a keen interest in UI/UX design.
        </p>
        <p>
          This website serves as my personal portfolio and playground for experimenting with 
          new web technologies and design concepts. Feel free to explore the various sections 
          to see my work and projects.
        </p>
      </div>
      
      <div class="skills-section">
        <h3>Skills</h3>
        <div class="skills-grid">
          <div class="skill-item">
            <h4>Frontend</h4>
            <ul>
              <li>Vue.js</li>
              <li>TypeScript</li>
              <li>HTML5/CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="skill-item">
            <h4>Tools</h4>
            <ul>
              <li>Git</li>
              <li>Vite</li>
              <li>Figma</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div class="skill-item">
            <h4>Other</h4>
            <ul>
              <li>UI/UX Design</li>
              <li>Agile Methodology</li>
              <li>Technical Writing</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About component logic can be added here
</script>

<style scoped>
.about-view {
  width: 100%;
}

h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #212A31;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-section {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid #D3D9D4;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #212A31;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D3D9D4;
  font-size: 1rem;
  text-align: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-info h3 {
  margin: 0;
  font-size: 1.8rem;
  color: #124E66;
}

.job-title {
  margin: 0.5rem 0 1rem;
  font-size: 1.2rem;
  color: #748D92;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #124E66;
  text-decoration: none;
  font-weight: 500;
}

.social-link:hover {
  text-decoration: underline;
}

.bio-section, .skills-section {
  padding: 1.5rem;
  border: 1px solid #D3D9D4;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.bio-section h3, .skills-section h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #124E66;
}

.bio-section p {
  margin-bottom: 1rem;
  color: #2E3944;
  line-height: 1.6;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.skill-item {
  flex: 1 1 200px;
}

.skill-item h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #212A31;
}

.skill-item ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #2E3944;
}

.skill-item li {
  margin-bottom: 0.5rem;
}
</style> 