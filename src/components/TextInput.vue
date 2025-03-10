<template>
	<input type="text"
		class="text-input">
	</input>
</template>

<style>
.text-input {
	width: 100px;
	height: 30px;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #444;
	border-radius: 8px;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ddd;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text-inputfocus {
	border-color: mix(white, #0d6efd, 50%);
	outline: 0;
	box-shadow: 0 0 0 0.1rem rgba(13, 110, 253, 0.25);
}

&:disabled {
	background-color: #fafafa;
}
</style>