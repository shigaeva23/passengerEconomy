<template>
	<div class="v-option" :class="{ active, noInfo: !info }">
		<div class="v-option__title">{{ text }}</div>
		<div v-if="info" class="v-option__info">{{ info }}</div>
	</div>
</template>

<script setup>
const props = defineProps({
	text: String,
	info: String,
	active: Boolean,
});
</script>

<style scoped>
.v-option {
	border: #f0a767 3px solid;
	background-color: #f0a767;
	border-radius: 8px;
	padding: 4px 8px 6px 8px;
	display: flex;
	width: fit-content;
	gap: 12px;
	cursor: pointer;
}

.v-option.noInfo .v-option__title {
	padding-top: 0;
}

.v-option:not(.active) {
	background-color: #ffffff;
	color: #252b2a;

	.v-option__title {
		color: #252b2a;
	}
}

/* .v-option:hover {
    background-color: #F69540;
} */

.v-option__title {
	color: #ffffff;
	padding-top: 12px;
	font-weight: 700;
}

.v-option__info {
	padding: 4px 3px;
	background-color: #ffffff;
	line-height: 14px;
	border-radius: 4px;
	height: 18px;
	display: flex;
	align-items: center;
}
</style>
