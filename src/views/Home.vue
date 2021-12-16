<template>
  <div class="home"  @click = "$router.push('/filter')">
    <b-container fluid>
      <b-row no-gutters>
        <b-col class="p-0 d-none d-lg-block" cols="7">
          <div class="picture1"> </div>
        </b-col>
        <b-col class="p-0" cols="12" lg="5">
          <div class="picture2">
            <b-container class="content">
              <b-row no-gutters class = "titleText1"  align-v="center">eNUF</b-row>
              <b-row no-gutters class = "titleText2" align-v="center">No Unused Food</b-row>
              <b-row no-gutters class = "sloganText" align-v="center">Save the environment</b-row>
              <b-row no-gutters class = "sloganText" align-v="center">Save the moolah</b-row>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
    margin: 0px;
    height: 100vh;
    background-image: url("../assets/home1.jpeg");
    background-size: cover;
}
.picture2{
    width: 100%;
    margin: 0px;
    height: 100vh;
    background-image: url("../assets/home2.png");
    background-size: cover;
}
.titleText1{
    padding-top: 30%;
    text-align:left;
    padding-left: 20%;
    font-size:60px;
    color: #819611;
    font-weight:800;
    font-family:system-ui;
    
}
.titleText2{
    padding-top: 10px;
    padding-bottom: 120px;
    text-align:left;
    padding-left: 20%;
    font-size:25px;
    color:#819611;
    font-weight:600;
    font-family:system-ui;
}
.sloganText{
    text-align:left;
    padding-left: 20%;
    font-size:25px;
    color:#819611;
    font-weight:600;
    font-family:system-ui;
}
</style>