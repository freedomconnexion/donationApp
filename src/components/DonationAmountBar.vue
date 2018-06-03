<template>
    <v-container>
      <v-layout row wrap align-center>
        <v-flex sm4 xs2 text-xs-center v-for="amount in buttonAmounts" :key="amount">
          <v-btn large round :outline="amount!==currentAmount" color="primary" :key="amount" :selected="amount===currentAmount" @click="onAmountClicked(amount)">
          ${{amount}}
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center>
        <v-flex sm4 xs6 offset-sm1 offset-xs2 text-xs-center align-center align-content-center>
          <v-text-field
          :value="customAmount"
          type="number"
          placeholder="Other Amount"
          prefix="$"
          width="55"
          @change="onAmountChanged"
        />
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import _ from 'lodash';

export default {
  props: ["currentAmount", "buttonAmounts"],
  data () {
    return {
      title: 'DonationAmountBar.vue'
    }
  },
  computed: {
    customAmount() {
      return _.includes(this.buttonAmounts, this.currentAmount) ? "" : this.currentAmount;
    },
  },
  methods: {
    onAmountClicked(amount) { 
      this.$emit('amountChanged', amount, true);
    },
    onAmountChanged(amount) {
      const re = /^([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$/
      const valid = re.test(amount);

      this.$emit('amountChanged', amount, valid);
    },
    buttonAmountSet(start, end) {
      return _.slice(this.buttonAmounts, start, end);
    },
  }
}
</script>
