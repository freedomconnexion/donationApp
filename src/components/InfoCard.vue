<template>
    <v-container>
      <p class="display-1">About me...</p>
      <v-text-field
        v-model="firstName"
        :value="firstName"
        placeholder="First Name"
        width="55"
      />
      <v-text-field
        v-model="lastName"
        placeholder="Last Name"
        width="55"
      />
      <v-text-field
        v-model="email"
        placeholder="Email Address"
        width="55"
      />
      <v-text-field
        v-model="streetAddress"
        placeholder="Street Address"
        width="55"
      />
      <v-text-field
        v-model="city"
        placeholder="City"
        width="55"
      />
      <v-select v-model="state" :items="stateAbbreviations" /> 
      <v-text-field
        v-model="zipcode"
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
      firstName: {
        get() {
          console.log('i am getting got')
          return this.$store.getters.firstName
        },
        set(value) {
          this.$store.commit('updateFirstName', value)
        }
      },
      lastName: {
        get() {
          return this.$store.getters.lastName
        },
        set(value) {
          this.$store.commit('updateLastName', value)
        }
      },
      email: {
        get() {
          return this.$store.getters.email
        },
        set(value) {
          this.$store.commit('updateEmail', value)
        }
      },
      streetAddress: {
        get() {
          return this.$store.getters.streetAddress
        },
        set(value) {
          this.$store.commit('updateStreetAddress', value)
        }
      },
      city: {
        get() {
          return this.$store.getters.city
        },
        set(value) {
          this.$store.commit('updateCity', value)
        }
      },
      state: {
        get() {
          return this.$store.getters.state
        },
        set(value) {
          this.$store.commit('updateState', value)
        }
      },
      zipcode: {
        get() {
          return this.$store.getters.zipcode
        },
        set(value) {
          this.$store.commit('updateZipcode', value)
        }
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
        //this.$emit("infoSubmitted", this.info)
        this.$store.commit('nextStage')
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
