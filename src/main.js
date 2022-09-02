import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import App from './App.vue'


import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);
import Router from 'vue-router'
import Main from './components/Main.vue'
import Lunbo from './components/Lunbo.vue'
import Xiangqing from './components/Xiangqing.vue'

import login from './components/login.vue'
import register from './components/register.vue'
import cartoontv from './components/cartoontv.vue'
import movielist from './components/movielist.vue'
import seriallist from './components/seriallist.vue'
import relax from './components/relax.vue'

Vue.config.productionTip = false
Vue.use(Router)

Vue.use(ElementUI)

const routes = [
	{path:'/main',component:Main,
		children:[
			{
			 path:'/',
			 component:Xiangqing
			},
			{
			 path:'/xq',
			 component:Xiangqing
			},
			{
				path:'/movie',
				component:movielist
			},
			{
				path:'/serial',
				component:seriallist
			},
			{
				path:'/cartoon',
				component:cartoontv
			},
			{
				path:'/relax',
				component:relax
			}
		]
	},
	{path:'/', redirect:'/main'},
	{path:'/login',component:login},
	{path:'/register',component:register}
]
const router = new Router({
	routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
