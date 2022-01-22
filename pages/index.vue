<template>
  <div class="grid grid-rows-6 grid-cols-12 gap-4">
    <dropdown
      class="col-start-1 col-end-3 row-start-1 row-end-2"
      :label="'Jahr'"
      :options="[2021, 2022]"
      :mutation="'updateGraphYear'"
    />
    <dropdown
      class="col-start-3 col-end-5 row-start-1 row-end-2"
      :label="'Monat'"
      :options="['Jahr', 'Januar', 'Februar', 'März', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']"
      :mutation="'updateGraphMonth'"
    />
    <dropdown
      class="col-start-11 col-end-13 row-start-1 row-end-2"
      :label="'Offene Menge'"
      :options="['Monat', 'Jahr']"
      :mutation="'updateBarTimeFormat'"
    />
    <graph id="graph_canvas" class="col-start-1 col-end-11 row-start-2 row-end-6" />
    <bar id="bar_canvas" class="col-start-11 col-end-13 row-start-2 row-end-6" />
    <checkbox
      class="col-start-1 col-end-5 row-start-6 row-end-7"
      :label="'Darstellung'"
      :options="$store.state.graph.limit"
      :mutation="'updateGraphCheckedLimit'"
    />
    {{ data }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dropdown from '~/components/templates/dropdown.vue'
import checkbox from '~/components/templates/checkbox.vue'
import bar from '~/components/templates/bar.vue'
import graph from '~/components/templates/graph.vue'

export default {
  name: 'Index',
  components: {
    dropdown,
    checkbox,
    bar,
    graph
  },
  layout: 'main-layout',
  data () {
    return {
      data: undefined
    }
  },
  computed: {
    ...mapState({
      year: state => state.graph.year,
      month: state => state.graph.month
    })
  },
  watch: {
    year: {
      handler () {
        this.apiCall()
      }
    },
    month: {
      handler () {
        this.apiCall()
      }
    }
  },
  mounted () {
    this.apiCall()
  },
  methods: {
    apiCall () {
      let uri
      let month
      const YEAR = this.$store.state.graph.year
      // convert month word Strings to numbers
      switch (this.$store.state.graph.month) {
        case 'Jahr': // Jahresansicht
          month = 0
          break
        case 'Januar':
          month = 1
          break
        case 'Februar':
          month = 2
          break
        case 'März':
          month = 3
          break
        case 'April':
          month = 4
          break
        case 'Mai':
          month = 5
          break
        case 'Juni':
          month = 6
          break
        case 'Juli':
          month = 7
          break
        case 'August':
          month = 8
          break
        case 'September':
          month = 9
          break
        case 'Oktober':
          month = 10
          break
        case 'November':
          month = 11
          break
        case 'Dezember':
          month = 12
          break
      }

      // Set query params for Request URL
      if (month === 0) {
        uri = 'http://169.51.205.11:31428/data?year=' + YEAR.toString()
      } else {
        uri = 'http://169.51.205.11:31428/data?year=' + YEAR.toString() + '&month=' + month.toString()
      }

      // Send GET-Request to pullData-service
      this.$axios.$get(uri)
        .then((res) => {
          console.log('SUCCESS_APICALL: ', uri)
          console.log('RESPONSE_APICALL: ', res)
          // save data in vuex Store
          this.$store.commit('updateData', res.data)
        })
        .catch((err) => {
          console.error('ERROR_APICALL: ', err)
        })
    }
  }
}
</script>

<style scoped>
  #bar_canvas{
    position: relative;
    width: 100%;
    height: 100%;
  }
   #graph_canvas{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
