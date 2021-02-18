<template>
	<div class="product-wrapper">
		<Product v-for="v in data" :key="v.id" :v="v" />
	</div>
</template>
<script>
import Product from './Product.vue'

export default {
	name: 'ProductWrapper',
	props: ['data'],
	data() {
		return {

		}
	},
	components: { Product },
}
</script>
<style scoped>
.product-wrapper {margin: 1em 0; display: flex; flex-wrap: wrap;}
</style>