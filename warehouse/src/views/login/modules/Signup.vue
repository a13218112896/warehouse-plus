<template>
<div id="signup">
	<el-form
	:label-position="'top'"
	label-width="100px"
	:model="sysUser"
	style="max-width: 450px"
	class="login-containter">
		<span class="login-text">注册</span>
		<el-form-item label="Username">
		<el-input type="password" v-model="sysUser.username" class="input-text" :prefix-icon="User" placeholder="请输入用户名" />
		</el-form-item>
		<el-form-item label="Password">
		<el-input type="password" v-model="sysUser.password" class="input-text" :prefix-icon="Key" placeholder="请输入密码" />
		</el-form-item>
		<el-button type="primary" class="login-btn" @click="submitLogin">注册</el-button>
		<span class="to-signin" @click="toSignin">返回</span>
	</el-form>
</div>
</template>
<script setup>
import router from '../../../router/index.js';
import { reactive, ref} from 'vue';
import { User, Key} from '@element-plus/icons-vue';
import { ElMessage, ElLoading } from 'element-plus'
	// 登录表单
	const sysUser = reactive({
		// buddha-头像地址  mobile-手机号
		id: '',
		username: '',
		password: '',
		buddha:'',
		email: '',
		mobile: '',
	})
	// 子向父传值
	const emit= defineEmits(["getMsg"])
	//登录成功跳转
	const submitLogin = () => {
		emit('getMsg','goSignuping')
	};
	// 传值
	const toSignin = () => {
		emit('getMsg','goSignin')
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
	.to-signin{
		display: block;
		cursor: pointer;
		color : #409eff;
		font-size: 14px;
		margin-top: 5px;
		text-align: center;
	}
}
</style>