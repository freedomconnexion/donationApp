<template>
  <v-container>
    <v-card>
      <donation-card-title
        quote="The question is not whether we can afford to invest in every child; it is whether we can afford not to."
        author="Marian Wright Edelman"
      />
      <v-card-text>
        <h2>Thank you for your donation</h2>
        <p>Thank you very much for your generous gift to Connexion on behalf of Freedom Connexion. We truly value your support for the work we do to provide a safe, fun, enriching environment for children during the summer.</p> 
        <p>This receipt certifies that you have made this donation as a charitable contribution and that you are not receiving any goods or services in return.</p>
        <p>Your donation of {{amount}} is tax deductible to the extent allowed by law.</p>
        <br/>
        <p>Justin Hildebrandt</p>
        <p>Executive Director, Freedom Connexion</p>
        <br/>
        <p>Transaction ID: {{transactionId}}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';
  import DonationCardTitle from './DonationCardTitle';
  export default {
    components: {
      DonationCardTitle,
    },
    data () {
      return {
        title: 'Vuetify.js'
      }
    },
    computed: {
      ...mapGetters([
        'amount',
        'frequency',
        'transactionId'
      ])
    },
  }
</script>
