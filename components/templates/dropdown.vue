<template>
  <div class="dropdown">
    <h3 class="label">
      {{ label }}
    </h3>
    <select v-model="selected">
      <option
        v-for="item in options"
        :key="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
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
      selected: this.options[0]
    }
  }
}
</script>

<style scoped>
.dropdown{
  position: relative;
}
.label{
  font-size: 12px;
  padding: 0;
  margin-bottom: 8px;
}
select{
  height: 40px;

  background-color: #277C9D;
  color: #ffffff;

  padding: 0px 16px;

  border-radius: 4px;
  border: none;
  outline: none;
}
</style>
