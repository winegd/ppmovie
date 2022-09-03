<template>
	<div>
	  <el-carousel height="520px" :interval="4000" trigger="click" >
    <el-carousel-item v-for="(item,index) in list" :key="index" >
	  <img @click="Todetail(item.name)" :src="item.src" />
    </el-carousel-item>
  </el-carousel>
 <!-- <h2 style="text-align: left;" >正在热映</h2>	 -->
<!-- 		<el-row :gutter="20">
		  <el-col :span="4.8"><div class="grid-content bg-purple"></div>
			<img class="div2" src="../assets/0.jpeg" />
		  </el-col>
		  <el-col :span="4.8"><div class="grid-content bg-purple"></div>
		  <img class="div2" src="../assets/0.jpeg" />
		  </el-col>
		  <el-col :span="4.8"><div class="grid-content bg-purple"></div>
		  <img class="div2" src="../assets/0.jpeg" />
		  </el-col>
		  <el-col :span="4.8"><div class="grid-content bg-purple"></div>
		  <img class="div2" src="../assets/0.jpeg" />
		  </el-col>
		  <el-col :span="4.8"><div class="grid-content bg-purple"></div>
		  <img class="div2" src="../assets/0.jpeg" />
		  </el-col>
		</el-row> -->
		<mv></mv>
	
	</div>

</template>

<style>
		
	.mv_img{
		width: 135px;
		height: 80px;
	}
  .el-carousel__item h3 {
    color: #ff0000;
    font-size: 25px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
	import lunbo_movie from '@/views/lunbo_movie.vue'
	export default{
		name:'Lunbo',
		components:{
			mv:lunbo_movie
		},
		data(){
			return{
				list:[
					{'src':require('../assets/lunbo/lunbo1.jpg'),
					'detail':'该剧以时尚杂志社为背景，，她认为',
					'name':'lunbo1'},
					{'src':require('../assets/lunbo/lunbo2.jpg'),
					'detail':'该剧以时尚杂志社为背景，，她认为',
					'name':'lunbo2'},
					{'src':require('../assets/lunbo/lunbo3.jpg'),
					'detail':'该剧以时尚杂志社为背景，，她认为',
					'name':'lunbo3'},
					{'src':require('../assets/lunbo/lunbo4.jpg'),
					'detail':'该剧以时尚杂志社为背景，，她认为',
					'name':'lunbo4'},
					
				]
			}
		},
		methods:{
			Todetail(res){
				alert(res)
			}
		}
	}
</script>