<template>
  <div>
    <div id="bar_background" />
    <h3 id="bar_top">
      {{ ((barMax - $store.state.bar.progress)/1000).toFixed(3) + " kg" }}
    </h3>
    <div id="bar" />
    <h3 id="bar_bottom">
      {{ ($store.state.bar.progress/1000).toFixed(3) + " kg" }}
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Bar',
  props: {
  },
  data () {
    return {
      barMax: undefined
    }
  },
  computed: {
    ...mapState({
      timeFormat: state => state.bar.timeFormat,
      progress: state => state.bar.progress
    })
  },
  watch: {
    timeFormat: {
      deep: true,
      handler () {
        console.log('CAAAAAAAAAAAALL')
        this.apiCall()
      }
    },
    progress: {
      deep: true,
      handler () {
        this.buildBar()
      }
    }
  },
  mounted () {
    this.apiCall()
    this.buildBar()
  },
  methods: {
    apiCall () {
      let uri

      const DATE = new Date()
      const CURRENTMONTH = DATE.getMonth() + 1
      const CURRENTYEAR = DATE.getFullYear()

      if (this.$store.state.bar.timeFormat === 'Monat') {
        uri = 'http://159.122.174.54:31312/data?year=' + CURRENTYEAR.toString() + '&month=' + CURRENTMONTH.toString()
      } else {
        uri = 'http://159.122.174.54:31312/data?year=' + CURRENTYEAR.toString()
      }

      this.$axios.$get(uri)
        .then((res) => {
          console.log('SUCCESS_APICALL: ', uri)
          console.log('RESPONSE_APICALL: ', res)

          // set bar max
          if (this.$store.state.bar.timeFormat === 'Monat') {
            this.barMax = this.$store.state.bar.maxMonth
          } else {
            this.barMax = this.$store.state.bar.maxYear
          }

          // build bar progress
          let totalWeight = 0
          // add together all weights
          for (let i = 0; i < res.data.length; i++) {
            totalWeight = totalWeight + res.data[i].weight
          }
          // save total weight
          this.$store.commit('updateBarProgress', totalWeight)
        })
        .catch((err) => {
          console.log('ERROR_APICALL: ', err)
        })
    },
    buildBar () {
      this.$anime({
        targets: '#bar',
        height: ((this.$store.state.bar.progress / this.barMax) * 100).toString() + '%',
        easing: 'linear',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
#bar_background{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #F4DFC7;
}
#bar_top{
  position: absolute;
  top: 0;
  margin: 16px;
  font-size: 20px;
  color: #D37E1D;
}
#bar_bottom{
  position: absolute;
  bottom: 0;
  margin: 16px;
  font-size: 20px;
  color: #F4DFC7;
}
#bar{
  height: 0%;
  width: 100%;
  background-color: #D37E1D;
  position: absolute;
  bottom: 0;
}
</style>
