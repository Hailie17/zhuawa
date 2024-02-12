<template>
	<view class="Countdown">
		
	</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Countdown extends Vue {
	@Prop({type: Number}) expireTime: number; // 13位时间戳
	@Prop({type: Number, default: 1000}) timeInterval: number; //间隔
	
	days: string = ''
	hours: string = ''
	miniutes: string = ''
	seconds: string = ''
	
	countDown() {
		const leftTime = Math.max(this.expireTime - Date.now(), 0)
		// 将 leftTime 转换成 days hours mins secs
		this.timestampToCountdown(leftTime)
	}
	
	/**
	 * 13位时间戳转换为 days hours mins secs
	 */
	timestampToCountdown(time: number) {
		if(!time) {
			return
		}
		const t = Math.floor(time/1000)
		this.days = String(Math.floor(t / 60 / 60 /24))
		this.hours = String(Math.floor((t / 60 / 60) % 24))
		this.miniutes = String(Math.floor(t / 60 % 60))
		this.seconds = String(Math.floor(t % 60 )
	}
}
</script>

<style>

</style>