<template>
 <div id="context-menu" style="display:none">
     <div v-for="(txt, index) in menu" :key="index">
         <context-menu :msg="txt"></context-menu>
     </div>
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

