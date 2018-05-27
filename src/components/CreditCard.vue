<template>
  <v-container>
    <hosted-fields
      wrapperClass="constrain"
      authToken="sandbox_7vqkj4hn_mf8q3dgpmrqmw6qz" 
      v-on:bthferror="onBraintreeError" 
      v-on:bthfpayload="onBraintreePayload" 
      :collectCardHolderName="false" 
      :collectPostalCode="false" 
      :enableDataCollector="false"
    ></hosted-fields>
    <v-btn @click="onSubmitClick">Submit</v-btn>
  </v-container>
</template>

<script>
  import HostedFields from 'vue-braintree-hosted-fields'
  export default {
    components: { HostedFields },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    methods: {
      onBraintreeError() {
        console.log('an error');
      },
      onBraintreePayload(event) {
        console.log('a payload');
        console.log(event)
        this.$emit('nonceReceived', event)
      },
      onSubmitClick() {
        this.$emit('tokenize');
        console.log('submitting credit card');
      }
    },
    mounted: function() {
      console.log('I am mounted');
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
