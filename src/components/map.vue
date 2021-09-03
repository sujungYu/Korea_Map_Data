<template>
<div>
  <div class="reginstyle">전국확진자수</div>
  <div class="d3 ">
    </div>
</div>
    
</template>

<script>
import * as d3 from 'd3';
import * as topojson from 'topojson';
export default {
    name: 'Map',
    // props: {
    //   msg: String
    // },
    mounted() {
      this.draw();
    },
    methods: {
      draw() {
        const koreaMap = require('../assets/skorea-provinces-2018-topo-simple.json'); 
        const geojson = topojson.feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo); 
        // const center = d3.geoCentroid(geojson);
        const width = 500;
        const height =650;
        const svg = d3
          .select('.d3')
          .append('svg')
          .attr('width', width).attr('height', height);
        const projection = d3.geoMercator()
          .scale(1)
          .translate([0, 0]);
        const path = d3.geoPath().projection(projection);
        const bounds = path.bounds(geojson);
        const widthScale = (bounds[1][0] - bounds[0][0]) / width;
        const heightScale = (bounds[1][1] - bounds[0][1]) / height;
        const scale = 1 / Math.max(widthScale, heightScale);
        const xoffset = width / 2 - scale * (bounds[1][0] + bounds[0][0]) / 2 + 10;
        const yoffset = height / 2 - scale * (bounds[1][1] + bounds[0][1]) / 2 + 80;
        const offset = [xoffset, yoffset];
        projection.scale(scale).translate(offset); 
        svg.append('g')
          .selectAll('path').data(geojson.features)
          .enter().append('path')
          .attr('d', path)
          // .attr('transform', d3.event.transform)
      }
    }
}
</script>
<style>
.d3{
  background:white; 
  width: 470px; 
  height: 670px;
  margin-left: 2%;
  border:1px solid rgb(165, 164, 164);
  border-radius:20px;
  /* margin-top: 0%; */
  
  /* margin: 0 auto; 
  margin-bottom: auto; */

}
  path {
    fill:rgb(209, 60, 60);
    stroke:white;
  }
  .reginstyle{
    font-size: 25px;
    font-family: sans-serif;
    font-weight: bold;
    margin-left: 13%;
    color: white;
    /* margin-top: 2%; */
  }
  /* .round{
  border:1px solid rgb(165, 164, 164);
  border-radius:20px;
  margin-top: 0%;
  margin-left: 1%;
   */
/* } */
</style>