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
// 定义routes路由的集合，数组类型
//show是我一进去页面就展示的界面，adminIndex是我要跳转的路径页面
const routes = [{
		path: '/movie',
		component: movielist,
		meta: {
			show: true
		}
	},
	{
		path: '/serial',
		component: seriallist,
		meta: {
			show: true
		}
	},
	{
		path: '/cartoon',
		component: cartoontv,
		meta: {
			show: true
		}
	},
	{
		path: '/relax',
		component: relax,
		meta: {
			show: true
		}
	},
	{
		path: '/login',
		component: login,
		meta: {
			show: false
		}
	},
	{
		path: '/register',
		component: register,
		meta: {
			show: false
		}
	},
	{
		name:'detail',
		path: '/detail',
		component: Detail,
		meta: {
			show: true
		}
	},
	{
		path: '*',
		redirect: '/detail'
	}
]


const router = new VueRouter({
	//ES6简写，等于routes：routes
	routes,
	mode: 'history'
})
export default router
