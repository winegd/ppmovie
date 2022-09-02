<template>
	<div>
		
		<video
		    id="my-video" 
		    controls
			class="video-js vjs-big-play-centered" 
		    preload="auto"
			width="800px"
				>
		    <source :src="url" type="application/x-mpegURL" />
		</video> 
		<el-button type="primary" @click="getVideo()">开始</el-button>
		
		
	</div>
</template>

<script>
	import videojs from "video.js";
	import "videojs-contrib-hls";
	
	export default{
		name:'Player',
		data(){
		return {
				speed:1,
				//url:'https://v6.dious.cc/20220428/AvHwnFK7/index.m3u8'
				url:'https://v7.dious.cc/20220810/ANOpTDb5/index.m3u8'
			}
		},
		props: {
		  msg: String
		},
		methods:{
			getVideo() {
			   videojs(
				   "my-video",
				   {
					   bigPlayButton: false,
					   textTrackDisplay: false,
					   posterImage: true,
					   errorDisplay: false,
					   controlBar: true
				   },
				   function() {
					   this.play();
				   }
			   );
	
				},
				// videoPlay() {
				//         //点击盒子让播放按钮隐藏
				//       this.videoPauseShow = false;
				//         //触发video的播放事件
				//       getVideo()
				//     },
		},
		
		mounted(){
		        
		      }
	
	}
</script>

<style>
</style>
