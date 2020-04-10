<template>
  <div id="app">
    <TopBarComponent></TopBarComponent>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html{
  background: white;
  background-size: contain;
  font-size: 62.5%;
  font-family: 'Montserrat', non-serif;
  color: black;
}

body {
  margin: 0px;
}
</style>
<script lang="ts">
import TopBarComponent from './components/TopBar.vue';

export default {
  name: 'Home',
  components: {
    TopBarComponent,
  },
};
</script>
