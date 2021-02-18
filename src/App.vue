<template>
	<div class="container">
		<MainTitle :title="title" :titleSub="titleSub" />
		<SearchForm @@onChange="onChange"/>
	</div>
</template>
<script>
import MainTitle from './components/MainTitle.vue'
import SearchForm from './components/SearchForm.vue'
import axios from 'axios'

export default {
	name: 'App',
	data() {
		return {
			title: 'VUE | Component를 활용한 Vue 예제',
			titleSub: 'Vue를 활용한 쇼핑몰 예제',
			query: '',
			product: [],
			searchProduct: []
		}
	},
	created() {

	},
	components: {
		MainTitle,
		SearchForm
	},
	methods: {
		onChange(v) {
			this.query = v;
			this.titleSub = v;
		}
	}
}
</script>
<style>
	
</style>