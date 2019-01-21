<template>
<div class="icons">
    <div v-for="(i, index) in icons" :key="index">
        <icon :image-source="i.image" :caption="i.caption"></icon>
    </div>
</div>    
</template>
<script>
import Icon from './Icon'
export default {
    props: {
        'icons': Array
    },
    components: {
        'icon': Icon
    }
}
</script>
<style lang="scss">
 @import '../assets/scss/constants.scss';
   .icons {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 15px 5px;
    background: $win-icons-bg;
    z-index: 5;
   }
</style>


