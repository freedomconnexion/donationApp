<template>
  <v-container>
    <v-card transition="v-slide-x-transition">
      <v-card-title>
        <span class="display-3">Your Info...</span>
        <span class="subheading">Let us know a little about you so we can properly thank you and track your awesome donation.</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="firstName"
          :error-messages="firstNameErrors"
          placeholder="First Name"
          width="55"
        />
        <v-text-field
          v-model="lastName"
          :error-messages="lastNameErrors"
          placeholder="Last Name"
          width="55"
        />
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          placeholder="Email Address"
          width="55"
        />
        <v-text-field
          v-model="streetAddress"
          :error-messages="streetAddressErrors"
          placeholder="Street Address"
          width="55"
        />
        <v-flex>
        <v-text-field
          v-model="city"
          :error-messages="cityErrors"
          placeholder="City"
          width="55"
        />
        <v-select 
          autocomplete
          v-model="state" 
          :error-messages="stateErrors"
          placeholder="State"
          :items="stateAbbreviations" 
        /> 
        <v-text-field
          v-model="zipcode"
          :error-messages="zipcodeErrors"
          placeholder="Zip Code"
          width="9"
        /></v-flex>
      </v-card-text>
      <v-card-actions>
        <v-layout>
          <v-flex align-content-center>
            <v-btn flat color="primary" @click.native="onPreviousClicked"><v-icon>chevron_left</v-icon> Previous</v-btn>
            <v-btn flat color="primary" @click.native="onNextClicked">Next <v-icon>chevron_right</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
  import DonationAmountBar from './DonationAmountBar';
  import { required, minLength, email } from 'vuelidate/lib/validators';
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
        title: 'Vuetify.js',
      }
    },
    validations: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      streetAddress: { required },
      city: { required },
      state: { required },
      zipcode: { required },
    },
    computed: {
      firstName: {
        get() {
          return this.$store.getters.firstName
        },
        set(value) {
          this.$store.commit('updateFirstName', value)
        }
      },
      firstNameErrors() {
        return this.surfaceErrors(this.$v.firstName, "first name");
      },
      lastName: {
        get() {
          return this.$store.getters.lastName
        },
        set(value) {
          this.$store.commit('updateLastName', value)
        }
      },
      lastNameErrors() {
        return this.surfaceErrors(this.$v.lastName, "last name");
      },
      email: {
        get() {
          return this.$store.getters.email
        },
        set(value) {
          this.$store.commit('updateEmail', value)
        }
      },
      emailErrors() {
        const errors = []
        const validatorField = this.$v.email;
        if (!validatorField.$dirty) return errors
        !validatorField.required && errors.push(`Please enter your email address`)
        !validatorField.email && errors.push('Please enter a valid email address')
        return errors
      },
      streetAddress: {
        get() {
          return this.$store.getters.streetAddress
        },
        set(value) {
          this.$store.commit('updateStreetAddress', value)
        }
      },
      streetAddressErrors() {
        return this.surfaceErrors(this.$v.streetAddress, "street address");
      },
      city: {
        get() {
          return this.$store.getters.city
        },
        set(value) {
          this.$store.commit('updateCity', value)
        }
      },
      cityErrors() {
        return this.surfaceErrors(this.$v.city, "city");
      },
      state: {
        get() {
          return this.$store.getters.state
        },
        set(value) {
          this.$store.commit('updateState', value)
        }
      },
      stateErrors() {
        return this.surfaceErrors(this.$v.state, "state");
      },
      zipcode: {
        get() {
          return this.$store.getters.zipcode
        },
        set(value) {
          this.$store.commit('updateZipcode', value)
        }
      },
      zipcodeErrors() {
        return this.surfaceErrors(this.$v.zipcode, "zipcode");
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
      onNextClicked() {
        this.$v.$touch();
        if(!this.$v.$invalid) {
          this.$store.commit('nextStage')
        }
      },
      onPreviousClicked() {
        this.$store.commit('previousStage')
      },
      surfaceErrors(validatorField, friendlyName) {
        const errors = []
        if (!validatorField.$dirty) return errors
        !validatorField.required && errors.push(`Please enter your ${friendlyName}`)
        return errors
      }
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
