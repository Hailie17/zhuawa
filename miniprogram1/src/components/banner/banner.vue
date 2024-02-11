<template>
	<img :src="src" alt="banner" class="banner-image" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Banner extends Vue {
	@Prop({ type: String, default: ''}) src: string
}
</script>

<style>
.banner-image {
	width: 100%;
	height: 100upx;
	border: 10upx
}
</style>