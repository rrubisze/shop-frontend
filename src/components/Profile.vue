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
<style lang="scss">
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
