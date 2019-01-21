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

      .button {
        background: $win-button-color;
        color: $win-button-txt;
        display: inline-block;
        margin: 0px;
        width: 20px;
        height: 20px;
        font-size: 12px;
        float: right;
        border: outset 3px;
        line-height: 20px;
        z-index: 5555;

        :active {
          border: inset 3px;
        }

      }

      .close {
        float: left;
        color: #fff;
        font-weight: 800;
        font-size: 21px;
        line-height: 16px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }
    }
  }

</style>


