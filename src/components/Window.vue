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
  <div id="context-menu" style="display:none">
    <div class="context-item"><span style="text-decoration:underline;">R</span>estore</div>
    <div class="context-item"><span style="text-decoration:underline;">M</span>ove</div>
    <div class="context-item"><span style="text-decoration:underline;">S</span>ize</div>
    <div class="context-item">Mi<span style="text-decoration:underline;">n</span>imize</div>
    <div class="context-item">Ma<span style="text-decoration:underline;">x</span>imize</div>
  </div>
</div>
    
</template>

<script>
import Titlebar from './Titlebar'
import Menubar from './Menubar'
import IconSet from './IconSet'
export default {
    components: {
        'titlebar': Titlebar,
        'menubar': Menubar,
        'icon-set': IconSet
    },
    props: {
        'menuitems': Array,
        'icons': Array
    }
}
</script>

<style lang="sass">

</style>


