<template>
	<div
		class="button"
		@click="createRipple">
			<span
				v-if="initRipple"
				class="ripple"
				:style="rippleStyle">
			</span>
			{{ props.text }}
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
export interface Props {
	text: string,
	classWrapper: string[]
}

const props = withDefaults(defineProps<Props>(), {
	text: 'Ripple button',
	classWrapper: () => ([])
})

const initRipple = ref(false);
let rippleStyle = reactive({});

const createRipple = (event: MouseEvent) => {
	initRipple.value = true;
	const button = event.currentTarget as HTMLElement;

	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	rippleStyle = {
		width: `${diameter}px`,
		height: `${diameter}px`,
		left: `${event.clientX - (button.offsetLeft + radius)}px`,
		top: `${event.clientY - (button.offsetTop + radius)}px`
	}

	setTimeout(() => {
		initRipple.value = false
	}, 600);
}

</script>

<style scoped>
.button {
	position: relative;
	overflow: hidden;
	transition: background 400ms;
	color: #fff;
	background-color: #212A31;
	padding: 10px 16px;
	font-size: 14px;
	height: 22px;
	font-weight: 500;
	line-height: 20px;
	outline: 0;
	border: 0;
	border-radius: 8px;
	box-shadow: 0 0 0.5rem rgba(18, 78, 102, 0.3);
	cursor: pointer;
}

span.ripple {
	position: absolute;
	border-radius: 50%;
	transform: scale(0);
	animation: ripple 600ms linear;
	background-color: rgba(116, 141, 146, 0.7);
}

@keyframes ripple {
	to {
		transform: scale(4);
		opacity: 0;
	}
}
</style>