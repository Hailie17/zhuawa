<template>
	<view class="detail-root">
		<view class="detail">
			<img :src="image" alt="" class="detail-banner" />
			<view class="content-container">
				<h1>{{titile}}</h1>
				<view class="content">
					{{content}}
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DetailInfo } from '../../services/type'

@Component
export default class Deatil extends Vue {
	image: string = ''
	title: string = ''
	content: string = ''
	
	onLoad(options: any) {
		const storeData = this.$store.state.detailInfos as DetailInfo[]
		const currentData = storeData.filter(item => String(item.id) === String(options.id))
		const { title, content, image } = currentData
		this.title = title
		this.content = content
		this.image = image
	}
}
</script>


<style>

</style>
