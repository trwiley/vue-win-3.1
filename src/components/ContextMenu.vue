<template>
 <div id="context-menu" style="display:none">
     <div v-for="(txt, index) in menu" :key="index">
         <context-item :msg="txt"></context-item>
     </div>
</div>   
</template>
<script>
import ContextItem from './ContextItem'
export default {
    data () {
        return {
            menu: ['Restore', 'Move', 'Size', 'Minimize', 'Maximize']
        }
    },
    components: {
        'context-item': ContextItem
    }
}
</script>
<style lang='scss'>
 @import '../assets/scss/constants.scss';
#context-menu {
    position: absolute;
    border: solid 1px $win-border-color;
    width: 150px;
    margin: -1px;
    margin-top: 5px;
    z-index:999999999;
    background: $win-context-bg;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,.5);
}
</style>

