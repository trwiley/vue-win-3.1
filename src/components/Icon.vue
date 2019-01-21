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

<style lang="scss">
 @import '../assets/scss/constants.scss';
    .icon {
      display: inline-block;
      margin: 00px 10px;
      width: 80px;
      font-size: 12px;
      text-align: center;
      
      :active > .text {
        background: $win-icon-active-bg;
        color: $win-icon-active-text;
      }

    }  
</style>

