<template>
  <v-app>
    <v-jumbotron src="/public/hero.jpg" height="100%">
    <v-layout row wrap>
      <v-flex xs12 height="15px" />
      <v-flex xs12 md6 offset-md6>
        <amount-card v-show="processState === 'amount'" />
        <info-card v-show="processState === 'info'" />
        <credit-card v-show="processState === 'payment'" @nonceReceived="onNonceReceived" />
        <thank-you-card v-show="processState === 'thank-you'" />
      </v-flex>
    </v-layout>
    </v-jumbotron>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';
  import CreditCard from './components/CreditCard';
  import InfoCard from './components/InfoCard';
  import AmountCard from './components/AmountCard';
  import ThankYouCard from './components/ThankYouCard';


  export default {
    components: { AmountCard, InfoCard, CreditCard, ThankYouCard },
    data () {
      return {
        title: 'App.vue'
      }
    },
    computed: {
      ...mapGetters([
        'processState',
      ])
    },
    methods: {
      onNonceReceived(nonce) {
        this.$store.dispatch('processDonation', nonce)
      },
    },
    watch: {
      processState (newState, oldState) {
        this.$vuetify.goTo(0);
      }
    },
  }
</script>
