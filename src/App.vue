<template>
  <div id="nav">
    <nav-main></nav-main>
  </div>
  <router-view/>
</template>

<style lang="scss">

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: #0c1924;
}
</style>
<script>
import NavMain from "./components/NavMain";
export default {
  components: {NavMain}
}
</script>

<style lang="scss">
#nav a.router-link-exact-active {
  opacity: .7;
}
</style>
