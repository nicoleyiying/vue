<template>
	<div>
		<h1>This is App component. </h1>
		<!-- 为什么这里叫做 mt-button 的 button 直接就能用 -->
		<mt-button type="danger" disabled icon="back">default</mt-button>
		<mt-button type="default" size="small" plain icon="more" @click="show">default</mt-button>
		<mt-button type="danger" size="large">default</mt-button>
		<br />
		<mt-button type="primary">123</mt-button>
		<br />
		<button type="button" class="mui-btn mui-btn-royal">
					紫色
		</button>
		<br />
		<router-link to="/account">Account</router-link>
		<router-link to="/goodlist">GoodList</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				toastInstance: null
			};
		},
		created() {
			this.getList();
		},
		methods: {
			// 模拟获取列表的 一个 AJax 方法,在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
			getList() {
				this.show();
				setTimeout(() => {
					// 当 3 秒过后，数据获取回来了，要把 Toast移除
					this.toastInstance.close();
				}, 3000);
			},
			show() {
				this.toastInstance = Toast({
					message: 'This is a message.',
					// 如果是 -1 则弹出之后不消失
					duration: -1,
					position: 'top',
					// 设置 图标的类
					iconClass: 'glyphicon glyphicon-heart',
					// 自定义Toast的样式，需要自己提供一个类名
					className: 'mytoast'
				});
			}
		}
	}
</script>

<style>

</style>