<template>
	<view class="home-recommend">
		<h3>推荐</h3>
		<view class="recommend-container">
			<view class="recommend-item" v-for="(item, index) in list" :key='{item}' :class="{'recommend-hover': activeIndex === index}" @click="onClick(index)">
				<img :src="item.image" alt="" />
				<view class="text">
					{{ item.text }}
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Services from '../../services'
import { HomeRecommendListItem } from '../../services/type'

@Component
export default class HomeRecommend extends Vue {
	list: HomeRecommendListItem[] = []
	activeIndex = -1
	
	onClick(index: number) {
		this.activeIndex = index
		// 跳转
		setTimeout(() => {
			uni.navigateTo({
				url: '/pages/list/index'
			})
		}, 200)
	}
	
	async created() {
		this.list = await Services.getHomeRecommendList()
	}
}
</script>

<style>
.recommend-hover {
	transform: translate3d(2upx, 2upx, 0);
}
h3 {
	font-size: 32upx;
	font-weight: 600;
}
.recommend-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.recommend-item {
	width: 212upx;
	height: 212upx;
	margin-bottom: 60upx;
	background: gray;
	border-radius: 10upx;
	box-shadow: 0 20upx 40upx -8upx rgba(106, 182, 252, 0.5);
}
img {
	border-radius: 10upx;
	height: 100%;
	width: 100%;
}
.text {
	font-size: 24upx;
	text-align: center;
}
</style>