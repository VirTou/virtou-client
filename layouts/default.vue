<template>
  <div id="app">
    <v-app>
      <AppHeader />
      <v-main class="ma-0 pa-0">
        <Nuxt />
      </v-main>
      <AppFooter />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
}

.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.85;
  background: #801411;
  background: -webkit-linear-gradient(to bottom, #ff2722, #801411);
  background: linear-gradient(to bottom, #ff2722, #801411);
}

.fg {
  /* min-height: 100vh; */
  display: flex;
  z-index: 1;
}
</style>
