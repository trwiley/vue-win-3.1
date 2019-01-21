<template>
<div class="menubar">
    <div>
        <win-menuitem v-for="(item, index) in menuitems" :key="index" :item="item"></win-menuitem>
    </div>   
</div>
</template>

<script>
import WinMenuitem from './WinMenuitem'
export default {
    props: {
        'menuitems': Array
    },
    components: {
        'win-menuitem': WinMenuitem
    }   
}
</script>
<style lang="scss">
 @import '../assets/scss/constants.scss';
  .menubar {
    height: 24px;
    border-bottom: solid 1px $win-border-color;
  }
</style>

