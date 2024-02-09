const PageTemplate = (pageName) => `<template>
	<view class="${pageName}">
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	});
</script>

<style>
</style>
`

const ComponentTemplate = (componentName) => `<template>
	<view class="${pageName}">
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				
			}
		},
		onAttach() {

		},
		methods: {

		}
	});
</script>

<style>
</style>`