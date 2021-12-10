<template>
  <div>
    <div id="graph_background">
      <div
        v-for="index in dotNumber"
        :id="'dotId' + index.toString()"
        :key="index"
        class="graph_dot"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  props: {
  },
  data () {
    return {
      dotNumber: 10
    }
  },
  mounted () {
    for (let i = 1; i <= this.dotNumber; i++) {
      this.$anime({
        target: '#dotId' + i.toString(),
        translateX: 250
      })
    }
  }
}
</script>

<style scoped>
#graph_background{
    height: 100%;
    width: 100%;
    background-color: #F4DFC7;
}
.graph_dot{
    background-color: red;
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 8px;
}
</style>
