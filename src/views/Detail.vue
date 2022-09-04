<template>
	<div v-if="filmInfo != null"
		style="width: 100%; background-color:#F5F5F5;height: 100%;display: flex;flex-direction: column;align-items:flex-start">
		<div class="box1">
			<img style="height: 400px;width:300px ; padding-top: 50px;border-radius: 15px;" :src="filmInfo.poster">
			<div id="container" >
				<h2 style="text-align: left;height: 28px;">{{filmInfo.name}}</h2>
				<div style="display: flex; flex-direction: row;">
					<div v-if="filmInfo.year !=null" id="flex"><span>{{filmInfo.year}}</span></div>
					<div id="flex"> <span>{{filmInfo.nation}}</span></div>
					<div v-if="filmInfo.category != ''" id="flex"> <span>{{filmInfo.category}}</span></div>
				</div> 
				<div id="div1" >
					<div class="line_3"  >
					<span style="" >{{filmInfo.synopsis}}...</span>
					</div>
				
					
				<hr class="hr1">
				<p v-if="filmInfo.pubdate !=null" style="font-weight: bolder ;">上映年份: {{filmInfo.pubdate}}</p>

				<p style="font-weight: bolder ;">导演: {{filmInfo.director}}</p>
				
				<div   style="height: 25px; overflow:hidden;text-overflow: ellipsis;white-space: normal; white-space : nowrap; display: flex;flex-direction: row;">
					<b>主演:</b>
					<b>&nbsp{{filmInfo.actors}}</b>
					<!-- <div class="line_3" style="height: 40px; display: flex;flex-direction: row;"> -->
						<!-- <div  style="font-weight: bolder;" v-for="item in filmInfo.actors">
							<p style="margin-right: 3px;">{{item}}</p>
						</div> -->
		<!-- 				<p style="margin-right: 3px;">{{filmInfo.actors}}</p>
					</div> -->
					
				</div>
				<p style="font-weight: bolder ;">更新时间: 2022-09-01</p>
				<!-- <p style="font-weight: bolder ;">更新时间: {{filmInfo.premiereAt|dateFilter}} </p> -->
				<div class="img">
					<el-row>
					<router-link   :to="{name:'play',query: {index:0,vod_id: filmInfo.vod_id}}" >
					<el-button id="button1" @click="show()" style="background:linear-gradient(to right, rgb(255, 113, 31) 0%, rgb(229, 9, 20) 100%) ;" type="primary" round>

					
						<i class="el-icon-caret-right" style="color: white;">播放</i>
					
				</el-button>
				</router-link>
				</el-row>
				</div>
				
			</div>
			</div>			
		</div>
			<h2 style="margin: 8px;" >选集播放</h2>
			<div id="select" >
				<div  v-for="(item,index) in datalist">
					<router-link  :to="{name:'play',query: {index:index,vod_id: filmInfo.vod_id}}" >
						<el-button  style=" width: 100px;margin: 5px;">第{{index+1}}集</el-button>
					</router-link>
			
						

				</div>
			</div> 

	</div>
	
	
	</div>
</template>
<script>
	import global from '@/global'
	import axios from "axios"
	import moment from 'moment'
	import Vue from 'vue'
	moment.locale('zh-cn')// 设置成中文
	Vue.filter('dateFilter', (date) => {
	  return moment(date * 1000).format('YYYY-MM-DD')
	})
	export default {
		name: "Detail",
		data() {
			return {
				filmInfo: null,
				moviename:"",
				detail:"",
				year:"2022",
				country:"",
				director:"",
				actor:"",
				update:"",
				type:"",
				//datalist:['https://s7.fsvod1.com/share/9KfxI1LpjNXphtC2'],
				datalist:[],
				//data:{}
			}
		},
		methods: {
			show() {


			}
		},
		beforeCreate(){
			console.log(this.$route.params.id)
		},
		mounted() {
			let vod_id = this.$route.params.id
			axios({
				//url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=5501344`,
				//url:'http://localhost:3000/get_detail',
				url:global.base_url+'get_detail',
				params:{
					vod_id:vod_id,
				}
			}).then((res) => {
				console.log(res.data)
				this.filmInfo = res.data
				this.datalist=res.data.urls
			})

		}

	}
</script>


<style>
	  .line_3 {
		 height: 55px; 
		 overflow:hidden;
		 text-overflow: ellipsis;
		 white-space: normal;

	  }

	.box1 {
		background-color: #F5F5F5;
		height: 500px;
		display: flex;
		flex-direction: row;
		border: 10px white solid;
		border-radius: 5%;
	}

	   #button1 {  display: flex;  align-items: center;  justify-content: center;  height: 10 vh;  background: #1c2541;}
		button {  border: white;  background: transparent;  text-transform: uppercase;  color: white;  padding: 15px 50px;  outline: none;  overflow: hidden;  position: relative;}
		span {  z-index: 20;  }
		button:hover:after {  left: 120%;  transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);   -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);}
		button:after {  content: '';    display: block;    position: absolute;    top:  -36px;    left: -100px;    background: white;    width: 50px;    height: 125px;    opacity: 20%;    transform: rotate(-45deg);}

	#container {
		display: flex;
		width: 100%;
		flex-direction: column;
		border: 1px solid white;
		padding: 20px;
		margin-top: 30px;
		border-radius: 6%;
		background-color: white;
		width: calc(100% - 300px);
		height: 400px;
		
	}
	  #flex{
		  border: 1px solid white;
		  padding:5px;
		  margin: 8px;
		  border-radius: 20%;
		  background-color:whitesmoke
	  }
	  #select{
		  display: flex; 
		  flex-direction: row;
		  /* s
		  color: #FFFFFF;
		  flex-wrap: wrap;
		  align-items:100px;
	  }
	  #select:after{
		  content: "";
		  flex: auto;
	  }
	  #select:after{
	      content: '';
	      width: 30%;
	      border:1px solid transparent;
	    }

	  #div1{
	  	width: 900px;
	  	height: 300px;
	  	background-color: white;
		    /* margin-top: 20px; */
		    /* background: white; */
		    /* display: inline-block; */
		    text-align: left;

	  }
	 .hr1{
		     border: 0;
		     	padding-top: 1px;
		     	background: repeating-linear-gradient(
		     		to right,
				
		     		#a2a9b6 0px,
		     		#a2a9b6 4px,
		     		transparent 0px,
		     		transparent 10px
		     	)
				
		 }
		 #button1{
			 border: white;
		 }
		 

	#flex {
		border: 1px solid white;
		padding: 5px;
		margin: 8px;
		border-radius: 20%;
		background-color: whitesmoke
	}

	#select {
		display: flex;
		flex-direction: row;
		/* s */
		color: #FFFFFF;
		flex-wrap: wrap;
		align-items: 100px;
	}

	#select::after {
		content: "";
		flex: auto;
	}

	#select:after {
		content: '';
		width: 30%;
		border: 1px solid transparent;
	}

	#div1 {
		width: 900px;
		height: 300px;
		background-color: white;
		/* margin-top: 20px; */
		/* background: white; */
		/* display: inline-block; */
		text-align: left;

	}

	.hr1 {
		border: 0;
		padding-top: 1px;
		background: repeating-linear-gradient(to right,

				#a2a9b6 0px,
				#a2a9b6 4px,
				transparent 0px,
				transparent 10px)
	}

	#button1 {
		border: white;
	}
</style>
