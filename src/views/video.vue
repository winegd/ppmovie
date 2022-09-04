<template>
	<!-- <div id="player_container"> -->
		<!-- <div id="player"> -->
			
			<video
			    id="my-video" 
			    controls
				class="video-js vjs-big-play-centered"
				width="790px"
				height="460px"
				poster="../assets/poster2.png"
					>
			</video> 

		<!-- </div> -->
	<!-- </div> -->
	<!-- <el-button type="primary" @click="getVideo()">播放</el-button> -->
	  <!-- <el-button  round @click="start()">播放</el-button> -->
	<!-- class="video-js vjs-default-skin vjs-big-play-centered" -->
	<!-- class="vjs-default-skin" -->
	
</template>

<script>
	require('video.js/dist/video-js.css')
	import axios from "axios"
	import videojs from "video.js";
	import "videojs-contrib-hls";
	export default{
		beforeCreate(){
			// console.log(this.$route.query.vod_id)
		},
		mounted() {
			// var vod_id = this.$route.query.vod_id
			console.log('子组件'+this.url)
			this.getVideo()
		},
		name:'video',
		props: {
		  url: String
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
		},
		beforeDestroy() {
		      if (this.player != null) {
		        this.player.dispose() // dispose()会直接删除Dom元素
		      }
		    }

	
	}
</script>


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
		
		height: 460px;
		
	}
	#player_container{
		display: flex;
		flex-direction: row;
	}
</style>