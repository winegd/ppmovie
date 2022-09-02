<template>
	<div id="poster">
		<div>		
		<el-form 
		label-width="0px" 
		label-position="left"
		class="register-container">
		  <h3 class="register_title">
			用户注册
		  </h3>
		  <el-form-item label="" prop="loginName">
		    <el-input 
			type="text"
			autocomplete="off"
			v-model="account"
			placeholder="请输入用户账号"
			prefix-icon="el-icon-user-solid"
			></el-input>
		  </el-form-item>
		  <el-form-item label="" prop="name">
		    <el-input 
			type="text"
			autocomplete="off"
			v-model="usename"
			placeholder="请输入昵称"
			prefix-icon="el-icon-user-solid"
			></el-input>
		  </el-form-item>
		  <el-form-item label="" prop="password">
		    <el-input 
			type="password" 
			v-model="password" 
			autocomplete="off"
			placeholder="请输入密码"
			prefix-icon="el-icon-lock"
			></el-input>
		  </el-form-item>
		  <el-form-item label="" prop="checkPass">
		    <el-input 
			type="password" 
			v-model="checkPass" 
			autocomplete="off"
			placeholder="请确认密码"
			prefix-icon="el-icon-lock"></el-input>
		  </el-form-item>
		  <el-form-item>
			  <el-button style="width: 100%;border:none;" @click="resetForm()">重置</el-button>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary"
			 style="width: 100%;background-image:linear-gradient(to right,#55ffff, #0055ff);border:none;"
			 @click="register()">注册</el-button>
			 </el-form-item>
	


			 <el-form-item>
			 <el-button
			 			type="primary"
			 			style="width: 100%;background-image:linear-gradient(to right,#55ffff, #0055ff);border:none;"
			@click="toLogin()">登录</el-button>
			 </el-form-item>
		</el-form>
		
		</div>
		
			
		

	</div>
</template>

<script>
	  export default {
	    data() {
	      
	      return {
	          account:'',
			  usename:'',
			  password: '',
	          checkPass: '',

	      };
	    },
	    methods: {
	      register(){
			  if(this.account==''||this.usename==''||this.password==""||this.checkPass==''){
				 this.$message({
				           message: '注册信息不能为空',
				           type: 'error'
				         }); 
			  }else{
				  if(this.password!=this.checkPass){
					  this.$message({
					            message: '两次密码不一致',
					            type: 'error',
					          }); 
				  }
				  else{
					  this.$message({
				  		   message: '恭喜你，注册成功',
				  		   type: 'success',
						   duration:'1000'
				  		 }); 
						 this.toLogin()
				  }
				  console.log()
				   
			  }
	      },
		  resetForm(){
			  this.account='' 
			  this.usename=''
			  this.password=""
			  this.checkPass=''
			  this.$message({
					   message: '重置成功',
					   type: 'success',
					   duration:'1000'
					 }); 
		  },
		  toLogin(){
			  this.$router.push({path:'/login'})
		  },

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
		margin: 0px;
		padding: 0px;
	}
	
	.register-container{
		border-radius: 15px;
		background-clip: padding-box;
		margin: 90px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #61dafb;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
	}
	.register_title{
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
</style>