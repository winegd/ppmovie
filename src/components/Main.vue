<template>
	
	<el-container>
		<el-header id="header" height="60px">
			<div>
			<el-row class="banner-box" type="flex" justify="space-between" :gutter="20">
			  <el-col :span="2"><div><img  src="../assets/icon/logo1.png" /></div></el-col>
			  <el-col :span="2">
				  <div>
					 <router-link to='/login'>
						<el-button type="primary" icon="el-icon-s-custom" round >登录/注册</el-button>
						<!-- <el-button type="primary">主要按钮</el-button> -->
					 </router-link>
					  
					</div>
				</el-col>
			</el-row>	
				
			</div>

			
<!-- 			<div id="logo">
				<img  src="../assets/icon/logo1.png" />
			</div>
			<el-breadcrumb separator="/">
				
			<el-breadcrumb-item :to="{ path: '/' }">登录</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/main' }">注册</el-breadcrumb-item>
			
			</el-breadcrumb> -->
			


		</el-header>
	  <el-container>
	    <el-aside  width="200px" id="aside">
			
			<el-menu 
				id="leftmenu"
			      default-active="1"
			      class="el-menu-vertical-demo"
				  @select="menuSelect">
				  <el-menu-item index="1">
				   <i class="el-icon-eleme"></i>
				  	<span slot="title">首页</span>&nbsp; 					     
				  </el-menu-item>
			      <el-menu-item index="2">
			       <i class="el-icon-menu"></i>
					  <span slot="title">电影</span>&nbsp;				     
			      </el-menu-item>
			      <el-menu-item index="3" >
			        <i class="el-icon-document"></i>
			        <span slot="title">电视剧</span>
			      </el-menu-item>
			      <el-menu-item index="4">
			        <i class="el-icon-setting"></i>&nbsp;
			        <span slot="title">综艺</span>
			      </el-menu-item>
				  <el-menu-item index="5">
				    <i class="el-icon-delete"></i>&nbsp;
				    <span slot="title">动漫</span>
				  </el-menu-item>
				  <el-menu-item index="6">
				    <i class="el-icon-phone"></i>
				    <span slot="title">纪录片</span>
				  </el-menu-item>
				  <el-menu-item index="7">
<!-- 				    <i ></i>
				    <span slot="title">详情</span> -->
				  </el-menu-item>
			    </el-menu>
				

		</el-aside>
		
		
	    <el-main>
			<router-view></router-view>
			
		
		</el-main>
	  </el-container>
	</el-container>

</template>

<script>
	export default{
		name:"Main",
		data(){
		return {
				activeIndex: '1',
				activeIndex2: '1'
			  };
		},
		methods:{
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			  },
			handleOpen(key, keyPath) {
				  console.log(key, keyPath);
				},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			menuSelect(key,keyPath){
				if(key==1){
					 this.$router.push({path:'/lunbo'})
				}
				else if(key==2){
					 this.$router.push({path:'/movie'})
				}else if(key==3){
					 this.$router.push({path:'/serial'})
				}
				else if(key==4){
					 this.$router.push({path:'/relax'})
				}
				else if(key==5){
					 this.$router.push({path:'/cartoon'})
				}
			}
		}
		
	}
</script>

<style>
	.login-button{
		background-color: aquamarine;
		border: 1px lightskyblue solid;
	}
	.banner-box{
		display: flex;
		align-items: center;
	}
	#logo{
		float: left;
		
	}
	#web_title{
		font-size: 26px;
		font-family: "agency fb";
	}
	#icon_head{
		width: 15px;
		height: 15px;
	}
	#leftmenu{
		height: 100%;
	}
	#header{
		background-color: white;
	}
	#icon{
		padding-left: 0px;
	}
	#aside{
		background-color: black;
		height: auto;
	}
	.el-icon-menu {
	  	background: url('../assets/icon/movie.png') center  center no-repeat;
		background-size: 20px;
	  }
	.el-icon-menu:before  {
	    /* content: "11"; */
	    visibility: hidden;
	}
	.el-icon-document{
		background: url('../assets/icon/ds.png') center  center no-repeat;
		background-size: 20px;
	}
	.el-icon-document::before{
		/* content: "11"; */
		visibility: hidden;
	}
	.el-icon-setting{
		background: url('../assets/icon/zy.png') center  center no-repeat;
		background-size: 26px;
	}
	.el-icon-setting::before{
		/* content: "11"; */
		visibility: hidden;
	}
	.el-icon-delete{
		background: url('../assets/icon/dm.png') center  center no-repeat;
		background-size: 28px;
	}
	.el-icon-delete:before{
		/* content: "11"; */
		visibility: hidden;
	}
	.el-icon-phone{
		background: url('../assets/icon/jl.png') center  center no-repeat;
		background-size: 17px;
	}
	.el-icon-phone:before{
		/* content: "11"; */
		visibility: hidden;
	}
	.el-icon-eleme{
		background: url('../assets/icon/sy.png') center  center no-repeat;
		background-size: 20px;
	}
	.el-icon-eleme::before{
		/* content: "11"; */
		visibility: hidden;
	}
</style>
