<template>
  <div>
      <Map/>
     <div>
       <Graph/>
     </div>
      
  </div>
</template>

<script>
import Map from '../components/map.vue'
import Graph from '../components/graph.vue'
export default {
  // name: 'map',
  components: {
    Graph,
    Map
  }
}
</script>

<style>

</style>
