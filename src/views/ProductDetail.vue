<template>
 <div class="shop-container" id="shop-main-div">
    <div class="product-panel">
      <router-link tag="a" to="/shop" class="back"></router-link>
      <img class= "detail" src="./../assets/aubergine.svg" alt="">
      <h1>Aubergine</h1>
      <h2>$3,99</h2>
      <p>Nisi velit fugiat eu quis laborum incididunt incididunt proident amet in 
        tempor irure eiusmod id eiusmod id ea pariatur culpa</p>
      <button class="add">add to shopping cart</button>
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

  .product-panel {
    width: 74%;
    height: 100%;
    position: absolute;
    background-color: #fff;
  }
.back{
background-image: url("./../assets/back.svg");
background-repeat: no-repeat;
height: 7rem;
display: block;
background-size: 7rem;
margin-left: 5rem;
margin-top: 3rem;
}

.detail{
  height: 25rem;
  padding-left: 25rem;
  display: block;
}

h1{
  padding-left: 2rem;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: capitalize;
  color: #2C1F26;
  text-align: left;
  padding-left: 25rem;
}
h2{
  padding-left: 2rem;
  font-family: Montserrat;
  font-size: 2rem;
  text-transform: capitalize;
  color: #2C1F26;
  text-align: left;
  padding-left: 25rem;
}

p{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #000000;
  padding: (0 44rem 0 25rem);
  text-align: left;
}
.add {
    margin-top: 3rem;
    width: 18rem;
    height: 5rem;
    background: #FAF3EF;
    border: none;
    box-sizing: border-box;
    border-radius: 5rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #000000;
    align-content: left;
    display: block;
    margin-left: 25rem;
}
</style>
<script>
import ShoppingCartComponent from './../components/ShoppingCart';

export default {
  name: 'ProductDetail',
     data: function() {
    return {
      collapsedShoppingCart: true,
    };
  },
  components: {
    ShoppingCartComponent,
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
