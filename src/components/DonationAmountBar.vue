<template>
    <div>
      <v-layout row>
      <v-flex xs12>
        <v-btn large :outline="amount!==currentAmount" color="primary" v-for="amount in buttonAmounts" :key="amount" :selected="amount===currentAmount" @click="onAmountClicked(amount)">
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
      title: 'Vuetify.js'
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
    onClick() {
      this.$emit('click', this.amount)
    },
  },
  mounted: function() {
    console.log('I am mounted');
  }
}
</script>
