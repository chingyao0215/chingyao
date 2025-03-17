<template>
  <div class="game-view">
    <h2>Games</h2>
    <p>Welcome to the games section! Here you'll find interactive web games built with Vue and JavaScript.</p>
    
    <div class="games-container">
      <div class="game-card">
        <h3>Memory Match</h3>
        <div class="game-preview">
          <div class="game-placeholder">
            <span>Game Preview</span>
          </div>
        </div>
        <p>Test your memory by matching pairs of cards. How quickly can you find all matches?</p>
        <button class="play-button">Play Now</button>
      </div>
      
      <div class="game-card">
        <h3>Vue Quiz</h3>
        <div class="game-preview">
          <div class="game-placeholder">
            <span>Game Preview</span>
          </div>
        </div>
        <p>Test your knowledge of Vue.js with this interactive quiz game.</p>
        <button class="play-button">Play Now</button>
      </div>
      
      <div class="game-card">
        <h3>Coming Soon</h3>
        <div class="game-preview">
          <div class="game-placeholder">
            <span>Under Development</span>
          </div>
        </div>
        <p>More games are currently in development. Check back soon!</p>
        <button class="play-button" disabled>Coming Soon</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Game component logic can be added here
</script>

<style scoped>
.game-view {
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

.games-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.game-card {
  flex: 1 1 300px;
  padding: 1.5rem;
  border: 1px solid #D3D9D4;
  border-radius: 8px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.game-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #124E66;
}

.game-preview {
  width: 100%;
  height: 180px;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;
}

.game-placeholder {
  width: 100%;
  height: 100%;
  background-color: #212A31;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D3D9D4;
  font-size: 1.2rem;
}

.play-button {
  margin-top: auto;
  padding: 0.75rem 1rem;
  background-color: #124E66;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.play-button:hover:not([disabled]) {
  background-color: #212A31;
}

.play-button[disabled] {
  background-color: #748D92;
  cursor: not-allowed;
  opacity: 0.7;
}
</style> 