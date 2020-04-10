<template>
    <div class="top-bar">
      <img src="./../assets/Example.svg" alt="" class="logo">
      <div class="menu">
        <button class="menu-button-active">
          Shop
        </button>
        <button class="menu-button">
          Contact
        </button>
      </div>
      <div class="profile">
        <img src="./../assets/Ellipse 1.svg" alt="" class="avatar">
        <p>Colleen Watson</p>
      </div>
    </div>
</template>
<style lang="scss">
@import '../styles.scss';

.top-bar {
    width: 100%;
    height: 8rem;
    background-color: $base-color;
    border-radius: 0px 5rem 5rem 0px;

    .logo {
        position: absolute;
        width: 15rem;
        left: 2rem;
        top: 2rem;
    }

    .menu {
        position: absolute;
        left: 18%;
        top: 5.5rem;

        .menu-button {
            background: #FAF3EF;
            border-radius: 5rem;
            width: 15rem;
            height: 5rem;
            border: 0px;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            font-size: 1.3rem;
            position: relative;
            z-index: 2;
        }
        .menu-button-active {
            background: #FFFFFF;
            border-radius: 5rem;
            width: 15rem;
            height: 5rem;
            border: 0px;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            font-size: 1.3rem;
            position: relative;
            z-index: 2;
            font-weight: bold;
        }
    }

    .profile {
        position: absolute;
        right: 5%;
        top: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .avatar {
            width: 3.5rem;
            padding-bottom: .6rem;
        }
      p {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 0px;
      }
    }
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopBarComponent extends Vue {
}
</script>

