<template>
    <div :class="classname" :id='idname'>
        {{ char }}
    </div>
</template>

<script>
export default {
    props: {
        'idname': String,
        'classname': String,
        'char': String
    }
}
</script>
<style lang="scss">
 @import '../assets/scss/constants.scss';
 .button {
        background: $win-button-color;
        color: $win-button-txt;
        margin: 0px;
        width: 20px;
        height: 20px;
        font-size: 12px;
        float: right;
        border: outset 3px;
        line-height: 20px;
        z-index: 5555;

        :active {
          border: inset 3px;
        }

        .close {
        float: left;
        color: #fff;
        font-weight: 800;
        font-size: 21px;
        line-height: 16px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }

      }
</style>




