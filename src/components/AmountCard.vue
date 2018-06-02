<template>
  <v-container>
    <v-card>
      <donation-card-title
        quote="The question is not whether we can afford to invest in every child; it is whether we can afford not to."
        author="Marian Wright Edelman"
      />
      <v-card-text>
        <span class="subheading">
          <p>At Freedom Connexion we work to reduce the achivement gap between students from lower and higher income families.</p>
            <p>We do this by engaging some pretty amazing Kindergarten - 5th grade students in a 6-week literacy and STEAM program rooted in the Civil Rights movement.</p>
            <p>We're only able to do this at no cost to the families because of the generosity of <strong>people just like you</strong>.</p>
            <p>Will you join us in bringing this program to our amazing scholars? <strong>Give generously today</strong></p>
        </span>
        <div align="center">
          <donation-amount-bar :currentAmount="amount" :buttonAmounts="donationAmounts" @amountChanged="onAmountChange" />    
          <v-switch v-if="false" :input-value="monthlyDonation" label="Monthly" @change="onFrequencyChange"></v-switch>
          <p v-show="errorPresent" class="error">Please be sure to select a donation amnount greater than $10</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <v-flex align-content-center>
            <v-btn flat color="primary" @click.native="onNextClicked">Next <v-icon>chevron_right</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DonationAmountBar from './DonationAmountBar';
  import DonationCardTitle from './DonationCardTitle';
  export default {
    components: {
      DonationAmountBar,
      DonationCardTitle,
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
        return [10, 25, 50, 100, 150, 200, 500];
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
      onNextClicked() {
        if(this.amount && this.amount >= 10) {
          this.$store.commit('nextStage');
        }
        else {
          this.errorPresent = true;
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
