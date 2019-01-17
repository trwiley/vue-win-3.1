<template>
  <div id="app">
    <window :menuitems="menuitems" :icons="icondata"></window>
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
      menuitems: [],
      icondata: [
        {
          'image': 'http://windowsfreak.de/icons/win3.11/folder.png',
          'caption': 'Accessories'
        },
        {
          'image': 'http://windowsfreak.de/icons/win3.11/folder.png',
          'caption': 'Games'
        },
        {
          'image': 'http://windowsfreak.de/icons/win3.11/folder.png',
          'caption': 'Applications'
        },
        {
          'image': 'http://windowsfreak.de/icons/win3.11/folder.png',
          'caption': 'main'
        }
      ],
    }
  },
  created () {
    this.populateMenuItems()
  },
  methods: {
    populateMenuItems () {
      this.menuitems = ['File', 'Option', 'Windows', 'Help']
    },
  }
}
</script>

<style>
</style>
