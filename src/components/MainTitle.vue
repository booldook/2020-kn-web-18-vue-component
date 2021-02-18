<template>
	<div class="jumbotron">
		<h1>{{title}}</h1>
		<p>{{titleSub}}</p>
	</div>
</template>
<script>
export default {
	name: 'MainTitle',
	data() {
		return {
			title: 'VUE | Component를 활용한 Vue 예제',
			titleSub: 'Vue를 활용한 쇼핑몰 예제' 
		}
	}
}
</script>
<style scoped>
	h1 {font-size: 2em; color: #444;}
	p {font-size: 1.25em; padding: 1em; color: #777;}
</style>