<template>
 <div class="shop-container" id="shop-main-div">
    <div class="product-panel">
      <img src="./../assets/back.svg" alt="" class="back">
      <img class= "detail" src="./../assets/aubergine.svg" alt="">
      <h1>Aubergine</h1>
      <h2>$3,99</h2>
      <p>Nisi velit fugiat eu quis laborum incididunt incididunt proident amet in 
        tempor irure eiusmod id eiusmod id ea pariatur culpa</p>
      <button class="add">add to shopping cart</button>
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

  .product-panel {
    width: 74%;
    height: 100%;
    position: absolute;
    background-color: #fff;
  }
.back{
height: 5rem;
position: absolute;
padding-top: 5rem;
padding-left: 7rem;
display: block;
}

.detail{
  height: 25rem;
  padding-top: 10rem;
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
    components: {
    ShoppingCartComponent
    }
};
</script>
