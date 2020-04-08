<template>
<div class="container">
    <h2>First Component</h2>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopBarComponent extends Vue {
}
</script>
<style>
.container {
    background-color: #653489
}
</style>
