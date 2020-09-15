<template>
  <div id="app">
    <Grid />
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CardPlugin } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
Vue.use(CardPlugin)
Vue.use(BootstrapVue)
Vue.use(ButtonPlugin)

import Grid from './components/Grid.vue'

export default {
  name: 'App',
  components: {
    Grid
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
