<template>
  <div class="home">
        <router-link tag="button" to="/admin" class="admin-button">Admin page</router-link>
        <img src="./../assets/Ellipse 1.svg" alt="" class="photo">
        <h1>Colleen Watson</h1>
        <p><b>E- mail:</b> c.watson@example.com</p>
        <p><b>Phone number:</b> (307) 555-0133</p>
        <p><b>Address:</b></p>
        <p>5171 W Campbell Ave undefined Kent,</p>
        <p>53127 United States</p>
        <button class="remove-profile-button">Remove profile</button>
        <button class="edit-details-button">Edit your details</button>
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
line-height: 3rem;
color: #000000;
}

p {
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 1.7rem;
line-height: 3rem;
color: #000000;
text-align: left;
margin-left: 45rem;
}

.photo {
  width: 9rem;
  padding-top: 5rem;
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

.remove-profile-button {
  background: #E4E4E4;
  border-radius: 5rem;
  width: 15rem;
  height: 5rem;
  border: 0px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  font-weight: bold;
  }
.edit-details-button {
  background: #FAF3EF;
  border-radius: 5rem;
  width: 15rem;
  height: 5rem;
  border: 0px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  font-weight: bold;
  margin-left: 4rem;
  }
</style>