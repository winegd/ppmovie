<template>
	<body id="poster">
		<el-form class="login-container" label-position="left" label-width="0px">
			<h3 class="login_title">
				用户登录
			</h3>
		  <el-form-item label="">
		    <el-input 
			type="text" 
			v-model="loginForm.loginName" 
			auto-complete="off" 
			placeholder="请输入用户账号"
			prefix-icon="el-icon-s-custom"
			></el-input>
		  </el-form-item>
		  <el-form-item label="">
		    <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
		  </el-form-item>
		  <el-form-item>
			  <el-button style="width:100%;" @click="toRegister()">立即注册</el-button>
		  </el-form-item>
		  <el-form-item>
		   <el-button  type="primary" style="width: 100%;background-image:linear-gradient(to right,#59C2FD, #2B99FF);border:none;" @click="login()">登录</el-button>
		  </el-form-item>
		</el-form>
	</body>
</template>

<script>
	export default{
		name:'login',
		data() {
		      return {
				  loginForm:{
		          loginName:'',
		          password: '',
		        }
		      }
		    },
		    methods: {
				submitForm(loginForm){
					if(loginForm.loginName==''){
							this.$message({
								message: '请输入用户账号',
								type: 'error'
								}); 
				}
/* 				this.$message({
				          message: '恭喜你，登录成功',
				          type: 'success'
				        }); */
					
				},
		      login() {
		        console.log('submit!',this.loginForm);
								this.$message({
								          message: '恭喜你，登录成功',
								          type: 'success'
								        });
					this.$router.push({path:'/Main'})
		      },
			  toRegister(){
				  this.$router.push({path:'/register'})
			  }
		    }
	}
</script>

<style>
	#poster{
		background-position: center;
		height: 100%;
		width: 100%;
		background-size: cover;
		background-image: linear-gradient(to right,#00ffff, #aaffff);
		position: fixed;
	}
	body{
		margin: 0px;
		padding: 0px;
		
	}
	.login-container{
		border-radius: 15px;
		background-clip: padding-box;
		margin: 90px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #61dafb;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
	}
	.login_title{
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
</style>
