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
        <v-container red darken-4 v-if="errorPresent">
          <v-layout row wrap align-center>
            <v-flex xs1>
              <v-icon x-large color="white">warning</v-icon>
            </v-flex>
            <v-flex xs11>  
              <p class="subheading white--text">
                Please enter an valid donation amount greater than our minimum donation of $10.00.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider />
        <v-container>
          <v-layout align-center>
            <v-flex class='text-xs-center'>
              <p class="title">
                Please select an amount:
              </p>
            </v-flex>
          </v-layout>
          <donation-amount-bar :currentAmount="amount" :buttonAmounts="donationAmounts" @amountChanged="onAmountChange" />    
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-layout row wrap align-center>
          <v-flex class='text-xs-center'>
            <v-btn round large color="primary" @click.native="onNextClicked">Next <v-icon>chevron_right</v-icon></v-btn>
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
        title: 'AmountCard.vue'
      }
    },
    computed: {
      donationAmounts() {
        return [25, 50, 100, 250, 500, 1000];
      },
      ...mapGetters([
        'amount',
      ])
    },
    methods: {
      onNextClicked() {
        if(!this.errorPresent && this.amount && this.amount >= 10) {
          this.$store.commit('nextStage');
        }
        else {
          this.errorPresent = true;
        }
      },
      onAmountChange(amount, valid) {
        this.$store.commit('setAmount', amount);
        this.errorPresent = !valid;
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
