<template>
	<div id="player_container">
		<div id="player">
			
			<video
			    id="my-video" 
			    controls
				class="video-js vjs-default-skin vjs-big-play-centered"
				width="790px"
				height="460px"
					>
			    <source :src="url" type="application/x-mpegURL" />
			</video> 
			<!-- <el-button type="primary" @click="getVideo()">播放</el-button> -->
			  <el-button  round @click="getVideo()">播放</el-button>
			<!-- class="video-js vjs-default-skin vjs-big-play-centered" -->
			<!-- class="vjs-default-skin" -->
		</div>
	
		
		<div id="side_container" >
			<h2 >{{moviename}}</h2>
			<h4 style="margin: 8px;" >选集播放</h4>
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
<style>
	#side_container{
		display: flex;
		flex-direction:column;
		width:calc(100% - 792px);
		height:auto ;
		text-align: left;
		border: 4px white solid;
	}
	#player{
		width: 792px;
		height: auto;
		
	}
	#player_container{
		display: flex;
		flex-direction: row;
	}
</style>
<script>
	
	import videojs from "video.js";
	import "videojs-contrib-hls";
	
	export default{
		mounted() {
			this.getVideo()
		},
		name:'Player',
		data(){
		return {
				speed:1,
				//url:'https://v6.dious.cc/20220428/AvHwnFK7/index.m3u8',
				//url:'https://m3.taopianplay1.com:43333/taopian/54fdb532-e89b-4567-bc07-aa93a0c6a79b/a891bf2e-a823-4ae0-ac07-107cdf1703d8/75490/2c7dc32b-6cc4-4bca-8ce7-80eb077ef6e3/SD/playlist.m3u8',
				//url:'https://v7.dious.cc/20220816/IShATbpk/index.m3u8',
				//url:' https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8',
				url:'https://s5.fsvod1.com/20220428/kfhEcrR1/index.m3u8',
				player:'',
				datalist:[1,1,4,5,7,1,1,4,5,7,1,1,4,5,7,1,1,4,5,7,1,1,4,5,7,1,1,4,5,],
				moviename:"长津湖"
			}
		},
		props: {
		  msg: String
		},
		methods:{
			getVideo() {
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
					   controlBar: true,
					   playbackRates: [0.5, 1.0, 1.5, 2.0], 
					   language: 'zh-CN',
					   notSupportedMessage: '此视频暂无法播放，请稍后再试',
					   autoplay: true
				   }
			   );
			   this.player.play()
	
				},
				beforeDestroy() {
				      if (this.player != null) {
				        this.player.dispose() // dispose()会直接删除Dom元素
				      }
				    }
		},
		
		mounted(){
		        
		      }
	
	}
</script>


