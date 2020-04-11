<template>
  <div class="shop-container" id="shop-main-div">
    <div class="shop-panel">
       <div class="search">
           <input type="text" class="searchTerm" placeholder="SEARCH">
           <div class="icon"></div>
         </div>
      <TileComponent v-on:click.native="navigateToDetails(1)"></TileComponent>
    </div>
    <div class="shop-shopping-cart" id="shop-shopping-cart-container">
      <ShoppingCartComponent></ShoppingCartComponent>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .shop-container {
    height: 100%;
  }

  .shop-shopping-cart {
    width: 25%;
    height: 120rem;
    background-color: #FAF3EF;
    position: fixed;
    right: 0px;
    border-radius: 4rem;
    margin-top: 2rem;
  }

  .shop-panel {
    width: 74%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    display: flex;
    flex-direction: row;
  }

 // Search
 .search{
position: absolute;
width: 60%;
height: 4rem;
left: 16rem;
top: 5rem;
background: #FAF3EF;
border-radius: 5rem;
text-transform: uppercase;
}

.icon {
background-image: url('./../assets/search.svg');
width: inherit;
z-index: 100;
background-repeat: no-repeat;
display: block;
}

.searchTerm {
width: 100%;
border: 0.5rem solid #FAF3EF;
padding-top: .7rem;
padding-left: 4rem;
height: 2rem;
outline: none;
background-color: #FAF3EF;
border-radius: 5rem;
}
</style>
<script>
import ShoppingCartComponent from './../components/ShoppingCart';
import TileComponent from "./../components/Tile" ;
import router from '../router';
// @ is an alias to /src
export default {
  name: 'Shop',
  components: {
    ShoppingCartComponent,
    TileComponent
  },
   methods: {
    navigateToDetails: function (id) {
      router.push("/shop/product/" + id)
    }
   }
};
</script>
