<template>
  <div class="graph-background">
    <client-only>
      <VueApexCharts width="100%" height="100%" type="line" :options="options" :series="series" />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Graph',
  components: {
  },
  props: {
  },
  data () {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
        }
      },
      series: []
    }
  },
  computed: {
    ...mapState(['data'])
  },
  watch: {
    data: {
      deep: true,
      handler () {
        this.buildGraph()
      }
    }
  },
  mounted () {
  },
  methods: {
    buildGraph () {
      // reset chart data
      this.options = { xaxis: { categories: [] } }
      this.series = []

      // build Chart of trash
      if (this.$store.state.data) {
        const GRAPHDATA = this.$store.state.data
        const SERIE = {
          name: 'Müll',
          data: []
        }
        const ARR = []

        // combine all data into a date array and a value array
        for (let i = 0; i < GRAPHDATA.length; i++) {
          // build value array
          SERIE.data.push(GRAPHDATA[i].weight)

          // get dates
          const DATE = new Date(GRAPHDATA[i].createdAt)
          const DAY = DATE.getDay()
          const MONTH = DATE.getMonth()
          const YEAR = DATE.getFullYear()

          // build date string
          const AXISDATE = DAY.toString() + '.' + MONTH.toString() + '.' + YEAR.toString()

          // build date array
          ARR.push(AXISDATE)
        }

        // add new trash serie to existing series
        this.series.push(SERIE)

        // change xaxis dates
        this.options = { xaxis: { categories: ARR } }
      }
    }
  }
}
</script>

<style scoped>
.graph-background{
    height: 100%;
    width: 100%;
    background-color: #ffffff;
}
.graph_dot{
    background-color: red;
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 8px;
}
</style>
