<template>
  <div>
    <div class = "left">
      <Map/>
    </div>
     <!-- <div class = "right">
      <Graph/>
    </div> -->
  </div>
</template>

<script>
import Map from '../components/seoulmap.vue'
// import Graph from '../components/graph.vue'
export default {
  // name: 'map',
  components: {
    // Graph,
    Map,
  },
   
}
</script>

<style>
div {
        width: 100%;
        height: 500px;
        /* border: 1px solid #003458; */
    }

 div.left {
        width: 50%;
        float: left;
        /* box-sizing: border-box; */

    }
    /* div.right {
        width: 50%;
        float: right;
        padding-right: 100px;
        padding: 50px;
        box-sizing: border-box;
        
    } */
    button.btn {
  position: absolute;
  top: 170px;
  left : 35px; 
}
    
</style>
