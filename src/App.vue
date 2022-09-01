<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>

import Main from './components/Main.vue'

import cartoontv from './components/cartoontv.vue'
import movielist from './components/movielist.vue'
import seriallist from './components/seriallist.vue'
import lunbo from './components/Lunbo.vue'
import register from './components/register.vue'
import login from './components/login.vue'

export default {
  name: 'app',
  components: {
	Main,
	cartoontv,
	movielist,
	seriallist,
	login,
	register

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
