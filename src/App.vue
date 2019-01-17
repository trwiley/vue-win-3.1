<template>
  <div id="app">
    <window :menuitems="menuitems"></window>
  </div>
</template>

<script>
import Window from './components/Window'
export default {
  name: 'app',
  components: {
    'window': Window
  },
  data () {
    return {
      'menuitems': []
    }
  },
  created() {
    this.menuitems = ['File', 'Option', 'Windows', 'Help']
  }
}
</script>

<style>
</style>
