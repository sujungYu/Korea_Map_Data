<template>
  <div >
  <div class="text">
   <h1 class="textstyle ">C O R O N A 1 9</h1>
   <!-- <span class="datestyle">{{$moment().format('YYYY. MM. DD')}}</span> -->
  <div class="back">
    <Home/>
  </div>
  </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  },
   
}
</script>

<style>

.textstyle{
  font-size: 70px;
  /* margin-top: 2%; */
  background-color: rgb(145, 144, 144);
  padding: 10px 10px;
  color: white;
  font-family: fantasy;
  text-align: center
  
}
.datestyle{
  font-size: 25px;
  font-family: monospace
}
.text{
  font-weight: bold;
  
}
.back{
   border-radius:20px;
   background-color: rgb(165, 164, 164);
   width: 100%;
   height: 150%
}


</style>
