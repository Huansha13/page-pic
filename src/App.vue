<template>
  <div id="root">
    <div id="nav">
      <nav-main></nav-main>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: #0c1924;

  element.style {
  }
  #root {
    background: url(https://www.calculadoradefletes.com/assets/img/login/backgorund.png) no-repeat 50% fixed;
    background-size: cover;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
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
