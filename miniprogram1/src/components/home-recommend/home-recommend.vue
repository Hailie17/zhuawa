<template>
	<view class="home-recommend">
		<h3>推荐</h3>
		<view class="recommend-container">
			<view class="recommend-item" v-for="(item, index) in list" :key='{item}' :class="{'recommend-hover': activeIndex === index}" @click="onClick(index)">
				<img :src="item.image" alt="" />
				<view class="">
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
	}
	
	async created() {
		this.list = await Services.getHomeRecommendList()
		console.log(this.list,999);
	}
}
</script>

<style>

</style>