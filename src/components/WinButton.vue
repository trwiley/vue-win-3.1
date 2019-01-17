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



