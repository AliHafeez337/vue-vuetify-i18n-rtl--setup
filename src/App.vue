<template>
  <v-app id="app">
    <router-view name="header"></router-view>
    <fade-transition origin="center" mode="out-in" :duration="250">
      <router-view/>
    </fade-transition>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  created() {
    console.log(this.$i18n.locale, this.$vuetify.rtl)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
