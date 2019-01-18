<template>
 <div id="context-menu" style="display:none">
     <div v-for="(txt, index) in menu" :key="index">
         <context-menu :msg="txt"></context-menu>
     </div>
    <!-- <div class="context-item"><span style="text-decoration:underline;">R</span>estore</div>
    <div class="context-item"><span style="text-decoration:underline;">M</span>ove</div>
    <div class="context-item"><span style="text-decoration:underline;">S</span>ize</div>
    <div class="context-item">Mi<span style="text-decoration:underline;">n</span>imize</div>
    <div class="context-item">Ma<span style="text-decoration:underline;">x</span>imize</div> -->
</div>   
</template>
<script>
import ContextMenu from './ContextMenu'
export default {
    data () {
        return {
            menu: ['Restore', 'Move', 'Size', 'Minimize', 'Maximize']
        }
    },
    components: {
        'context-menu': ContextMenu
    }
}
</script>

