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
  import CreditCard from './components/CreditCard';
  import InfoCard from './components/InfoCard';
  import AmountCard from './components/AmountCard';
  import ThankYouCard from './components/ThankYouCard';

  export default {
    components: { AmountCard, InfoCard, CreditCard, ThankYouCard },
    data () {
      return {
        amountStepComplete: false,
        editable: true,
        recurringDonation: false,
        title: 'Vuetify.js'
      }
    },
    computed: {
      currentStep: {
        get() {
          return this.$store.getters.donationPanelState;
        },
        set(value) {
          this.$store.commit('setDonationPanelState', value)
          console.log(`setting value to ${value}`)
        }
      },
      collectingDonations() {
        return this.$store.getters.collectingDonations;
      },
      emergencyMessage() {
        return this.$store.getters.emergencyMessage
      },
      processState() {
        return this.$store.getters.processState;
      }
    },
    methods: {
      onNonceReceived(nonce) {
        console.log("Nonce received")
        this.$store.dispatch('processDonation', nonce)
        this.collectingDonation = false;
      },
      onHeaderClick(event) {
        console.log("header")
        console.log(event)
      }
    },
    mounted: function() {
    }
  }
</script>
