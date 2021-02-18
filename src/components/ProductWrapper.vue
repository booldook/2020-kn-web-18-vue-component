<template>
	<div class="product-wrapper">
		<Product />
	</div>
</template>
<script>
import Product from './Product.vue'

export default {
	name: 'ProductWrapper',
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