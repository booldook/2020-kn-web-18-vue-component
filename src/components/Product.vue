<template>
	<div class="product">
		<div class="img-wrap">
			<img :src="require(`@/assets/product/${v.src}`)" alt="그림" class="w-100">
		</div>
		<div class="title">{{v.title}}</div>
		<div class="price">${{v.price}}</div>
	</div>
</template>
<script>
export default {
	name: 'Product',
	props: ['v'],
}
</script>
<style scoped>
.product {width: 24%; margin: 0.5%;}
.title {border-bottom: 1px solid #ddd; padding: 0.5em 0; font-size: 1.125em;}
.price {padding: 0.5em 0; color: #555; text-align: right;}

@media screen and (max-width: 991px) {
	.product {width: 32.3333%; margin: 0.5%;}
}

@media screen and (max-width: 767px) {
	.product {width: 48%; margin: 1%;}
}

@media screen and (max-width: 575px) {
	.product {width: 96%; margin: 2%;}
}
</style>