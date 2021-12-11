<template>
  <div>
    <div id="graph_background" />
  </div>
</template>

<script>
/* import p from 'p5' */

export default {
  name: 'Graph',
  props: {
  },
  data () {
    return {
      dotNumber: 20
    }
  },
  mounted () {
    /* let speed = 2
    let posX = 0

    // NOTE: Set up is here
    p.setup = () => {
      p.createCanvas(500, 500)
      p.ellipse(p.width / 2, p.height / 2, 500, 500)
    }
    // NOTE: Draw is here
    p.draw = () => {
      p.background(0)
      const degree = p.frameCount * 3
      const y = p.sin(p.radians(degree)) * 50

      p.push()
      p.translate(0, p.height / 2)
      p.ellipse(posX, y, 50, 50)
      p.pop()
      posX += speed

      if (posX > p.width || posX < 0) {
        speed *= -1
      }
    } */
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
