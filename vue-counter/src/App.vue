<template>
  <div id="app">
    <CounterComponent/>
  </div>
</template>

<script>
import CounterComponent from './components/counter.vue'

export default {
  name: 'App',
  components: {
    CounterComponent
  }
}
</script>

<style>
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #5a7795;
  margin-top: 60px;
}
</style>
