<template>
    <div class="row mt-5 graphstyle" v-if="arrdecideCnt.length>0">
      <div class="col">
        <h2>arrdecideCnt</h2>
        <line-chart :width="10" :height="10" :chartData="arrdecideCnt" :options="chartOptions" label="arrdecideCnt"></line-chart>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import LineChart from './LineChart.vue'

export default {
  components:{
    LineChart
  },

  data () {
    return {
      arrdecideCnt:[],
      chartOptions:{
        responsive: true,
        mainTainAspecRatio: false
        
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
}

</style>
