<!-- 动漫推荐 -->
<template>
	<div style="margin-left: 20%;">
		<el-tabs class="tab-active" type="card">
			<el-tab-pane label="电影首页" name="first">
				<div class='first'>
						<div class="ziti">
						今日推荐
						</div>
					<div v-for="l in lis" style='margin-top:40px'>
						<div class="div1">
							<a href="../" style="text-decoration:none;">
								<div class="div2">
									<img :src="l.src" />
								</div>
								<div class='div3'>
									<el-link :underline="false">{{l.name}}</el-link>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class='second'>
						<div class="ziti">
						热门电影
						</div>
												<div>sss</div>
					<div v-for="l in lis" style='margin-top:40px'>
						<div class="div1">
							<a href="../" style="text-decoration:none;">
								<div class="div2">
									<img :src="l.src" />
								</div>
								<div class='div3'>
									<el-link :underline="false">{{l.name}}</el-link>
								</div>
							</a>
						</div>
						</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="电影库" name="second">
				<div v-for="l in lis">
					<div class="div1">
						<a href="../" style="text-decoration:none;">
							<div class="div2">
								<img :src="l.src" />
							</div>
							<div class='div3'>
								<el-link :underline="false">{{l.name}}</el-link>
							</div>
						</a>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: 'cartoontv',
		data() {
			return {
				lis: [{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
					{
						src: require('../assets/0.jpeg'),
						name: 'ss'
					},
				]
			}
		}
	}
</script>

<style>
	.div2 {
		height: 25ch;
		width: 20ch;
	}

	.div1 {
		margin-top: 20px;
		width: 20ch;
		height: 30ch;
		margin-left: 30px;
		margin-right: 20px;
		float: left;
	}

	.div2 img {
		width: 20ch;
		height: 25ch;
	}

	.div3 {
		margin-left: 20px;
	}
	
	.el-tabs__item {
		font-size: 18px ;
		color: gray;
	}
	
	.tab-active {
		color: white ;
		background-color: #35a121;
	}
	
	.ziti {
		margin-top: 20px;
		text-align: left;
		font-size: 30px;
		width:200px;
	}
	.first{
		height:600px;
	}
	.second{
		margin-top:40px
	}
</style>
