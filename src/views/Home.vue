<template>
  <div class="home" style="display: flex"  @click = "$router.push('/filter')">
    <div class="picture1 col-md-7 col-xl-7 col-12">
    </div>
    <div class="picture2 col-md-5 col-xl-5 col-12">
      <b-container class="content">
        <b-row class = "titleText1"  align-v="center">eNUF</b-row>
        <b-row class = "titleText2" align-v="center">No Unused Food</b-row>
        <b-row class = "sloganText" align-v="center">Save the environment</b-row>
        <b-row class = "sloganText" align-v="center">Save the moolah</b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
  }
</script>

<style>
.picture1{
    width: 100%;
    margin-top: 0px;
    height: 100vh;
    background-image: url("../assets/home1.jpeg");
    background-size: cover;
    flex: 4;
}
.picture2{
    width: 100%;
    margin-top: 0px;
    height: 100vh;
    background-image: url("../assets/home2.png");
    background-size: cover;
    flex: 4;
}

.titleText1{
    padding-top: 200px;
    text-align:left;
    padding-left: 200px;
    font-size:60px;
    color: #819611;
    font-weight:800;
    font-family:system-ui;
}
.titleText2{
    padding-top: 10px;
    padding-bottom: 120px;
    text-align:left;
    padding-left: 200px;
    font-size:25px;
    color:#819611;
    font-weight:600;
    font-family:system-ui;
}
.sloganText{
    text-align:left;
    padding-left: 200px;
    font-size:25px;
    color:#819611;
    font-weight:600;
    font-family:system-ui;
}

</style>