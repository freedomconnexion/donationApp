<template>
  <v-app>
        <v-jumbotron src="/public/hero.jpg" height="100%">
        <v-layout row wrap>
          <v-flex xs12 height="15px" />
          <v-flex xs12 md6 offset-md5>
            <v-stepper v-show="collectingDonation" v-model="currentStep">
              <v-stepper-header>
                <v-stepper-step step="1" :complete="amountStepComplete" :editable="editable" @click="onHeaderClick">Donation Amount</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2">Information</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">Payment</v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <amount-card @amountSubmitted="onAmountSubmitted"/>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <info-card @infoSubmitted="onInfoSubmitted"/>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <credit-card @nonceReceived="onNonceReceived"/>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-flex>
        </v-layout>
        </v-jumbotron>
    <v-footer fixed app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import CreditCard from './components/CreditCard';
  import InfoCard from './components/InfoCard';
  import AmountCard from './components/AmountCard';

  export default {
    components: { AmountCard, InfoCard, CreditCard },
    data () {
      return {
        amountStepComplete: false,
        currentStep: 1,
        editable: true,
        recurringDonation: false,
        collectingDonation: true,
        title: 'Vuetify.js'
      }
    },
    computed: {
    },
    methods: {
      onAmountSubmitted(event) {
        this.amountStepComplete = true;
        this.currentStep = 2;
        console.log("received amount submitted")
      },
      onInfoSubmitted(event) {
        this.infoStepComplete = true;
        this.currentStep = 3;
        console.log("received info submitted")
      },
      onNonceReceived(event) {
        console.log("Nonce received")
        this.collectingDonation = false;
      },
      onHeaderClick(event) {
        console.log("header")
        console.log(event)
      }

    }
  }
</script>
