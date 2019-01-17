<template>
<div class="menuitem">
    <span style="text-decoration:underline;">{{ firstChar }}</span>{{ restChar }}
</div> 
</template>
<script>
export default {
    props: {
        'item': String
    },
    computed: {
        firstChar () {
            return this.item.charAt(0)
        },
        restChar () {
            return this.item.substring(1)
        }
    }
}
</script>

