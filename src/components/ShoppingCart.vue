<template>
<div class="sc-container">
    <label>First Component</label>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShoppingCartComponent extends Vue {
}
</script>
<style lang="scss" scoped>

$color: #FFFFFF;

.sc-container {
    background-color: #653489;
    width: 100%;

    h2 {
    color: $color;
    }
}


</style>
