
<template>
<div
	class="container">
	<div
		class="sidebar">
	</div>	
	<div
		class="content">
		<Button 
			:wrapperClass="['mr-10']"/>
		<RippleButton />
		<TextInput />
		<DefineModelTextInputParent />
		<Select2 />
		
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
.container {
	display: flex;
}
.sidebar {
	border-right: 5px solid white;
	width: 200px;
	background-color: grey;
	height: 100vh;
}
.content {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 50px 50px;
}

.break {
  flex-basis: 100%;
  height: 0;
}
</style>
