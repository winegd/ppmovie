<template>
	<div id='building'>
		<div>
	<el-container append-to-body="true">
	  <el-header>
		  南瓜电影-只为“影视发烧友”而生，就要给你好看
		  <br>
	  </el-header>
	  <el-container>
	    <el-aside width="20%">
			<div class="demo-image">
			  <div class="block" v-for="fit in fits" :key="fit">
			    <span class="demonstration">{{ fit }}</span>
			    <el-image
			      style="width: 100px; height: 200px"
			      :src="url"
			      :fit="fit"></el-image>
			  </div>
			</div>
		</el-aside>
	    <el-container>
	      <el-main>
			  <el-form ref="form"  label-width="100px" >
			  	 <el-form-item label="手机号" label-width="20%">
			  	    <el-input v-model="uname"></el-input>
			  	</el-form-item>
			  
			  	 <el-form-item label="密码" label-width="20%">
			  	    <el-input type="password" v-model="password"></el-input>
			  	</el-form-item>
				 <el-form-item label="确认密码" prop="checkPass" label-width="20%">
				    <el-input type="password" v-model="checkPass"></el-input>
				  </el-form-item>
				  <span data-v-e875c490="" error-tel-block="手机号不能为空，请输入手机号！" error-tel="密码或账号错误！" error-code-block="密码不能为空，请输入密码！" class="login-error">手机号不能为空，请输入手机号！</span>
			  	<el-form-item label-width="20%">
			  		<el-button type="primary" round @click=" login()">登录</el-button>
					<el-button type="primary" round @click=" register()">注册</el-button>
			  	</el-form-item>
				<el-form-item label-width="20%">
					<el-button type="primary" @click=" login()">登录</el-button>
				</el-form-item>
			  </el-form>
		  </el-main>
	      <el-footer>如遇任何问题, 请关注微信公众号"南瓜电影服务"并留言 登录即表示您同意</el-footer>
	    </el-container>
	  </el-container>
	</el-container>
		</div>
	</div>

</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				uname:"",
				password:'',
				checkPass:'',
				fits: [''],
				url: 'https://s.image.vcinema.com.cn/doras_web/imgs/2.0.0/logo-about.jpeg',
			}
		},
		methods:{
			login(){
				this.$router.push({path:"/register"})
			}
			
		}
	}
</script>

<style>
	#building{
	  background:url("");
	  width:100%;
	  height:100%;
	  position:fixed;
	  background-size:100% 100%;
	}


</style>
