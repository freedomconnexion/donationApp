<template>
  <v-container>
    <v-card ref="creditcardcard">
      <v-card-title>
        <span class="display-3">Payment Information...</span>
      </v-card-title>
      <v-card-text>
        <p v-if="paymentProcessingState === 'errored'" class="body-1">
          It looks like there was an error processing your payment. Please check your information and try again.
        </p>
        <hosted-fields ref="hostedfields"
          v-if="braintreeToken"
          wrapperClass="constrain"
          :authToken="braintreeToken" 
          v-on:bthferror="onBraintreeError" 
          v-on:bthfpayload="onBraintreePayload" 
          :collectCardHolderName="false" 
          :collectPostalCode="false" 
          :enableDataCollector="false"
        />
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <v-flex align-content-center>
            <v-btn :disabled="paymentProcessing" flat color="primary" @click.native="onPreviousClicked"><v-icon>chevron_left</v-icon> Previous</v-btn>
            <v-btn :disabled="paymentProcessing" flat color="primary" @click.native="onDonateClicked">Donate</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import HostedFields from 'vue-braintree-hosted-fields'
  export default {
    components: { HostedFields },
    data () {
      return {
        processingPayment: false,
        title: 'Vuetify.js'
      }
    },
    methods: {
      onBraintreeError(error) {
        this.$store.commit('setPaymentProcessingState', 'errored');
        this.$store.commit('serPaymentProcessingErrors', error);
      },
      onBraintreePayload(event) {
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
      braintreeToken() {
        return this.$store.getters.braintreeToken;
      },
      paymentProcessingState() {
        return this.$store.getters.paymentProcessingState;
      },
      paymentProcessing() {
        return this.paymentProcessingState === 'processing';
      }
    },
    watch: {
      paymentProcessingState (newState, oldState) {
        // Our fancy notification (2).
        if(newState === 'errored') {
          this.$refs.hostedfields.createBT();
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
