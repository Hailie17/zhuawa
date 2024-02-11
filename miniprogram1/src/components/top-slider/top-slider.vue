<template>
  <view class="TopSlider">
  	<view class="tab-item" v-for="(tab, index) in tabs" :key="tab + index" :class="{ active: activeTab === index}" @click=changeActiveTab(index)>
  		{{ tab }}
  	</view>
  </view>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopSlider extends Vue {
	tabs: string[] = ['推荐', '框架', '地方', '方法', '搜索', '发疯']
	activeTab = 0
	
	changeActiveTab(index: number) {
		this.activeTab = index
		this.$emit('change', index)
	}
}
</script>
<style>
	/* 2upx = 1px */
	.TopSlider {
		margin: 40upx 0;
		display: flex;
		align-items: center;
		overflow: scroll;
	}
	.TopSlider::-webkit-scrollbar {
		width: 0;
	}
	.tab-item {
		flex: 0 0 25%;
		color: #353535;
		text-align: center;
		font-size: 32upx;
		line-height: 52upx;
		transition: all 0.3s ease-in-out;
	}
	.tab-item.active {
		transform: scale(1.2);
		font-weight: bold;
		color: #3a3a33;
	}
</style>