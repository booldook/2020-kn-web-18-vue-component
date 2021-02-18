<template>
	<div class="container">
		<MainTitle :title="title" :titleSub="titleSub" />
		<SearchForm @@onChange="onChange" />
		<ProductWrapper :data="searchProduct" />
	</div>
</template>
<script>
import MainTitle from './components/MainTitle.vue'
import SearchForm from './components/SearchForm.vue'
import ProductWrapper from './components/ProductWrapper.vue'
import axios from 'axios'
import _ from 'lodash'

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
	async created() {
		try {
			const r = await axios.get('/json/products.json')
			this.product = r.data
			this.searchProduct = r.data
		}
		catch(e) {
			console.log(e)
		}
	},
	components: { MainTitle, SearchForm, ProductWrapper },
	methods: {
		onChange(value) {
			this.query = value;
			//this.searchProduct = this.product.filter(v => v.title.includes(value))
			this.searchProduct = _.filter(this.product, v => v.title.includes(value))
		}
	}
}
</script>
<style>
	
</style>