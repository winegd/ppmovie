<template>
  <div id="app">
		<!-- <Main v-show="$route.meta.show"></Main> -->
		<router-view></router-view>
  </div>
</template>

<script>
import Main from '../src/components/Main'
export default {
  name: 'app',
  components:{
	  Main
  }
}
</script>

<style>
#app {
/* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
