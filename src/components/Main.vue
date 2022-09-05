<template>
	
	<el-container>
		<el-header id="header" height="60px">
			<div>
			<el-row class="banner-box" type="flex" justify="space-between" :gutter="20">
			  <el-col :span="2"><div><img  src="../assets/icon/logo1.png" /></div></el-col>
			  
<!--  -->
			  
			  
			  <el-col :span="2">
				  <div  >
					 <router-link to='/login'>
						 
						<el-button v-if="uname ==null" type="primary" icon="el-icon-s-custom" round >登录/注册</el-button>
						<!-- <el-button type="primary">主要按钮</el-button> -->
						
					 </router-link>
					  <span v-if="uname !=null"  >欢迎您：{{uname}}</span>
					</div>
					
				</el-col>
			</el-row>	
				
			</div>
			


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
				    <span slot="title">国漫</span>
				  </el-menu-item>
				  <el-menu-item index="9">
				    <i class="el-icon-delete"></i>&nbsp;
				    <span slot="title">日漫</span>
				  </el-menu-item>
				  <el-menu-item index="6">
				    <i class="el-icon-phone"></i>
				    <span slot="title">纪录片</span>
				  </el-menu-item>
				  <el-menu-item index="8">
				    <i class="el-icon-phone"></i>
				    <span slot="title">科幻片</span>
				  </el-menu-item>

			    </el-menu>
				

		</el-aside>
		
		<el-container>
	    <el-main>
				<router-view  :key='$route.fullPath' ></router-view>
					
		</el-main>
		<!-- <el-footer id="header" height="60px"></el-footer> -->
	  </el-container>
	</el-container>
	</el-container>

</template>

<script>
	export default{
		name:"Main",
		data(){
		return {
				activeIndex: '1',
				activeIndex2: '1',
				uname:null
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
					 this.$router.push({name:'lunbo'})
				}
				else if(key==2){
					 this.$router.push({name:'movie',query:{type_id:1}})
				}else if(key==3){
					  this.$router.push({name:'movie',query:{type_id:13}})
				}
				else if(key==4){
					  this.$router.push({name:'movie',query:{type_id:30}})
				}
				else if(key==5){
					  this.$router.push({name:'movie',query:{type_id:25}})
				}
				else if(key==6){
					  this.$router.push({name:'movie',query:{type_id:20}})
				}
				else if(key==8){
					  this.$router.push({name:'movie',query:{type_id:9}})
				}
				else if(key==9){
					  this.$router.push({name:'movie',query:{type_id:26}})
				}
			}
		},
		mounted() {
			this.uname= this.$route.query.uname
			console.log(this.$route.query.uname)
		
		},
		// watch: {
		// 	$route(to,from){
		// 		if(to.name == 'play'){
		// 			this.reload()
		// 		}
		// 	}
		
		// },

		
	}
</script>

<style>
	.el-aside{
		height: 100vh;
	}
	.el-main {
		/* position: absolute; */
	    padding: 0;
	    height: calc(100vh - 60px);
/* 		padding-left: 30px;
		padding-right: 50px; */
		
	}



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
