<template>
  <v-btn :selected="selected" :value="amount" @click.native="onClick">{{amount}}</v-btn>
</template>

<script>
  export default {
    props: ["amount", "selected"],
    data () {
      return {
        title: 'Vuetify.js'
      }
    },
    methods: {
      onClick() {
        this.$emit('click', this.amount)
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
