<template>
<div class="icon">
    <img :src="imageSource"/>
    <div class="text">{{ caption }}</div>
</div>
</template>
<script>
export default {
    props: {
        'imageSource': String,
        'caption': String
    }
}
</script>
