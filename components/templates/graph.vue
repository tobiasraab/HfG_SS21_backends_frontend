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
      dataLenght: undefined,
      limitYear: 1200,
      limitMonth: 100,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
        }
      },
      colors: ['#000000', '#247BA0'],
      series: []
    }
  },
  computed: {
    ...mapState({
      data: state => state.data,
      limit: state => state.graph.checkedLimit
    })
  },
  watch: {
    data: {
      handler (oldVal, newVal) {
        this.buildGraph()
      }
    },
    limit: {
      handler () {
        // only build limit if selected
        if (this.limit[0] === 'Grenzwert') {
          this.buildLimit(true)
        } else {
          this.buildLimit(false)
        }
      }
    }
  },
  methods: {
    buildLimit (buildLimit) {
      // if true: build limit line
      if (buildLimit) {
        const SERIE = {
          name: 'limit',
          data: []
        }

        // create all Values for limit line
        for (let i = 0; i < this.dataLenght; i++) {
          SERIE.data.push(this.limitYear)
        }

        // add limit serie to other series
        this.series.push(SERIE)
      } else { // if false delete limit line
        // find Limit Serie
        for (let i = 0; i < this.series.length; i++) {
          if (this.series[i].name === 'limit') {
            // delete limit serie
            this.series.splice(i, 1)
          }
        }
      }
    },
    buildGraph () {
      // reset chart data
      this.options = { xaxis: { categories: [] } }
      // find Müll Serie
      for (let i = 0; i < this.series.length; i++) {
        if (this.series[i].name === 'Müll') {
          // delete Müll serie
          this.series.splice(i, 1)
        }
      }

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
        console.log(this.options.xaxis.categories)
        this.dataLenght = this.options.xaxis.categories.length

        // build new limit line
        this.buildLimit(false)
        if (this.limit[0] === 'Grenzwert') {
          console.log('build limit')
          this.buildLimit(true)
        }
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
