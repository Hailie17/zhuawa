<template>
	<scroll-view scroll-y="true" class="infinite-list-container" @scroll="scrollHandler">
		<view class="infinite-list-phantom" :style="{ height: listHeight + 'px' }">
			<view class="infinite-list" :style="{ transform: getTransform }">
				<view class="infinite-list-item" v-for="item in visibleData" :key="item.id" @click="toDetail(item.id)">
					<view class="left-section">
						{{ getRandomEmoji() }}
					</view>
					<view class="right-section">
						<view class="title">
							{{ item.title }}
						</view>
						<view class="desc">
							{{ item.content }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

// 每屏加载5个列表项
// 1.首屏加载 5个
// 2.监听滚动事件，随着滚动的偏移，顺序显示其他的5个

// 1.计算当前可视区域起始数据的索引 startIndex
// 2.计算当前可视区域结束数据的索引 endIndex
// 3.计算当前可视区域内的数据
// 4.计算startIndex 对应的数据在整个列表中的偏移位置 startOffset

// 需要一个撑起滚动区域高度的元素，当作占位，不做任何内容的渲染
// 5.监听滚动事件 scroll，获取滚动的scrollTop

// 列表总高度 itemSize * 列表的长度
// 可视区域显示的列表项的数目 screenHeight / itemSize
// startIndex = Math.floor(scrollTop / itemSize)
// endIndex = startIndex + 可视区域数目

@Component
export default class VirtualList extends Vue {
	@Prop({type: Array, default: () => []}) listData: any[]
	
	readonly itemSize: number = 150
	readonly emojiList: string[] = ['😊', '👆', '😟', '😭', '🤯']
	// 可视区域高度
	screenHeight: number = 500
	// 可视区域列表项数量
	visibleCount: number = Math.ceil(this.screenHeight / this.itemSize)
	startOffset: number = 0
	// 开始索引
	startIndex: number = 0
	// 结束索引
	endIndex: number = this.startIndex + this.visibleCount
	
	get listHeight() {
		return this.listData.length * this.itemSize
	}
	get getTransform() {
		return `translate3d(0, ${this.startOffset}px, 0)`
	}
	get visibleData() {
		return this.listData.slice(this.startIndex, Math.min(this.endIndex, this.listData.length))
	}
	
	getRandomEmoji() {
		const randomIndex = Math.floor(Math.random() * 5)
		return this.emojiList[randomIndex]
	}
	toDetail(id: number) {
		console.log(id,123);
		// 跳转详情页
		uni.navigateTo({
			url: `/pages/detail/index?id${id}`
		})
	}
	
	scrollHandler(e: any) {
		const scrollTop = e.detail.scrollTop
		this.startIndex = Math.floor(scrollTop / this.itemSize)
		this.endIndex = this.startIndex + this.visibleCount
		this.startOffset = scrollTop - (scrollTop % this.itemSize)
	}
}
</script>

<style>
.infinite-list-container {
	height: 100vh;
	overflow: auto;
	position: relative;
}
.infinite-list-phantom {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: -1;
}
.infinite-list {
	position: absolute;
	top: 0;
	top: 0;
	right: 0;
	text-align: center;
}
.infinite-list-item {
	background-color: white;
	box-shadow: 0 0 24upx rgba(144, 144, 144, 0.15);
	height: 200upx;
	border-radius: 10upx;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20upx;
	margin-top: 30upx;
}
.left-section {
	width: 140upx;
	height: 140upx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50upx;
	
	font-weight: bold;
	color: white;
	background: #6ab6fc;
	border-radius: 20upx;
}
.right-section {
	margin-left: 20upx;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.title {
	font-size: 28upx;
	font-weight: 500;
	text-align: left;
}
.desc {
	margin-top: 20upx;
	font-size: 24upx;
	font-weight: 400;
	text-align: left;
	/* 展示两行，超出部分省略号 */
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	overflow: hidden;
	-webkit-box-orient: vertical;
}
</style>