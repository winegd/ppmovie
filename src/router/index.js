// 引入VUE
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 第三方库需要use一下才能使用

Vue.use(VueRouter)
import VueRouter from 'vue-router'
import cartoontv from '@/views/cartoontv.vue'
import movielist from '@/views/movielist.vue'
import seriallist from '@/views/seriallist.vue'
import Lunbo from '@/views/Lunbo.vue'
import Detail from '@/views/Detail.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import relax from '@/views/relax.vue'
import Player from '@/views/Player.vue'
import Main from '../components/Main.vue'

// 定义routes路由的集合，数组类型
//show是我一进去页面就展示的界面，adminIndex是我要跳转的路径页面



 const routes = [
	 {
		 name:'main',
		 path:'/main',
		 component:Main,
		 children:[
			 {
				name:'movie',
			 	path: '/movie',
			 	component: movielist,					 
			 },
			 {
			 	name:'detail',
			 	path: '/detail/:id',
			 	component: Detail,
			 },
			 {
			 	name:'play',
			 	path: '/play/:index/:vod_id',
			 	component: Player,
			 },
			{
				name:'serial',
				path: '/serial',
				component: seriallist,
			},
			{
				name:'cartoon',
				path: '/cartoon',
				component: cartoontv,
			},
			{
				name:'relax',
				path: '/relax',
				component: relax,
			
			},
			{
				name:'lunbo',
				path: '/lunbo',
				component: Lunbo,			
				
			},
			{
				path: '/',
				redirect: '/lunbo'
			}
			
		 ]
	 },

	 {
		 name:'login',
	 	path: '/login',
	 	component: login,

	 },
	 {
		 name:'register',
	 	path: '/register',
	 	component: register,
	 },
	{
		path: '/',
		redirect: '/lunbo'
	}

	 ]

const router = new VueRouter({
	//ES6简写，等于routes：routes
	routes,
	mode: 'history'
})
export default router
