import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import Vue2Filters from 'vue2-filters'
import 'vuetify/dist/vuetify.css'
import store from './store'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(Vue2Filters)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
