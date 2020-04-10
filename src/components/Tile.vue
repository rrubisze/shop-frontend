<template>
    <div>
         <img class= "image" src="./../assets/aubergine.png" alt="">
         <h1>Aubergine</h1>
         <h2>$3,99</h2>
    </div>
</template>
<style lang="scss" scoped>
h1 {
    color: #000000;
    text-align: left;
    font-family: Montserrat,sans-serif;
    font-size: 2rem;
}

h2{
    color:black;
    text-align: left;
    font-family: Montserrat,sans-serif;
    font-size: 1.5rem;
}
div{
    padding: 2rem;
    margin-top: 10rem;
}
.image {
    height: 20rem;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TileComponent extends Vue {
}
</script>