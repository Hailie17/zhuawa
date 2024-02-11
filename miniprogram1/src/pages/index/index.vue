<template>
	<view class="content">
		<top-slider @change=onBannerChange></top-slider>
		<banner :src='bannerSrc'></banner>
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
	];	bannerSrc = this.BANNER_LIST[0]
	onBannerChange(index:number) {
		this.bannerSrc = this.BANNER_LIST[index]
	}
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>