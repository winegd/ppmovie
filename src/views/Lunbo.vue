<template>
	<div>
	  <el-carousel height="520px" :interval="2000"  >
    <el-carousel-item v-for="(item,index) in list" :key="index" >
	  <img style="width: 1400px;height: 520px;"  @click="Todetail(index)" :src="item.src" />
    </el-carousel-item>
  </el-carousel>
  
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
					{'src':require('../assets/lunbo/lunbo1.jpg')},
					{'src':require('../assets/lunbo/lunbo2.jpg')},
					{'src':require('../assets/lunbo/lunbo3.jpg')},
					{'src':require('../assets/lunbo/lunbo4.jpg')}
					
				]
			}
		},
		methods:{
			Todetail(index){
				if(index==0){
					this.$router.push({name:'detail',params:{id:19}})
				}else if(index==1){
					this.$router.push({name:'detail',params:{id:6926}})
				}else if(index==2){
					this.$router.push({name:'detail',params:{id:17208}})
				}else if(index==3){
					this.$router.push({name:'detail',params:{id:1450}})
				}
			}
		}
	}
</script>