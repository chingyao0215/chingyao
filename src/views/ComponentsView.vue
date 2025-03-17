<template>
  <div class="components-view">
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
  </div>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue';
import RippleButton from '../components/RippleButton.vue';
import TextInput from '../components/TextInput.vue';
import Select2 from '../components/Select2.vue';
import DefineModelTextInputParent from '../components/DefineModelTextInputParent.vue';
</script>

<style scoped>
.components-view {
  width: 100%;
}

h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #212A31; /* Dark gray from the image */
}

p {
  margin-bottom: 2rem;
  color: #2E3944; /* Medium gray from the image */
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
  border: 1px solid #D3D9D4; /* Light gray-green from the image */
  border-radius: 8px;
  background-color: #f5f5f5;
}

.component-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #124E66; /* Teal from the image */
}

pre {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #212A31; /* Dark gray from the image */
  border-radius: 4px;
  overflow-x: auto;
}

code {
  color: #D3D9D4; /* Light gray-green from the image */
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
}
</style> 