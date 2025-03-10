<script setup lang="ts">
import {ref} from 'vue';
import DefineModelTextInput from './DefineModelTextInput.vue';

const propsName = ref(null);
</script>

<template>
    <DefineModelTextInput
        v-model="propsName" />
    <span>Props name: {{ propsName }}</span>
</template>