<script setup lang="ts">
const name = defineModel<string>();
</script>

<template>
    <input
        type="text"
        v-model="name">
    <span>Name: {{ name }}</span>
</template>

<style scoped>
input {
    width: 100px;
    height: 30px;
}
</style>