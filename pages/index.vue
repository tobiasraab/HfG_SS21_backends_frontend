<!--TODO:
  - verschiedene Ansichten auf Statistik (Aufbauend/reset am monatsanfang)
  - Mülleimer oder Haken
  - Beachten: verschiedene Müllsorten (rest/bio/playstik/papier)
  - Einheit zum Messen von Müll (Volumen bzw. Anzahl Säcke, Gewicht)

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
-->

<template>
  <div class="grid grid-rows-6 grid-cols-12 gap-4">
    <dropdown
      class="col-start-1 col-end-3 row-start-1 row-end-2"
      :label="'Jahr'"
      :options="[2020,2021]"
      :mutation="'updateGraphYear'"
    />
    <dropdown
      class="col-start-3 col-end-5 row-start-1 row-end-2"
      :label="'Monat'"
      :options="['Januar', 'Februar', 'März']"
      :mutation="'updateGraphMonth'"
    />
    <checkbox
      class="col-start-5 col-end-11 row-start-1 row-end-2"
      :label="'Müll'"
      :options="$store.state.graph.garbage"
      :mutation="'updateGraphCheckedGarbage'"
    />
    <dropdown
      class="col-start-11 col-end-13 row-start-1 row-end-2"
      :label="'Offene Menge'"
      :options="['Monat', 'Jahr']"
      :mutation="'updateBarTimeFormat'"
    />
    <graph id="graph_canvas" class="col-start-1 col-end-11 row-start-2 row-end-6" />
    <bar id="bar_canvas" class="col-start-11 col-end-13 row-start-2 row-end-6" />
    <switcher
      class="col-start-1 col-end-5 row-start-6 row-end-7"
      :label="'Darstellung'"
      :options="['Anteilig', 'Gesamt']"
      :mutation="'updateGraphPresentation'"
    />
    <checkbox
      class="col-start-5 col-end-11 row-start-6 row-end-7"
      :label="'Darstellung'"
      :options="$store.state.graph.limit"
      :mutation="'updateGraphCheckedLimit'"
    />
  </div>
</template>

<script>
import dropdown from '~/components/templates/dropdown.vue'
import checkbox from '~/components/templates/checkbox.vue'
import switcher from '~/components/templates/switcher.vue'
import bar from '~/components/templates/bar.vue'
import graph from '~/components/templates/graph.vue'

export default {
  name: 'Start',
  components: {
    dropdown,
    checkbox,
    switcher,
    bar,
    graph
  },
  layout: 'main-layout'
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
