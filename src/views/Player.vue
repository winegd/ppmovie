<template>
	<div style="display: flex;flex-direction: column;" >
	<div id="player_container">
		<div id="player">
			
			<video
			    id="my-video" 
			    controls
				class="video-js vjs-big-play-centered"
				width="790px"
				height="460px"
				poster="../assets/poster2.png"
				autoplay: false
					>
			</video>
			<!-- <vi :url="url" ></vi> -->

		</div>
		

		<div id="side_container" >
			<h2 >{{moviename}}</h2>
			<h4 style="margin: 8px;" >选集播放</h4>
			<div v-if="datalist !=null" id="select" >
				<div  v-for="(item,index) in datalist">
				<!-- <router-link :to="{name:'play',params: {movie_name:moviename.name,url: item}}" > -->
						<el-button v-if="tag!=index"  @click="select(index)"  style=" width: 100px;margin: 5px;">第{{index+1}}集</el-button>
						<el-button v-if="tag==index" type="primary" @click="select(index)"  style=" width: 100px;margin: 5px;">第{{index+1}}集</el-button>
				<!-- </router-link> -->
				</div>
			</div> 
			
			
		</div>

	
	</div>
	<div>
	<mv></mv>
	</div>
	
	</div>
	<!-- <el-button type="primary" @click="getVideo()">播放</el-button> -->
	  <!-- <el-button  round @click="start()">播放</el-button> -->
	<!-- class="video-js vjs-default-skin vjs-big-play-centered" -->
	<!-- class="vjs-default-skin" -->
</template>
<style>
	#side_container{
		display: flex;
		flex-direction:column;
		width:calc(100% - 792px);
		height: 460px;
		text-align: left;
		border: 4px white solid;
		overflow-y:auto;
	}
	#player{
		width: 792px;
		
		height: 460px;
		
	}
	#player_container{
		display: flex;
		flex-direction: row;
	}
</style>
<script>
	require('video.js/dist/video-js.css')
	import axios from "axios"
	import videojs from "video.js";
	import "videojs-contrib-hls";
	import lunbo_movie from '@/views/lunbo_movie.vue'
	export default{
		beforeCreate(){
			console.log(this.$route.query.vod_id)
		},
		components:{
			mv:lunbo_movie
		},
		mounted() {
			var vod_id = this.$route.query.vod_id
			var flag = this.$route.query.index
			this.tag = this.$route.query.index
			console.log(this.tag)
			// var url = this.$route.params.url
			// this.moviename=this.$route.params.movie_name
			// console.log( typeof(this.$route.params.url) )

			axios({
				//url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=5501344`,
				url:'http://localhost:3000/get_url',
				params:{
					vod_id:vod_id,
				}
			}).then((res) => {
				console.log(res.data)
				this.moviename = res.data.move_name
				this.datalist=res.data.url
				this.url=res.data.url[flag]
				if(this.play==null){
					

					this.getVideo()
					
				}
			})


		},
		name:'Player',
		data(){
		return {
				speed:1,
				//url:'https://v6.dious.cc/20220428/AvHwnFK7/index.m3u8',
				//url:'https://m3.taopianplay1.com:43333/taopian/54fdb532-e89b-4567-bc07-aa93a0c6a79b/a891bf2e-a823-4ae0-ac07-107cdf1703d8/75490/2c7dc32b-6cc4-4bca-8ce7-80eb077ef6e3/SD/playlist.m3u8',
				//url:'https://v7.dious.cc/20220816/IShATbpk/index.m3u8',
				//url:' https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8',
				//url:'https://s5.fsvod1.com/20220428/kfhEcrR1/index.m3u8',
				url:'',
				player:null,
				datalist:null,
				moviename:"",
				tag:''
			}
		},
		props: {
		  msg: String
		},
		methods:{
			getVideo() {
				var that = this
			   this.player=videojs(
				   "my-video",
				   {
					   hls: true,
					   aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					   fluid: true, 
					   preload: 'auto',
					   bigPlayButton: true,
					   textTrackDisplay: false,
					   posterImage: true,
					   errorDisplay: false,
					   language: 'zh-CN',
					   notSupportedMessage: '此视频暂无法播放，请稍后再试',
					   controlBar:true,
					   sources:[ // 视频源
					         {
					             src: that.url,
					         }
					     ]

				   },
				   
			   );
	
				},
				select(index){
					console.log(index)
					// this.player.dispose()
					//this.url=this.datalist[index]
					this.player.src({src:this.datalist[index] , type: "application/x-mpegURL"});
					this.player.play()
					// this.getVideo()
					
				}

				// start(){
				// 	this.player.play()
				// },

		},
		beforeDestroy() {
		      if (this.player != null) {
		        this.player.dispose() // dispose()会直接删除Dom元素
		      }
		    }

	
	}
</script>


