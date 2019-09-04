import { Line } from 'vue-chartjs'
import numeral from 'numeral'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this
      .renderChart(
        this.chartdata,
        {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                callback: function (value) {
                  return numeral(value).format('0a')
                }
              }
            }],
            xAxes: [{
              gridLines: {
                display : false
              }
            }]
          },
          ...this.options,
        }
      )
  }
}