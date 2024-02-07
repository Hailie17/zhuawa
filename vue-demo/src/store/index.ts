import { createStore } from 'vuex'

export default createStore({
  state: {
    detailInfos: []
  },
  getters: {
  },
  mutations: {
    setDetailInfo(state, payload) {
      state.detailInfos = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
