<template>
<div class="title">
    <win-button classname="button close" idname="window" char="—"></win-button>
    {{ titleheader }}
    <win-button classname="button" idname="max" char="▲"></win-button>
    <win-button classname="button" idname="min" char="▼"></win-button>
</div>
</template>

<script>
import WinButton from './WinButton'
export default {
    props: {
        'titleheader': String
    },
    components: {
        'win-button': WinButton
    }

}
</script>

