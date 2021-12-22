<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/">About</router-link>-->
  <!--  </div>-->
  <div class="wrapper">
    <div></div>
    <Title title="ToDo" />
    <router-link class="link" to="/about"
      ><span class="marker">Еще больше туду</span></router-link
    >
  </div>

  <router-view />
</template>

<script>
import Title from "./components/Title";
export default {
  components: { Title },
};
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
  max-width: 800px;
  margin: 0 auto;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  position: relative;
}
.marker {
  text-transform: uppercase;
  color: black;
}
.marker::after {
  content: "";
  height: 6px;
  width: 165px;
  background-color: yellowgreen;
  position: absolute;
  top: 25px;
  right: 44px;
  z-index: -1;
}
.link {
  text-decoration: none;
}
</style>
