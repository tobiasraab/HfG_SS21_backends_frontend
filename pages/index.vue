<!--TODO:
  - verschiedene Ansichten auf Statistik (Aufbauend/reset am monatsanfang)
  - Mülleimer oder Haken
  - Beachten: verschiedene Müllsorten (rest/bio/playstik/papier)
  - Einheit zum Messen von Müll (Volumen bzw. Anzahl Säcke, Gewicht)
-->

<template>
  <div>
    <dropdown
      :label="'Jahr'"
      :options="[2020,2021]"
    />
    <dropdown
      :label="'Monat'"
      :options="['Januar', 'Februar', 'März']"
    />
    <checkbox
      :label="'Müll'"
      :options="['Plastik', 'Papier', 'Rest']"
    />
    <switcher
      :label="'Müll'"
      :options="['Plastik', 'Papier', 'Rest']"
    />
  </div>
</template>

<script>
import dropdown from '~/components/templates/dropdown.vue'
import checkbox from '~/components/templates/checkbox.vue'
import switcher from '~/components/templates/switcher.vue'

export default {
  name: 'Start',
  components: {
    dropdown,
    checkbox,
    switcher
  },
  layout: 'main-layout'
}
</script>

<style scoped>
</style>
