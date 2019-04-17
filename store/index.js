import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		num:1
	},
	getters: {
		dbnum (state) {
			return 2*state.num
		}
	},
    mutations: {
		add (state) {
			state.num += 1
		}
	},
    actions: {
		asyncAdd ({commit}) {
			setTimeout( () => {
				commit('add')
			}, 2000)
		}
	}
})

export default store