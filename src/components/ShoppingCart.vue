<template>
<div class="sc-container">
    <h2>First Component</h2>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShoppingCartComponent extends Vue {
}
</script>
<style lang="scss">

$color: #FFFFFF;

.sc-container {
    background-color: #653489;

    h2 {
    color: $color;
    }
}


</style>
