<template>
	<view >
		<view class="current-date">
			{{getCurrentDate()}}
		</view>
		<view class="countdown-container">
			<view class="countdown-circle">
				<view class="value">
					{{ days }}
				</view>
				<view class="label">
					天
				</view>
			</view>
			<view class="countdown-circle">
				<view class="value">
					{{ hours }}
				</view>
				<view class="label">
					时
				</view>
			</view>
			<view class="countdown-circle">
				<view class="value">
					{{ miniutes }}
				</view>
				<view class="label">
					分
				</view>
			</view>
			<view class="countdown-circle">
				<view class="value">
					{{ seconds }}
				</view>
				<view class="label">
					秒
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DateFormat } from '../../lib/date'
import { getTestSchema } from '../../lib/abtest'
import { measure } from '../../lib/decorator'

@Component
export default class Countdown extends Vue {
	@Prop({type: Number}) expireTime: number; // 13位时间戳
	@Prop({type: Number, default: 1000}) timeInterval: number; //间隔
	
	days: string = ''
	hours: string = ''
	miniutes: string = ''
	seconds: string = ''
	
	timer: any = null
	
	getCurrentDate() {
		const res = getTestSchema('ab_dateformate',[
			{
				key: '1',
				data: 'YYYY-MM-DD'
			},
			{
				key: '2',
				data: 'YYYY-MM-DD HH:mm:ss'
			},{
				key: '3',
				data: 'YYYY.MM.DD HH:mm:ss'
			},
			
		])
		return DateFormat.format(Date.now(), res.data)
	}
	@measure
	created(){
		this.timer = setTimeout(this.countDown, this.timeInterval)
	}
	
	countDown() {
		const leftTime = Math.max(this.expireTime - Date.now(), 0)
		// 将 leftTime 转换成 days hours mins secs
		this.timestampToCountdown(leftTime)
		this.timer = setTimeout(this.countDown, this.timeInterval)
	}
	
	/**
	 * 13位时间戳转换为 days hours mins secs
	 */
	timestampToCountdown(time: number) {
		if(!time) {
			return
		}
		const t = Math.floor(time/1000)
		this.days = this.toTwodigit(Math.floor(t / 60 / 60 /24))
		this.hours = this.toTwodigit(Math.floor((t / 60 / 60) % 24))
		this.miniutes = this.toTwodigit(Math.floor(t / 60 % 60))
		this.seconds = this.toTwodigit(Math.floor(t % 60 ))
	}
	/**
	 * 把1位数字转化为2位字符
	 */
	toTwodigit(value: number):string {
		return value < 10 ? `0${value}` : `${value}`
	}
	
	beforeDestroy(){
		if(this.timer) {
			clearTimeout(this.timer)
		}
	}
}
</script>

<style>
.current-date {
	text-align: center;
	font-weight: 600;
}
.countdown-container {
	width: 100%;
	margin: 50upx 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.countdown-circle {
	border-radius: 50%;
	border: 1px solid gray;
	color: #7b7571;
	width: 100upx;
	height: 100upx;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.label {
	font-size: 28upx;
}
.value {
	font-size: 40upx;
	font-weight: 600;
}
</style>