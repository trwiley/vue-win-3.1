<template>
  <div id="app">
    <drag-it-dude>
      <window :menuitems="menuitems" :icons="icondata"></window>
    </drag-it-dude>
  </div>
</template>

<script>
import Window from './components/Window'
import DragItDude from '../node_modules/vue-drag-it-dude/src/DragItDude.vue'
export default {
  name: 'app',
  components: {
    'window': Window,
    'drag-it-dude': DragItDude
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
#app {
  height: 100vh;
}
</style>
