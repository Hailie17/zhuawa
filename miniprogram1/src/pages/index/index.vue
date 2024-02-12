<template>
	<view class="home">
		<top-slider @change=onBannerChange></top-slider>
		<banner :src='bannerSrc'></banner>
		<countdown :expireTime='defaultExpireTime'></countdown>
	</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
	readonly BANNER_LIST = [
		"https://img.tukuppt.com//ad_preview/00/11/13/5c9940242bf11.jpg!/fw/780",
		"https://img.tukuppt.com//ad_preview/00/03/56/5c98abb074bdd.jpg!/fw/780",
		"https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
		"https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
		"http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120",
		"https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
		"https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
		"http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120"
	];
	defaultExpireTime = new Date('2025/07/02').getTime()	bannerSrc = this.BANNER_LIST[0]
	onBannerChange(index:number) {
		this.bannerSrc = this.BANNER_LIST[index]
	}
}
</script>

<style>
	.home {
		padding: 30upx;
	}
</style>