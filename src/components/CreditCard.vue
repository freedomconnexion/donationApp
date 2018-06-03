<template>
  <v-container>
    <v-card ref="creditcardcard">
      <donation-card-title
        quote="The question is not whether we can afford to invest in every child; it is whether we can afford not to."
        author="Marian Wright Edelman"
      />
      <v-card-text>
        <v-layout row wrap align-center v-if="paymentProcessing">
          <v-flex class="text-xs-center">  
            <p class="display-1">
              Processing your credit card...
            </p>
            <v-progress-circular indeterminate color="primary" size="58"></v-progress-circular>
          </v-flex>
        </v-layout>
        <v-container red darken-4 v-if="paymentProcessingState === 'errored'">
          <v-layout row wrap align-center>
            <v-flex xs1>
              <v-icon x-large color="white">warning</v-icon>
            </v-flex>
            <v-flex xs11>  
              <p class="subheading white--text">
                It looks like there was an error processing your payment. Please check your information and try again.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
        <hosted-fields ref="hostedfields"
          v-if="braintreeToken"
          v-show="!paymentProcessing"
          wrapperClass="constrain"
          :authToken="braintreeToken" 
          v-on:bthferror="onBraintreeError" 
          v-on:bthfpayload="onBraintreePayload" 
          :collectCardHolderName="true" 
          :collectPostalCode="true" 
          :enableDataCollector="false"
        />
      </v-card-text>
      <v-card-actions>
        <v-layout row wrap align-center>
          <v-flex xs3>
            <v-btn v-show="!paymentProcessing" flat color="primary" @click.native="onPreviousClicked"><v-icon>chevron_left</v-icon> Previous</v-btn>
          </v-flex>
          <v-flex xs6 class="text-xs-center">  
            <v-btn round large v-show="!paymentProcessing" color="primary" @click.native="onDonateClicked">Donate ${{amount}}</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import HostedFields from 'vue-braintree-hosted-fields'
  import { mapGetters } from 'vuex';
  import DonationCardTitle from './DonationCardTitle';
  
  export default {
    components: { 
      HostedFields,
      DonationCardTitle,
    },
    data () {
      return {
        title: 'CreditCard.vue'
      }
    },
    methods: {
      onBraintreeError(error) {
        this.$store.commit('setPaymentProcessingState', 'errored');
        this.$store.commit('setPaymentProcessingErrors', error);
      },
      onBraintreePayload(event) {
        console.log(event)
        this.$emit('nonceReceived', event.nonce)
      },
      onPreviousClicked() {
        this.$store.commit('previousStage')
      },
      onDonateClicked() {
        this.$refs.creditcardcard.$emit('tokenize');
        this.$store.commit('setPaymentProcessingState', 'processing');
      }
    },
    computed: {
      paymentProcessing() {
        return this.paymentProcessingState === 'processing';
      },
      ...mapGetters([
        'paymentProcessingState',
        'braintreeToken',
        'amount',
      ])
    },
    watch: {
      paymentProcessingState (newState, oldState) {
        // Work around that vue-hosted-fields destroys the 
        // instance before we know there are no errors from the server.
        if(newState === 'errored') {
          this.$refs.hostedfields.createBT();
          this.$vuetify.goTo(0);
        }
      }
    },
    mounted: function() {
      this.$store.dispatch('fetchBraintreeToken');
    }
  }
</script>

<style>
  label {
    font-size: 16px;
    display: block;
    text-align: left;
    font-weight: bold;
    padding: 0.25rem;
  }

  .input-field {
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    padding: 0.8rem;
    display: inline-block;
    box-shadow: none;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 6px;
    border: 1px solid #dddddd;
    line-height: 1.2;
    background: #fcfcfc;
    margin-top: 0.1rem;
    margin-bottom: 0.8rem;
    background: linear-gradient(to right, white 50%, #fcfcfc 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 300ms ease-in-out;
    font-size: 18px;
    text-align: left;
  }
</style>
