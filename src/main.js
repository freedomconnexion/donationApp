import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.css'
import store from './store'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
