<template>
	<div class="container">
		<MainTitle />
		<SearchForm />
	</div>
</template>
<script>
import MainTitle from './components/MainTitle.vue'
import SearchForm from './components/SearchForm.vue'
export default {
	name: 'App',
	data() {
		return {

		}
	},
	components: {
		MainTitle,
		SearchForm
	}
}
</script>
<style>
	
</style>