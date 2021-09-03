
<script>
import { Line } from "vue-chartjs";

export default {
    extends: Line,
    props:{
        label:{
            type: String
        },
        chartData:{
            type: Array
        },
        options:{
            responsive: false,
            maintainAspectRatio: false,
            //  legend:{
            //  display:false, 
            // },
            scales:{
                yAxes:[{
                    ticks:{
                        // stepSize:10,
                        // fontSize:12
                    },
                    gridLines:{
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes:[{
                    display: false,
                    gridLines:{
                        display: false,
                        brawBorder: false
                    }
                }]
            },
        },
    },
    mounted(){
        const dates = this.chartData.map(d=>d.stateDt).reverse();
        const totals = this.chartData.map(d=>d.total).reverse();

        this.renderChart({
            labels: dates,
            datasets: [
                {
                label: this.label,
                data: totals,
                backgroundColor: 'white',
                borderColor:'blue'
            }
            ]
        },
            this.options
        );
    }
};
</script>
