<template>
	<form>
		<SearchInput @@onChange="onChange"/>
	</form>
</template>
<script>
import SearchInput from './SearchInput.vue'
export default {
	name: 'SearchForm',
	data() {
		return {

		}
	},
	components: {
		SearchInput
	},
	methods: {
		onChange(v) {
			this.$emit('@onChange', v)
		}
	}
}
</script>
<style scoped>
	
</style>