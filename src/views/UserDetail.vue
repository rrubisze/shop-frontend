<template>
  <div class="home">
        <router-link tag="button" to="/admin" class="admin-button">Admin page</router-link>
        <img src="./../assets/Ellipse 1.svg" alt="" class="photo">
        <h1>Colleen Watson</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'UserDetail',
};
</script>
<style lang="scss" scoped>
h1{
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 3rem;
line-height: 6rem;
color: #000000;
}

.photo {
  width: 9rem;
  padding-top: 6rem;
  padding-bottom: 1rem;}

.admin-button {
    background: #2C1F26;
    border-radius: 5rem;
    width: 15rem;
    height: 5rem;
    border: 0px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 1.3rem;
    position: absolute;
    top:10rem;
    right: 4rem;
    z-index: 2;
    color: white;
    font-weight: bold;
}

</style>