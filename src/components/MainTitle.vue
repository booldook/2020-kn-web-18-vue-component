<template>
	<div class="jumbotron">
		<h1>{{title}}</h1>
		<p>{{titleSub}}</p>
	</div>
</template>
<script>
export default {
	name: 'MainTitle',
	props: ['title', 'titleSub'],
	data() {
		return {
			 
		}
	}
}
</script>
<style scoped>
	h1 {font-size: 2em; color: #444;}
	p {font-size: 1.25em; padding: 1em; color: #777;}
</style>