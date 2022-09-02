<template>
	<div  style="width: 100%; background-color:#F5F5F5;height: 100%;display: flex;flex-direction: column;align-items:flex-start">
		<div  class="box1">
			<img style="height: 400px;padding-top: 50px;border-radius: 15px;" src="../assets/0.png">
			<div id="container" >
				<h2 style="text-align: left;height: 28px;">{{moviename}}</h2>
				<div style="display: flex; flex-direction: row;">
					  <div id="flex"><span>{{year}}</span></div>
					  <div id="flex"> <span>{{country}}</span></div>
					  <div id="flex"> <span>{{type}}</span></div>
				</div> 
				<div id="div1" >
				<p>{{detail}}</p>
				<hr class="hr1">
				<p style="font-weight: bolder ;">上映年份:</p>
				<p>{{year}}</p>
				<p style="font-weight: bolder ;">导演:</p>
				<p>{{director}}</p>
				<p style="font-weight: bolder ;">主演:</p>
				<p>{{actor}}</p>
				<p style="font-weight: bolder ;">更新时间:</p>
				<p>{{update}}</p>
				<div class="img">
					<el-row>
				<el-button id="button1" @click="show()" style="background:linear-gradient(to right, rgb(255, 113, 31) 0%, rgb(229, 9, 20) 100%) ;" type="primary" round>
					<i class="el-icon-caret-right" style="color: white;" >播放</i>
				</el-button>
				</el-row>
				</div>
				
			</div>
			</div>			
		</div>
		
		
			<h2 style="margin: 8px;" >选集播放</h2>
	        <div id="select" >
	        	<div  v-for="(item,index) in datalist">
					<a :href="item" target="_blank" >
						<el-button  style=" width: 100px;margin: 5px;">第{{index+1}}集</el-button>
					</a>
				</div>
		    </div> 

	
		</div>

	</div>
</template>
<script>
	import $ from "jquery"
	import axios from "axios"
	export default{
		name:"xiangqing",
		data(){
			return{
				moviename:"长津湖",
				detail:"电影以抗美援朝战争第二次战电影以抗美援朝战争第二次战役中的长津湖战役为背景，讲述了在结束了新兴里和下碣隅里的战斗之后，七连战士们电影以抗美援朝战争第二次战役中的长津湖战役为背景，讲述了在结束了新兴里和下碣隅里的战斗之后，七连战士们役中的长津湖战役为背景，讲述了在结束了新兴里和下碣隅里的战斗之后，七连战士们又接到了更艰巨的任务……",
				year:"",
				country:"",
				director:"",
				actor:"",
				update:"",
				// language:"",
				type:"",
				//datalist:['https://s7.fsvod1.com/share/9KfxI1LpjNXphtC2'],
				datalist:[1,1,4,5,7,1,1,4,5,7,1,1,4,5,7,1,1,4,5,7,1,1,4,5,7,1,1,4,5,],
				data:{}
			}
		},
		methods:{
				show(){
					
				}
		},
		mounted(){
			// this.$axios.get('/.php/provide/vod/?ac=detail&ids=145',{
			// 	headers:{
			// 			'Accept': 'application/json, text/javascript, */*; q=0.01',
			// 			'Accept-Encoding': 'gzip, deflate',
			// 			'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
			// 			'Connection': 'keep-alive',
			// 			'Cookie': '__51uvsct__JdYOsqRHv5dridaI=1; __51vcke__JdYOsqRHv5dridaI=82df3718-b7e4-58ba-8b80-cf067142837c; __51vuft__JdYOsqRHv5dridaI=1662043819368; __vtins__JdYOsqRHv5dridaI=%7B%22sid%22%3A%20%2289917598-1b56-50cd-8a78-ed1d8702353c%22%2C%20%22vd%22%3A%202%2C%20%22stt%22%3A%2018661%2C%20%22dr%22%3A%2018661%2C%20%22expires%22%3A%201662045638022%2C%20%22ct%22%3A%201662043838022%7D',
			// 			'Host': 'fszy1.com',
			// 			'Referer': 'http://fszy1.com/vod/detail/id/191/',
			// 			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70',
			// 			'X-Requested-With': 'XMLHttpRequest'
			// 		}
			// }).then(res=>{
			// 		//this.data = res.data.data
			// 		console.log(res.data)
			// })
			
			// this.$http.get('https://www.feisuzyapi.com/api.php/provide/vod/?ac=detail&ids=145', ).then(
			// res=>{
			// 		//this.data = res.data.data
			// 		console.log(res.data)
			//  },
			//  res=>{
			// 	 console.log('访问失败')
			//  }
			// );
			// $.ajax({
			// 	url: 'https://api.tiankongapi.com/api.php/provide/vod/?ac=detail&ids=1232',
			// 	type: 'get',
			// 	//dataType:'jsonp',
			// 	headers:{
			// 			'Accept': 'application/json,application/javascript, text/javascript, */*; q=0.01',
			// 			'Accept-Encoding': 'gzip, deflate',
			// 			'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
			// 			'Connection': 'keep-alive',
			// 			'Cookie': '__51uvsct__JdYOsqRHv5dridaI=1; __51vcke__JdYOsqRHv5dridaI=82df3718-b7e4-58ba-8b80-cf067142837c; __51vuft__JdYOsqRHv5dridaI=1662043819368; __vtins__JdYOsqRHv5dridaI=%7B%22sid%22%3A%20%2289917598-1b56-50cd-8a78-ed1d8702353c%22%2C%20%22vd%22%3A%202%2C%20%22stt%22%3A%2018661%2C%20%22dr%22%3A%2018661%2C%20%22expires%22%3A%201662045638022%2C%20%22ct%22%3A%201662043838022%7D',
			// 			'Host': 'fszy1.com',
			// 			'Referer': 'http://fszy1.com/vod/detail/id/191/',
			// 			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70',
			// 			'X-Requested-With': 'XMLHttpRequest',
			// 	},
			// 	success(res) {
			// 		console.log(res);
			// 	},
			// 	false(res){
			// 		console.log('失败');
			// 	}
			// });

		}
		 
	}
</script>

<style>
	.box1{
		background-color:#F5F5F5;
		height: 500px;
		display: flex;
		flex-direction: row;
		border:10px white solid;
		border-radius: 5%;
	}
	   #button1 {  display: flex;  align-items: center;  justify-content: center;  height: 10 vh;  background: #1c2541;}
		button {  border: white;  background: transparent;  text-transform: uppercase;  color: white;  padding: 15px 50px;  outline: none;  overflow: hidden;  position: relative;}
		span {  z-index: 20;  }
		button:after {  content: '';    display: block;    position: absolute;    top:  -36px;    left: -100px;    background: white;    width: 50px;    height: 125px;    opacity: 20%;    transform: rotate(-45deg);}
		button:hover:after {  left: 120%;  transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);   -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);}
	   #container{
		display: flex;
		width: 100%;
		flex-direction: column;
		border: 1px solid white;
		padding:20px;
		margin-top: 30px;
		border-radius: 6%;
		background-color:white;
		width: auto;
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
		  /* s */
		  color: #FFFFFF;
		  flex-wrap: wrap;
		  align-items:100px;
	  }
	  #select::after{
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

</style>
