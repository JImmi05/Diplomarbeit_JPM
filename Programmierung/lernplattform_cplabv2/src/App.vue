<template>
  <nav>
    <router-link to="/startseite">Starseite</router-link> |
    <router-link to="/sign-in">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/feed">Feed</router-link>
  </nav>

  <div class="text-wrapper-9">Lernplattform CPLAB</div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  
}



.text-wrapper-9 {
  color: #426b1f;
  font-family: "Newsreader-Medium", Helvetica;
  font-size: 32px;
  font-weight: 500;
  left: 96px;
  letter-spacing: -0.32px;
  line-height: 32px;
  position: absolute;
  top: 40px;
  white-space: nowrap;
}


</style>
