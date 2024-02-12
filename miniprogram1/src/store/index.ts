import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		detailInfos: []
	},
	mutations: {
		setDetailInfos(state, payload) {
			state.detailInfos = payload
		}
	}
})