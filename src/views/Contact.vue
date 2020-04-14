<template>
    <div>
      <h1>Contact us</h1>
      <p><b>Phone number:</b> (603) 555-0123</p>
      <p><b>E- mail:</b> fruitsandveg@example.com</p>
      <p><b>Address:</b></p>
      <p>6928 Blossom Hill Rd undefined Surrey,</p>
      <p>Oregon 20441 United States</p>
      <div class="map"></div>
      <div class="pin"></div>
    </div>
</template>
<style lang="scss" scoped>

h1 {
text-transform: uppercase;
font-family: Montserrat;
font-size: 2rem;
text-align: left;
margin-left: 24rem;
margin-top: 5rem;
font-weight: 300;
}
p {
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 1.7rem;
line-height: 3rem;
color: #000000;
text-align: left;
margin-left: 24rem;
}
.map {
  background-image: url("./../assets/map.svg");
  background-repeat: no-repeat;
  height: 37rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.pin {
  background-image: url("./../assets/pin.svg");
  background-repeat: no-repeat;
  height: 10rem;
  width: 10rem;
  transform: translate(70rem, -26rem);
}
</style>
<script lang="ts">
export default {
  name: 'Contact',
};
</script>
