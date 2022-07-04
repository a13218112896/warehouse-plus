<template>
	<div id="login">
		<canvas id="canvas"></canvas>
		<Signin v-if="signinShow" @getMsg="signinMsg"></Signin>
		<Signup v-if="signupShow" @getMsg="signupMsg"></Signup>
		<Signuping v-if="signupingShow" @getMsg="signupingMsg"></Signuping>
	</div>
</template>

<script setup>
// 引入vue组件
import { reactive, ref, onMounted } from 'vue';
// 引入登录组件
import Signin from './modules/Signin.vue'
import Signup from './modules/Signup.vue'
import Signuping from './modules/Signuping.vue'
	// 登录页背景绘制
	const canvasBg = () => {
		var bodywidth = document.body.clientWidth;
		var bodyheight = document.body.clientHeight; 
		var canvas = document.getElementById('canvas');
		console.log(canvas.getContext)
		canvas.width = bodywidth;
		canvas.height = bodyheight;
		if(!canvas.getContext) return;
		var background = canvas.getContext('2d');
		background.strokeStyle = 'rgb(242,245,251)';
		for(var y = 0; y < canvas.height/30; y++){
			for(var x = 0; x < canvas.width/30;x++){
				background.strokeRect(x*30, 1+y*30, 30,30);
			}
		}
	}
	// 生命周期:挂载完数据执行
	onMounted(() => {
		canvasBg();
	})
	// 控制登录注册组件显示
	let signinShow = ref(true)
	let signupShow = ref(false)
	let signupingShow = ref(false)
	//接收登录子组件的信息
	const signinMsg = (msg) => {
		console.log(msg);
		if(msg=='goSignup'){
			signinShow.value = false
			signupShow.value = true
			signupingShow.value = false
		}
	}
	const signupMsg = (msg) => {
		console.log(msg);
		if(msg=='goSignin'){
			signinShow.value = true
			signupShow.value = false
			signupingShow.value = false
		}else if(msg=='goSignuping'){
			signinShow.value = false
			signupShow.value = false
			signupingShow.value = true
		}
	}
	const signupingMsg = (msg) => {
		console.log(msg);
		if(msg=='goSignup'){
			signinShow.value = true
			signupShow.value = false
			signupingShow.value = false
		}
	}
</script>

<style scoped lang="less">
#login{
	width: 100%;
	height: 100vh;
	#canvas{
		position: absolute;
		top: 0;
		z-index:-1;
	}
}
</style>