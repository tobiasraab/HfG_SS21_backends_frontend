<template>
  <div class="graph-background">
    <client-only>
      <VueApexCharts width="100%" height="100%" type="line" :options="options" :series="series" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  components: {
  },
  props: {
  },
  data () {
    return {
      series: [{
        name: 'Rest',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 45, 50, 49, 70]
      },
      {
        name: 'Bio',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      }],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez']
        }
      }
    }
  },
  mounted () {
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
