<template>
    <div>
      <v-layout row>
      <v-flex xs3 v-for="amount in buttonAmountSet(0, 3)" :key="amount">
        <v-btn large round :outline="amount!==currentAmount" color="primary" :key="amount" :selected="amount===currentAmount" @click="onAmountClicked(amount)">
          {{amount}}
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3 v-for="amount in buttonAmountSet(4, 8)" :key="amount">
        <v-btn large round :outline="amount!==currentAmount" color="primary" :key="amount" :selected="amount===currentAmount" @click="onAmountClicked(amount)">
          {{amount}}
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-text-field
          :value="customAmount"
          placeholder="Other Amount"
          prefix="$"
          width="55"
          @change="onAmountChanged"
        />
      </v-flex>
    </v-layout>
    </div>
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
    }
  },
  methods: {
    onAmountClicked(amount) { 
      this.$emit('amountChanged', amount);
    },
    onAmountChanged(amount) {
      this.$emit('amountChanged', parseFloat(amount));
    },
    buttonAmountSet(start, end) {
      return _.slice(this.buttonAmounts, start, end);
    }
  },
}
</script>
