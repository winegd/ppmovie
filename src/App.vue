<template>
  <div id="app">
<<<<<<< HEAD
	<router-view></router-view>
=======
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<cartoontv></cartoontv>
	 <!-- <router-view></router-view> -->
>>>>>>> 90e5af003c29344548c4b3c3be1c7e20d08bdb2a
  </div>
</template>

<script>
<<<<<<< HEAD

import Main from './components/Main.vue'

import cartoontv from './components/cartoontv.vue'
import movielist from './components/movielist.vue'
import seriallist from './components/seriallist.vue'
import lunbo from './components/Lunbo.vue'
import login from './components/login.vue'

=======
import HelloWorld from './components/HelloWorld.vue'
import cartoontv from './components/cartoontv.vue'
import movielist from './components/movielist.vue'
import seriallist from './components/seriallist.vue'
>>>>>>> 90e5af003c29344548c4b3c3be1c7e20d08bdb2a
export default {
  name: 'app',
  components: {
	Main,
	cartoontv,
	movielist,
<<<<<<< HEAD
	seriallist,
	login

  }
======
	seriallist
  },
	  
>>>>>>> 90e5af003c29344548c4b3c3be1c7e20d08bdb2a
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
