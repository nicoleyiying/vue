<template>
	<div>
		<h1>This is login component, created by vue file. </h1>
	</div>
</template>

<script>
</script>

<style>
	export default {
		data(){
			/* 注意：组件中的 data 必须是 function*/
			return {
				msg:'123'
			};
		},
		methods:{
			show(){
				console.log('called the show method from login.vue;')
			}
		}
	};
</style>