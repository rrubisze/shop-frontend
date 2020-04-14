<template>
    <div>
        <div id="sc_collapsed_shopping_cart" v-show="shoppingCartView" v-bind:class="[shoppingCartView ? 'sc-container' : 'dupa']">
            <h1>Shopping cart</h1>
            <p class="instruction">Drag and drop product to start shopping</p>
            <p class="total">TOTAL:</p>
            <p class="price"> $0,00</p>
            <button @click="checkout()" class= "checkout-save">checkout</button>
            <button class= "empty-delete-remove">empty shopping cart</button>
        </div>
        <div id="sc_expanded_shopping_cart" v-show="!shoppingCartView">
            
        </div>
    </div>
</template>
<style lang="scss" scoped>

$color: #FFFFFF;

.sc-container {
    background-color: #FAF3EF;
    width: 100%;
    border-radius: 4rem;
}

    h1 {
    color: black;
    text-transform: uppercase;
    padding: 2rem;
    font-weight: bold;
    font-size: 1.8rem;
    }

    .instruction {
    border: .1rem black;
    border-style: solid;
    color: black;
    background-color: white;
    font-size: 1.5rem;
    z-index: 100;
    width: 20rem;
    height: 13rem;
    border-radius: 3rem;
    margin: 0 auto;
    padding-top: 7rem;
}

p { font-size: 1.5rem;}

.price {
    text-align: right;
    margin-right: 2rem;
    transform: translate(-1rem, -3.5rem);
}
.total {
    text-align: left;
    margin-left: 2rem;
}
.checkout-save {
    position: relative;
    width: 18rem;
    height: 5rem;
    background: #FAF8EF;
    border: .1rem solid #000000;
    box-sizing: border-box;
    border-radius: 5rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #000000;
    margin-top: 0;
    transform: translate(0, -4rem);
}

.empty-delete-remove {
    margin-top: 1.5rem;
    position: relative;
    width: 18rem;
    height: 5rem;
    background: #E5E5E5;
    border: .1rem solid #000000;
    box-sizing: border-box;
    border-radius: 5rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #000000;
    transform: translate(0, -4rem);
}
</style>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class ShoppingCartComponent extends Vue {

    shoppingCartView = true;

    @Emit('checkoutEmit')
    checkoutEmit(){
        console.log("Emit")
    }

    checkout() {
        this.checkoutEmit();
        this.shoppingCartView = false;
        console.log("Checkout");
    }
}
</script>
