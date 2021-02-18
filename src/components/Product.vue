<template>
	<div class="product">
		<div class="img-wrap">
			<img src="@/assets/product/best1.jpg" alt="그림" class="w-100">
		</div>
		<div class="title">좋은상품</div>
		<div class="price">$15.00</div>
	</div>
</template>
<script>
export default {
	name: 'Product',
}
</script>
<style scoped>
.product {width: 24%; margin: 0.5%;}
.title {border-bottom: 1px solid #ddd; padding: 0.5em 0; font-size: 1.125em;}
.price {padding: 0.5em 0; color: #555; text-align: right;}
</style>