<template>
<!-- <div class = "graphtextstyle">전체 누적 확진자 추이 -->
    <div class="row mt-5 graphstyle" v-if="arrdecideCnt.length>0">
      <!-- <div class="col"> -->
        <line-chart :width="170" :height="60" :chartData="arrdecideCnt" :options="chartOptions" ></line-chart>
      <!-- </div> -->
    </div>
    <!-- </div> -->
</template>

<script>
import {Line} from 'vue-chartjs'
import axios from 'axios'
import moment from 'moment'

import LineChart from './LineChart.vue'

export default {
  extends: Line,
  components:{
    LineChart
  },

  data () {
    return {
      arrdecideCnt:[],
      chartOptions:{
        title:{
          display: true,
          text:'전체 누적 확진자 추이',
          fontSize: 25,
          fontFamily: 'sans-serif',
          fontStyle: 'bold'

          // fontColor: white;
          // margin-top: 1%;
          /* margin-bottom: 2%; */
          // text-align: center;
        },
        responsive: true,
        mainTainAspecRatio: false,
        legend:{
          display: false,
        },

        tooltips:{ 
          enabled: true,
        },
        hover:{
          animationDuration: 0
        },
        animation:{
          duration:1,
        },

        scales:{
           yAxes:[{
            // display: false,
            gridLines:{
              display:true,
              brawBorder:false
            }
          }],
          xAxes:[{
            ticks:{
              fontSize:12,
            },

          gridLines:{
            display:false,
            drawBorder:false
          }
          }],
          
        }
      }
    };
  },
  async created(){
    const { data } = await axios.get('/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210830&endCreateDt=20210903')
    console.log(data);
    data.response.body.items.item.forEach(d => {
      const stateDt = moment(d.stateDt, "YYYYMMDD").format("MM/DD");

      const {
        decideCnt,
        
      } = d;

      this.arrdecideCnt.push({stateDt, total: decideCnt});
      
    });

  }

  
}
  

</script>

<style>
.graphstyle{
    border-radius:20px;
    background-color: white;
    border:1px solid white;
    height: 290px;
    margin-left: 50%;
  
}
/* .graphtextstyle{
    font-size: 25px;
    font-family: sans-serif;
    font-weight: bold;
    color: white;
    margin-top: 1%;
    margin-bottom: 2%;
    text-align: center;
} */



</style>
