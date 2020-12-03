export const state = () => ({
  overlay: false,
})

export const mutations = () => ({
  showOverlay(state) {
    this.state.overlay = true
  },
})
