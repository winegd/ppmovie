<!-- 动漫推荐 -->
<template>
	<div>
		<el-tabs v-model="activeName" class="tab-active">
			<el-tab-pane :label="title" name="first">
<!-- 				<div class='first'>
					<div class="ziti">今日推荐</div>
					<div v-for="item in movieList" style='margin-top:20px' :key='item.vod_id'
						>
						<div class="div1">
							<router-link :to="{name:'detail',params: {id: item.vod_id}}" style="text-decoration:none;" >
								<div class="div2">
									<img :src="item.vod_pic" />
								</div>
								<div class='div3'>
									<el-link :underline="false">{{item.vod_name}}</el-link>
								</div>
								</router-link>
						</div>
					</div>
				</div> -->
				<div class='second'>
					<div class="ziti">
						热门{{title}}
					</div>
					<div v-for="item in movieList" style='margin-top:20px' :key='item.vod_id'
						>
						<div class="div1">
							<!-- <a href="../" style="text-decoration:none;"> -->
							<router-link :to="{name:'detail',params: {id: item.vod_id}}" style="text-decoration:none;" >
								<div class="div2">
									<img :src="item.vod_pic" />
								</div>
								<div class='div3'>
									<el-link :underline="false">{{item.vod_name}}</el-link>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="影视库" name="second">
				<div v-for="item in movieList" :key='item.vod_id' @click='handleChangePage(item.vod_id)'>
					<div class="div1">
						<!-- <a href="../" style="text-decoration:none;"> -->
						<router-link :to="{name:'detail',params: {id: item.vod_id}}" style="text-decoration:none;" >
							<div class="div2">
								<img :src="item.vod_pic" />
							</div>
							<div class='div3'>
								<el-link :underline="false">{{item.vod_name}}</el-link>
							</div>
						</router-link>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import global from '@/global'
	import axios from 'axios'
	export default {
		beforeCreate(){
			console.log(this.$route.query.type_id)

			
		},

		name: 'movielist',
		data() {
			return {
				activeName: 'first',
				title:'',
				movieList: []
			}
		},
		mounted() {

			let type_id = this.$route.query.type_id
			if(type_id==1){
				this.title='电影'
			}else if(type_id==13){
				this.title='电视剧'
			}else if(type_id==30){
				this.title='综艺'
			}else if(type_id==25){
				this.title='动漫'
			}else if(type_id==20){
				this.title='纪录片'
			}
			else if(type_id==9){
				this.title='科幻片'
			}
			else if(type_id==26){
				this.title='日漫'
			}
			axios({
				//url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=5501344`,
				//url:'http://localhost:3000/get_mv',
				url:global.base_url+'get_mv',
				method: 'get',
				params:{
					type_id:type_id,
					num:50
				}

			}).then((res) => {
				console.log('请求成功')
				console.log(res.data)
				//this.filmInfo = res.data
				this.movieList=res.data
			})
		},
		methods: {
			// handleChangePage(id) {
			// 	this.$router.push(`/detail/${id}`)
			// }
		},
	}
</script>

<style>
	.div2 {
		height: 25ch;
		width: 20ch;
	}

	.div1 {
		margin-top: 10px;
		width: 20ch;
		height: 30ch;
		margin-left: 30px;
		margin-right: 20px;
		float: left;
	}

	.div2 img {
		width: 20ch;
		height: 25ch;
		border-radius: 15px;
	}

	.div2 img:hover {
		box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
		margin-bottom: 10px;
	}

	.div3 {
		margin-left: 20px;
	}

	.el-tabs__item {
		font-size: 18px;
		color: gray;
	}

	.tab-active {
		/* color: white ; */
		/* background-color: #35a121; */
	}

	.ziti {
		margin-top: 20px;
		text-align: left;
		font-size: 30px;
		width: 200px;
	}

	.first {
		height: 600px;
	}

	.second {
		margin-top: 40px
	}
</style>
