<template>
  <div class="window-border " :style="windowHeightWidth">
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
        'context-menu': ContextMenu,
    },
    props: {
        'menuitems': Array,
        'icons': Array,
        'height': String,
        'width': String
    },
    computed: {
      windowHeightWidth () {
        return {
          height: this.height,
          width: this.width
        }
      }

    }
}
</script>

<style lang="scss">

 @import '../assets/scss/constants.scss';
 .window {
    background: $win-window-bg;
    height: 100%;
    width: 100%;
    position: relative;
    border: 1px solid $win-border-color;
    z-index: 9999;

    .title {
      background: $win-title-bg;
      color: $win-title-color;
      text-align: center;
      line-height: 24px;
      height: 26px;
      font-weight: 500;
      border-bottom: solid 1px $win-border-color;
    }
  }

  .handle {
    position:absolute;
    height: 29px;
    width: 29px;
    border:solid 1px $win-border-color;
  }
  
  .topright {
    top: -1px;
    right: -1px;
    cursor:ne-resize;
  }
  
  .bottomright {
    bottom: -1px;
    right: -1px;
    cursor:nw-resize;
  }
  
  .topleft {
    top: -1px;
    left: -1px;
    cursor:nw-resize;
  }
  
  .bottomleft {
    bottom: -1px;
    left: -1px;
    cursor:ne-resize;
  }

    .window-border {
    background: $win-border-bg;
    position: absolute;
    padding: 2px 4px 4px 2px;
    border: 1px solid $win-border-color;  
    width: 550px;
    height: 300px;
    top: 10%;
    left: 25%;
  }

</style>