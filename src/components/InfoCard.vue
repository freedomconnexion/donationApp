<template>
    <v-container>
      <p class="display-1">About me...</p>
      <v-text-field
        v-model="info.firstName"
        placeholder="First Name"
        width="55"
      />
      <v-text-field
        v-model="info.lastName"
        placeholder="Last Name"
        width="55"
      />
      <v-text-field
        v-model="info.email"
        placeholder="Email Address"
        width="55"
      />
      <v-text-field
        v-model="info.address1"
        placeholder="Street Address"
        width="55"
      />
      <v-text-field
        v-model="info.city"
        placeholder="City"
        width="55"
      />
      <v-select v-model="info.state" :items="stateAbbreviations" /> 
      <v-text-field
        v-model="info.zipcode"
        placeholder="Zip Code"
        width="9"
      />
      <v-btn color="primary" @click.native="onSubmitClicked">Continue</v-btn>
      <v-btn >Cancel</v-btn>
    </v-container>
</template>

<script>
  import DonationAmountBar from './DonationAmountBar';
  import _ from 'lodash';
  const stateNames = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ];

  export default {
    components: {
      DonationAmountBar
    },
    data () {
      return {
        info: { 
          firstName: '',
          lastName: '',
          emailAddress: '',
          address: '',
          city: '',
          state: 'MA',
          zipcode: '',
          
        },
        title: 'Vuetify.js',
      }
    },
    computed: {
      donationAmounts() {
        if(this.recurringDonation === true) {
          return [5,10,20,100]
        }
        return [25,50,100,1000];
      },
      stateAbbreviations() {
        return [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ];
      }
    },
    methods: {
      onSubmitClicked() {
        console.log("Submitting")
        this.$emit("infoSubmitted", this.info)
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
