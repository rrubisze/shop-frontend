<template>
    <div>
        <img src="./../assets/Ellipse 1.svg" alt="" class="avatar">
        <router-link tag="p" to="/profile">Colleen Watson</router-link>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProfileComponent extends Vue {
}
</script>
<style lang="scss" scoped>
.admin-button {
    background: #2C1F26;
    border-radius: 5rem;
    width: 15rem;
    height: 5rem;
    border: 0px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 1.3rem;
    position: relative;
    z-index: 2;
    color: white;
}
.avatar {
    width: 3.5rem;
    padding-bottom: .6rem;
}
p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0px;
}
p:hover {
    cursor: pointer;
}
</style>