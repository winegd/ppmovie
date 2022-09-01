<template>
  <div id="app">

	<router-view></router-view>
  </div>
</template>

<script>
import Xiangqing from './components/Xiangqing.vue'

   
// import Main from './components/Main.vue'

import cartoontv from './components/cartoontv.vue'
import movielist from './components/movielist.vue'
import seriallist from './components/seriallist.vue'
// import lunbo from './components/Lunbo.vue'


export default {
  name: 'app',
  components: {
	// Main,
	cartoontv,
	movielist,
	seriallist,
	Xiangqing

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
