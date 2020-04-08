<template>
    <div style="width: 100px; height 20px;">
        <h1>Tile Component</h1>
    </div>
</template>
<style lang="scss">
h1 {
    color: red
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TileComponent extends Vue {
}
</script>