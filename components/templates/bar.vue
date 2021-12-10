<template>
  <div>
    <div id="bar_background" />
    <h3 id="bar_top">
      {{ (barMax - barProgress)/1000 + " kg" }}
    </h3>
    <div id="bar" />
    <h3 id="bar_bottom">
      {{ barProgress/1000 + " kg" }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: {
  },
  data () {
    return {
      barMax: 8000,
      barProgress: 5000
    }
  },
  mounted () {
    this.$anime({
      targets: '#bar',
      height: ((this.barProgress / this.barMax) * 100).toString() + '%',
      easing: 'linear',
      duration: 2000
    })
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
