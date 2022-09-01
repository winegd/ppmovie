// 引入VUE
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 第三方库需要use一下才能使用
Vue.use(VueRouter)
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import cartoontv from '../components/cartoontv.vue'
import movielist from '../components/movielist.vue'
import seriallist from '../components/seriallist.vue'
// 定义routes路由的集合，数组类型
//show是我一进去页面就展示的界面，adminIndex是我要跳转的路径页面
const routes=[
  {
    path : '/',
    component:HelloWorld,
  },
  {
    path : '/cartoon',
    component:cartoontv,
  },
 //  {
 //    path:'/admin/index',
 //    component:news,
	// children:[
	// 	{path:'dept',
	// 	component:HelloWorld},
	// 	{path:'depth',
	// 	component:second}
	// ]
 //  }
]

const router = new VueRouter({
  //ES6简写，等于routes：routes
  routes,
  mode: 'history'
})
export default router

