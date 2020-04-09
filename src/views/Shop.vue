<template>
  <div class="shop-container" id="shop-main-div">
    <div class="shop-panel">
      <TileComponent></TileComponent>
    </div>
    <div class="shop-shopping-cart" id="shop-shopping-cart-container">
      <ShoppingCartComponent></ShoppingCartComponent>
    </div>

  </div>
</template>
<style lang="scss">
  .shop-container {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .shop-shopping-cart {
    width: 20%;
    height: 120rem;
    background-color: red;
    position: fixed;
    right: 0px;
  }

  .shop-panel {
    width: 79%;
    height: 100%;
    position: absolute;
    background-color: yellow;
  }
</style>
<script>
import ShoppingCartComponent from './../components/ShoppingCart';
import TileComponent from "./../components/Tile" ;
// @ is an alias to /src
export default {
  name: 'Shop',
  components: {
    ShoppingCartComponent,
    TileComponent
  },
};
</script>
