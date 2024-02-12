<template>
	<view class="list-page">
		<view class="input-container">
			<input type="text" v-model="search" class="input" placeholder="请输入关键字搜索" />
		</view>
		<view class="virtual-list-container" v-if="currentList.length">
			<virtual-list :listData='currentList'></virtual-list>
		</view>
	</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Services from '../../services'
import { DetailInfo } from '../../services/type'

@Component
export default class List extends Vue {
	search: string = ''
	textList: DetailInfo[] = []
	
	get currentList() {
		return this.textList.filter(item => item.title.indexOf(this.search) > -1)
	}
	
	async created() {
		this.textList = await Services.getList()
	}
}
</script>

<style>
.input-container {
	position: sticky;
	top: 0;
	height: 120upx;
	background: white;
}
.input {
	outline-style: none;
	border: 2upx solid #ccc;
	border-radius: 6upx;
	
	padding: 20upx;
	width: 60%;
	margin: 20upx auto;
	font-size: 32upx;
	text-align: center;
}
.virtual-list-container {
	height: 10000upx;
}
</style>
