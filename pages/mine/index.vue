<template>
	<view class="mine">
		<view class="message">
			感谢使用！该小程序只是个人兴趣爱好之作，并无任何商业目的，玄学内容大多收集网络与我自己看了相关书籍总结，如有任何版权问题，请联系处理，喜欢本小程序可以右上角分享小程序。
		</view>
		<view class="contact">
			QQ&微信号:604641763
		</view>
	</view>
</template>

<script>
	export default {
		name:'Mine'
	}
</script>

<style lang="scss" scoped>
	.mine {
		height: 100vh;
		background: #000;
		color: #fff;
		line-height: 60upx;
		padding: 0 20upx;
		.message {
			padding-top: 20upx;
			text-indent: 2em;
		}
		.contact{
			margin-top: 60upx;
		}
	}
</style>
