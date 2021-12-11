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
    },
    store: {
      default: undefined,
      type: String
    },
    mutation: {
      default: undefined,
      type: String
    }
  },
  data () {
    return {
      selected: this.options[0]
    }
  },
  watch: {
    selected () {
      this.$store.commit(this.mutation, this.selected)
    }
  },
  mounted () {
    this.$store.commit(this.mutation, this.selected)
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
  width: 100%;
  background-color: #277C9D;
  color: #ffffff;

  padding: 0px 16px;

  border-radius: 4px;
  border: none;
  outline: none;
}
</style>
