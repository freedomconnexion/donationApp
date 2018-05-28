import Vue from 'vue'
import Vuex from 'vuex'
import donations from './modules/donations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    donations,
  },
  strict: true,
})
