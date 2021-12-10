<template>
  <div class="switcher">
    <h3 class="label">
      {{ label }}
    </h3>
    <div
      class="switcher-button"
    >
      <button
        class="switcher-item switcher-item-1"
        :class="{'switcher-item-active': toggleState, 'switcher-item-passive': !toggleState}"
        @click="switcherClick"
      >
        {{ options[0] }}
      </button>
      <button
        class="switcher-item switcher-item-2"
        :class="{'switcher-item-active': !toggleState, 'switcher-item-passive': toggleState}"
        @click="switcherClick()"
      >
        {{ options[1] }}
      </button>
      <h1>{{ toggleState }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  props: {
    label: {
      default: '',
      type: String
    },
    options: {
      default: undefined,
      type: Array
    }
  },
  data () {
    return {
      toggleState: true
    }
  },
  methods: {
    switcherClick () {
      this.toggleState = !this.toggleState
    }
  }
}
</script>

<style scoped>
.switcher{
  position: relative;
}
.switcher-item{
  position: absolute;
  height: 40px;
  width: 50%;
}
.switcher-item-1{
  left: 0%;
  border-radius: 4px 0px 0px 4px;
}
.switcher-item-2{
  right: 0%;
   border-radius: 0px 4px 4px 0px;
}
.switcher-item-active{
  background-color: #227C9D;
  color: #ffffff;
}
.switcher-item-passive{
  background-color: #C8DEE7;
  color: #227C9D;
}
.switcher-button{
  display: inline-block;
  margin-right: 28px;
}
.label{
  font-size: 12px;
  padding: 0;
  margin-bottom: 8px;
}
input{
  margin-right: 8px;
  height: 16px;
  width: 16px;
  background-color: #227C9D;
  color: #ffffff;

  border: none;
  outline: none;

  vertical-align: middle;
}
label{
  color: #000000;
  font-size: 14px;
}
</style>
