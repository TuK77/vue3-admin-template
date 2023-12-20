<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { setToken } from '../../utils/auth';

const router = useRouter();
const loginForm: Login = reactive({
	userName: '',
	password: '',
});
const loading = ref<boolean>(false);

const handleLogin = () => {
  loading.value = true;
  setToken('xxoo');
  router.push({ path: '/' });
}
</script>
<template>
	<div class="login-container">
		<div class="form-wrapper">
			<el-form class="form" :model="loginForm" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="loginForm.userName" />
				</el-form-item>
				<el-form-item label="密码">
					<el-input type="password" v-model="loginForm.password" @keyup.enter.native="handleLogin" />
				</el-form-item>
			</el-form>
      <el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.login-container {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
  background-image: url(../../assets/images/login_bg.png);
  background-size: 100% 100%;
	.form-wrapper {
    width: 430px;
    padding: 20px;
		position: relative;
		left: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    border-radius: 4px;
    .form {
      width: 100%;
    }
	}
}
</style>
