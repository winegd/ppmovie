import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import App from './App.vue'

import router from '@/router'
import 'video.js/dist/video-js.css'


Vue.config.productionTip = false

Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
