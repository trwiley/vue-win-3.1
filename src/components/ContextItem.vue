<template>
    <div class="context-item">{{ msg }}</div>
</template>

<script>
export default {
    props: {
        msg: String
    }
}
</script>
<style lang="scss">
 @import '../assets/scss/constants.scss';
.context-item {
      padding: 5px;
      font-weight: 600;
      padding: 5px;

      :active {
        background: $win-context-active-bg;
        color: $win-context-active-color;
      }
    }
</style>

