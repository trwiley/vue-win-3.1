<template>
<div class="icon">
    <img :src="imageSource"/>
    <div class="text">{{ caption }}</div>
</div>
</template>
<script>
export default {
    props: {
        'image-source': String,
        'caption': String
    }
}
</script>
