import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import App from './App.vue'
// <<<<<<< HEAD


// import SlideVerify from 'vue-monoplasty-slide-verify';

// Vue.use(SlideVerify);
// import Router from 'vue-router'
// import Main from './components/Main.vue'
// import Lunbo from './components/Lunbo.vue'
// import Xiangqing from './components/Xiangqing.vue'

// import login from './components/login.vue'
// import register from './components/register.vue'
// import cartoontv from './components/cartoontv.vue'
// import movielist from './components/movielist.vue'
// import seriallist from './components/seriallist.vue'
// import relax from './components/relax.vue'
// =======
import router from '@/router'


Vue.config.productionTip = false

Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
