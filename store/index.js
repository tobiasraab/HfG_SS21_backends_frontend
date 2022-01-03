export const state = () => ({
  graph: {
    year: undefined,
    month: undefined,
    garbage: ['Plastik', 'Paper', 'Rest'],
    checkedGarbage: [],
    presentation: 'relativ',
    limit: ['Grenzwert'],
    checkedLimit: []
  },
  bar: {
    timeFormat: undefined,
    maxMonth: 1000,
    maxYear: 12000,
    progress: 0
  },
  data: {}
})

export const mutations = {
  updateData (state, data) {
    state.data = data
  },
  updateGraphYear (state, data) {
    state.graph.year = data
  },
  updateGraphMonth (state, data) {
    state.graph.month = data
  },
  updateGraphGarbage (state, data) {
    state.graph.garbage = data
  },
  updateGraphCheckedGarbage (state, data) {
    state.graph.checkedGarbage = data
  },
  updateGraphPresentation (state, data) {
    state.graph.presentation = data
  },
  updateGraphLimit (state, data) {
    state.graph.limit = data
  },
  updateGraphCheckedLimit (state, data) {
    state.graph.checkedLimit = data
  },
  updateBarTimeFormat (state, data) {
    state.bar.timeFormat = data
  },
  updateBarMax (state, data) {
    state.bar.max = data
  },
  updateBarProgress (state, data) {
    state.bar.progress = data
  }
}
