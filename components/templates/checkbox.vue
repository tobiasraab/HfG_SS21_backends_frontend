<template>
  <div class="checkbox">
    <h3 class="label">
      {{ label }}
    </h3>
    <div
      v-for="item in options"
      :key="item"
      class="checkbox-item"
    >
      <label :for="item">
        <input
          :id="item"
          v-model="checkedItems"
          type="checkbox"
          :value="item"
        >{{ item }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: {
      default: '',
      type: String
    },
    options: {
      default: undefined,
      type: Array
    },
    mutation: {
      default: undefined,
      type: String
    }
  },
  data () {
    return {
      checkedItems: []
    }
  },
  watch: {
    checkedItems () {
      // send updated state to vuex store
      this.$store.commit(this.mutation, this.checkedItems)
    }
  },
  mounted () {
    // send updated state to vuex store
    this.$store.commit(this.mutation, this.checkedItems)
  }
}
</script>

<style scoped>
.checkbox{
  position: relative;
}
.checkbox-item{
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
