<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cartoontv from 'components/cartoontv.vue'
import movielist from 'components/movielist.vue'
import seriallist from 'components/seriallist.vue'
export default {
export default {
  name: 'app',
  components: {
    HelloWorld,
	cartoontv,
	movielist,
	seriallist
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
  margin-top: 60px;
}
</style>
