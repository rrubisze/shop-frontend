<template>
  <div class="shop-container" id="shop-main-div">
    <div class="shop-panel">
       <div class="search">
           <input type="text" class="searchTerm" placeholder="SEARCH">
           <div class="icon"></div>
         </div>
      <TileComponent v-on:click.native="navigateToDetails(1)"></TileComponent>
    </div>
    <div v-bind:class="[collapsedShoppingCart ? 'shop-shopping-cart' : 'shop-shopping-cart-expanded']" id="shop-shopping-cart-container">
      <ShoppingCartComponent @checkoutEmit="checkout"></ShoppingCartComponent>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .shop-container {
    height: 100%;
  }

  .shop-shopping-cart-expanded {
    -webkit-transition: width 1s ease-in-out;
    -moz-transition: width 1s ease-in-out;
    -o-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
    width:70%;

    height: 120rem;
    background-color: #FAF3EF;
    position: fixed;
    right: 0px;
    border-radius: 4rem;
    margin-top: 2rem;

    z-index: 11;
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
  data: function() {
    return {
      collapsedShoppingCart: true,
    };
  },
  components: {
    ShoppingCartComponent,
    TileComponent
  },
   methods: {
    navigateToDetails: function (id) {
      router.push("/shop/product/" + id)
    },
    checkout: function($event) {
      //this.collapsedShoppingCart = false;
      console.log($event);
      
      this.collapsedShoppingCart = false;
      console.log(this.collapsedShoppingCart);
      //collapsedShoppingCart = false;
    }
   }
};
</script>
