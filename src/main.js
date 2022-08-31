import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Router from 'vue-router'
Vue.config.productionTip = false
Vue.use(Router)

Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
