<template>
	<view class="content">
		<view class="img-box">
			<cover-image class="img" src="../../static/img/home_img.png"></cover-image>
		</view>
		<view class="title">生命数字密码</view>
		<view class="message">
			<view class="uni-list-cell">
				选择您的生日（阳历）:
			    <view class="uni-list-cell-db">
			        <picker mode="date" :value="date"  @change="bindDateChange">
			            <view class="uni-input">{{date}}</view>
			        </picker>
			    </view>
			</view>
		</view>
		<view class="text-box" v-if="isShow">
			<view class="life">
				LIFE
			</view>
			生命数字密码
			<br/>
			总有一个数字掌握着你的命运
			<br/>
			与星座、塔罗牌并列为西方三大神秘学
			<br/>
			不用察言观色，不用心里测试
			<br/>
			30秒洞悉你的个性和未来
		</view>
		<view class="info-box" v-if="!isShow">
			<view class="life">
				命数:{{lifeNumber}}
			</view>
			<view class="info">
				{{info.content}}
			</view>
			<view class="profession">
				适合发展方向： <span v-for="item in info.profession" :key="item">{{item}}</span>
			</view>
			<view class="advantage">
				{{info.advantage}}
			</view>
			<view class="adverse">
				{{info.adverse}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'Index',
		data() {
			return {
				date: 'xxxx-xx-xx',
				isShow: true,
				info:'',
				lifeNumber:null
			}
		},
		methods:{
			toDetails () {
				uni.navigateTo({
					url: '/pages/details/index?id=1&name=uniapp'
				});
			},
			bindDateChange (e) {
				if (this.date === e.detail.value) return;
				this.date = e.detail.value
				this.isShow = false;
				//计算生成命数
				this.countNumber(this.date)
			},
			countNumber (date) {
				let dateStr = date.replace(/-/g, '')
				let dateArr = dateStr.split('')
				let num = 0;
				for (let i = 0; i < dateArr.length; i++) {
					num += Number(dateArr[i])
				}
				this.lifeNumber = this.recursion ('' + num)
				this.$http.get('/static/json/' + this.lifeNumber + '.json').then( res => {
					this.info = res.data
					console.log(res)
				})
			},
			recursion (num) { //递归直到加到个位数
				if (num.length === 1) {
					return num
				}
				let arr = num.split('')
				let count = 0;
				for (let i = 0; i < arr.length; i++) {
					count += Number(arr[i])
				}
				return this.recursion('' + count)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		background: #000;
		padding-bottom: 40upx;
		height: 100vh;
		overflow: auto;
		.img-box{
			margin: 30upx auto;
			width: 546upx;
			height: 500upx;
			.img {
				width: 100%;
				height: 100%;
			}
		}
		.title {
			margin-top: 40upx;
			width: 100%;
			font-size: 76upx;
			color: #fff;
			letter-spacing:8px;
			text-align: center;
		}
		.message {
			width: 600upx;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			margin: 16upx auto;
			border-radius: 40upx;
			background: #fff;
			.uni-list-cell {
				.uni-list-cell-db{
					display: inline-block;
				}
			}
		}
		.text-box {
			text-align: center;
			color: #fff;
			line-height: 60upx;
		}
		.life {
			padding: 40upx 0;
			text-align: center;
			color: #fff;
			font-size: 60upx;
		}
		.info-box {
			font-size: 28upx;
			color: #fff;
			padding: 0 20upx;
			.info {
				text-indent: 2em;
				margin-bottom: 20upx;
			}
			.advantage, .profession {
				margin-bottom: 20upx;
				span {
					margin-right: 20upx;
				}
			}
		}
	}
</style>
