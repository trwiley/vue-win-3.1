<template>
    <div class="window-border ">
    <div class="window">
        <titlebar titleheader = "Program Manager"></titlebar>
        <menubar :menuitems="menuitems"></menubar>
        <icon-set :icons="icons"></icon-set>
  </div>
  <div class="bottomright handle"></div>
  <div class="topright handle"></div>
  <div class="topleft handle"></div>
  <div class="bottomleft handle"></div>
  <context-menu></context-menu>
</div>
    
</template>

<script>
import Titlebar from './Titlebar'
import Menubar from './Menubar'
import IconSet from './IconSet'
import ContextMenu from './ContextMenu'
export default {
    components: {
        'titlebar': Titlebar,
        'menubar': Menubar,
        'icon-set': IconSet,
        'context-menu': ContextMenu
    },
    props: {
        'menuitems': Array,
        'icons': Array
    }
}
</script>

<style lang="sass">

</style>


