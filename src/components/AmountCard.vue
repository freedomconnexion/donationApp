<template>
    <v-container>
      <p class="display-1">I want to give...</p>
      <donation-amount-bar :currentAmount="donationAmount" :buttonAmounts="buttonAmounts" @amountChanged="onAmountChange" />    
      <v-switch :input-value="recurringDonation" label="Monthly" @change="onFrequencyChange"></v-switch>
      <v-btn color="primary" @click.native="onSubmitClicked">Continue</v-btn>
      <v-btn >Cancel</v-btn>
    </v-container>
</template>

<script>
  import DonationAmountBar from './DonationAmountBar';
  export default {
    components: {
      DonationAmountBar
    },
    data () {
      return {
        donationAmount: null,
        buttonAmounts: [5,10,15,20],
        recurringDonation: false,
        customDonationAmount: null,
        title: 'Vuetify.js'
      }
    },
    computed: {
      donationAmounts() {
        if(this.recurringDonation === true) {
          return [5,10,20,100]
        }
        return [25,50,100,1000];
      }
    },
    methods: {
      onFrequencyChange(event) {
        this.recurringDonation = event
        this.donationAmount = null
        console.log(event)
      },
      onSubmitClicked() {
        console.log("Submitting")
        this.$emit("amountSubmitted", this.donationAmount)
      },
      onAmountClicked(amount) {
        console.log("Click amount")
        this.donationAmount = amount;
        this.customDonationAmount = null;
      },
      onAmountChange(amount) {
        console.log(amount)
        this.donationAmount = amount;
      },
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
