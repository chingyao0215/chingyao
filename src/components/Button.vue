<template>
	<div class="button" role="button">{{ props.text }}</div>
</template>

<script setup lang="ts">
export interface Props {
	text: string,
	classWrapper?: string[]
}

const props = withDefaults(defineProps<Props>(), {
	text: 'Default Button',
	classWrapper: () => ([])
})
</script>

<style scoped>
.button {
	background-color: #6200ee;
	border-radius: 8px;
	border-style: none;
	box-sizing: border-box;
	color: #FFFFFF;
	cursor: pointer;
	display: inline-block;
	font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	font-weight: 500;
	height: 40px;
	line-height: 20px;
	list-style: none;
	margin: 0;
	outline: none;
	padding: 10px 16px;
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: color 100ms;
	vertical-align: baseline;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.button:hover,
.button:focus {
	background-color: #F082AC;
}
</style>
