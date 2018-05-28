<template>
    <v-container>
      <p class="display-1">I want to give...</p>
      <donation-amount-bar :currentAmount="amount" :buttonAmounts="donationAmounts" @amountChanged="onAmountChange" />    
      <v-switch :input-value="monthlyDonation" label="Monthly" @change="onFrequencyChange"></v-switch>
      <p v-show="errorPresent" class="error">Please be sure to select a donation amnount greater than $10</p>
      <v-btn color="primary" @click.native="onSubmitClicked"><v-icon>chevron-left</v-icon>Continue</v-btn>
      <v-btn >Cancel</v-btn>
    </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DonationAmountBar from './DonationAmountBar';
  export default {
    components: {
      DonationAmountBar
    },
    data () {
      return {
        errorPresent: false,
        title: 'Vuetify.js'
      }
    },
    computed: {
      donationAmounts() {
        if(this.monthlyDonation === true) {
          return [5,10,20,100]
        }
        return [25,50,100,1000];
      },
      monthlyDonation() {
        return this.frequency === 'monthly';
      },
      ...mapGetters([
      'amount',
      'frequency',
    ])
    },
    methods: {
      onFrequencyChange(event) {
        this.$store.commit('setFrequency', event ? 'monthly' : 'one-time')
      },
      onSubmitClicked() {
        if(this.amount && this.amount > 10) {
          this.$store.commit('nextStage');
        }
        else {
          this.errorPresent = true;
          //alert("choose amount")
        }
      },
      onAmountChange(amount) {
        this.$store.commit('setAmount', amount);
      },
    },
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
