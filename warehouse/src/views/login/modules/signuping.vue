<template>
<div id="signin">
	<el-form
	:label-position="'top'"
	label-width="100px"
	:model="sysUser"
	style="max-width: 450px"
	class="login-containter">
		<span class="login-text">注册尚未完成，请耐心等待</span>
		<span class="to-signuping" @click="toSignup">返回</span>
	</el-form>
</div>
</template>
<script setup>
import router from '../../../router/index.js';
import { reactive, ref} from 'vue';
import { User, Key} from '@element-plus/icons-vue';
import { ElMessage, ElLoading } from 'element-plus'
	//   // 子向父传值
	const emit= defineEmits(["getMsg"])
	// 传值
	const toSignup = () => {
		emit('getMsg','goSignup')
	}
</script>

<style scoped lang="less">
.login-containter {
	background-clip: padding-box;
	width:350px;
	padding: 25px 25px 25px 25px;
	background-color: rgb(252, 253, 253);
	border: 1px solid #409eff;
	border-radius: 8px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-60%);
	.login-text{
		text-align: center;
		display: inline-block;
		width: 100%;
		font-size: 22px;
		/* color: rgb(125, 171, 246); */
		color: #409eff;
		margin: 5px 0;
	}
	.input-text{
		height: 40px;
	}
	.login-btn{
		width:100%;
		background-color: #409eff;
		height:40px;
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 17px;
		border-radius: 5px;
	}
	.to-signuping{
		display: block;
		cursor: pointer;
		color : #409eff;
		font-size: 14px;
		margin-top: 5px;
		text-align: center;
	}
}
</style>