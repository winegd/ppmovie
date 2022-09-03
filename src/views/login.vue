<template>
	<body id="poster">
		<el-form class="login-container" label-position="left" label-width="0px">
			<h3 class="login_title">
				用户登录
			</h3>
			<!-- <form name="myForm" action="demo-form.php" onsubmit="return validateForm()" method="post"> -->
		  <el-form-item name="myForm" action="LoginServlet" onsubmit="return validateForm()" method="post" label="">
		    <el-input type="text"  v-model="username" auto-complete="off" placeholder="请输入用户账号"prefix-icon="el-icon-s-custom"></el-input>
		  </el-form-item>
		  <el-form-item label="">
		    <el-input type="password" v-model="password" auto-complete="off" placeholder="请输入密码"></el-input>
		  </el-form-item>
		  <el-form-item>
			  <el-button type="primary" round style="width:100%;background-image:linear-gradient(to right,#55ffff, #0055ff);border:none;" @click="toRegister()">立即注册</el-button>
		  </el-form-item>
		  <el-form-item>
		   <el-button  type="primary" round style="width: 100%;background-image:linear-gradient(to right,#55ffff, #0055ff);border:none;" @click="login()">登录</el-button>
		  </el-form-item>
		</el-form>
		

	</body>
	
<!-- 	<div>
	<slide-verify :l="42"
	            :r="10"
	            :w="310"
	            :h="155"
	            slider-text="向右滑动"
				:imgs="imgs"
	            @success="onSuccess"
	            @fail="onFail"
	            @refresh="onRefresh"
	            ></slide-verify>
	<div>{{msg}}</div>
	</div> -->
</template>

<script>
	export default{
		name:'login',
		data() {
		      return {
				  username:'',
				  password:''
		        }
		      
		    },
		    methods: {
			login() {
				if(this.username=='' || this.password==''){
					this.$message({
					          message: '用户名或密码为空',
					          type: 'error',
							  duration:'3000'
					        }); 
				}else{
					if(this.username=='123'&&this.password=='123'){
					this.$message({
					          message: '登录成功',
					          type: 'success',
							  duration:'1000'
					        });
					this.$router.push({path:'/Main'})		
				}else{
					this.$message({
					          message: '用户名或密码错误',
					          type: 'error',
							  duration:'1000'
					        });
				}
				}
				
				
		
				
		      },
			  toRegister(){
				  this.$router.push({path:'/register'})
			  },


			},

			

		    
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
