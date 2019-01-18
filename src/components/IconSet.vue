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

