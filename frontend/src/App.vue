<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/">About</router-link>-->
<!--  </div>-->
  <Title title="ToDo application" />
  <router-view />
</template>

<script>
import Title from "./components/Title";
export default {
  components: { Title },
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

</style>
