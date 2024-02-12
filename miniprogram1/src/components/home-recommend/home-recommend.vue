<template>
	<view class="home-recommend">
		<h3>推荐</h3>
		<view class="recommend-container">
			<view class="recommend-item" v-for="(item, index) in list" :key='{item.text}' :class="recommend-hover: activeIndex === index" @click="onClick(index)">
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
import { HomeRecommendListItem } from '../../services/type'

@Component
export default class HomeRecommend extends Vue {
	list: HomeRecommendListItem[] = []
	activeIndex = -1
	
	onClick(index: number) {
		this.activeIndex = index
	}
	
	async created() {
		const res = await 
	}
}
</script>

<style>

</style>