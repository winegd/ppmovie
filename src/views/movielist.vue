<!-- 动漫推荐 -->
<template>
	<div>
		<el-tabs v-model="activeName" class="tab-active">
			<el-tab-pane label="电影首页" name="first">
				<div class='first'>
					<div class="ziti">今日推荐</div>
					<div v-for="item in movieList" style='margin-top:20px' :key='item.filmId'
						@click='handleChangePage(item.filmId)'>
						<div class="div1">
							<a href="../" style="text-decoration:none;">
								<div class="div2">
									<img :src="item.poster" />
								</div>
								<div class='div3'>
									<el-link :underline="false">{{item.name}}</el-link>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class='second'>
					<div class="ziti">
						热门电影
					</div>
					<div v-for="item in movieList" style='margin-top:20px' :key='item.filmId'
						@click='handleChangePage(item.filmId)'>
						<div class="div1">
							<a href="../" style="text-decoration:none;">
								<div class="div2">
									<img :src="item.poster" />
								</div>
								<div class='div3'>
									<el-link :underline="false">{{item.name}}</el-link>
								</div>
							</a>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="电影库" name="second">
				<div v-for="item in movieList" :key='item.filmId' @click='handleChangePage(item.filmId)'>
					<div class="div1">
						<a href="../" style="text-decoration:none;">
							<div class="div2">
								<img :src="item.poster" />
							</div>
							<div class='div3'>
								<el-link :underline="false">{{item.name}}</el-link>
							</div>
						</a>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'movielist',
		data() {
			return {
				activeName: 'first',
				movieList: []
			}
		},
		mounted() {
			axios('https://m.maizuo.com/gateway?cityId=110100&pageNum=3&pageSize=20&type=1&k=1651774', {
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606697250632532718583809","bc":"440100"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
			}).then(res => {
				this.movieList = res.data.data.films
			})
		},
		methods: {
			handleChangePage(id) {
				this.$router.push(`/detail/${id}`)
			}
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
