import donationAPI from '../../api/donation'

// initial state
const state = {
  amount: null,
  frequency: 'one-time',
  firstName: '',
  lastName: '',
  email: '',
  streetAddress: '',
  city: '',
  state: '',
  zipcode: '',
  braintreeToken: null,
  transactionId: null,
  processState: 'amount',
  paymentProcessingState: 'info',
  paymentProcessingErrors: '',
}

// getters
const getters = {
  amount: state => state.amount,
  frequency: state => state.frequency,
  firstName: state => state.firstName,
  lastName: state => state.lastName,
  email: state => state.email,
  streetAddress: state => state.streetAddress,
  city: state => state.city,
  state: state => state.state,
  zipcode: state => state.zipcode,
  braintreeToken: state => state.braintreeToken,
  transactionId: state => state.transactionId,
  processState: state => state.processState,
  paymentProcessingState: state => state.paymentProcessingState,
  paymentProcessingErrors: state => state.paymentProcessingErrors,
}

// actions
const actions = {
  async processDonation({ state, commit }, nonce) {
    const donation = {
      amount: state.amount,
      frequency: state.frequency
    }
    const info = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      streetAddress: state.streetAddress,
      city: state.city,
      state: state.state,
      zipcode: state.zipcode,
    }

    try {
      const response = await donationAPI.processDonation(nonce, donation, info)
      const data = await response.data;

      if(data.success === true) {
        commit('setTransactionId', data.transactionId);
        commit('setProcessState', 'thank-you');
      }
      else {
        commit('setPaymentProcessingState', 'errored')
      }
    }
    catch(error) {
      commit('setPaymentProcessingState', 'errored')
    }
  },

  async fetchBraintreeToken({ commit, state }) {
    if(state.braintreeToken) return;
    try {
      const token = await donationAPI.fetchToken()
      commit('setBraintreeToken', token)
    }
    catch(error) {
      // Do something more intelligent here?
      // Retry?
    }
  },
}

// mutations
const mutations = {
  setAmount(state, amount) {
    state.amount = amount
  },
  setFrequency(state, frequency) {
    state.frequency = frequency
  },
  nextStage(state) {
    switch(state.processState) {
      case 'amount':
        state.processState = 'info';
        break;
      case 'info':
        state.processState = 'payment';
        break;
    }
  },
  previousStage(state) {
    switch(state.processState) {
      case 'info':
        state.processState = 'amount';
        break;
      case 'payment':
        state.processState = 'info';
        break;
    }
  },
  updateFirstName(state, value) {
    state.firstName = value;
  },
  updateLastName(state, value) {
    state.lastName = value;
  },
  updateEmail(state, value) {
    state.email = value;
  },
  updateStreetAddress(state, value) {
    state.streetAddress = value;
  },
  updateCity(state, value) {
    state.city = value;
  },
  updateState(state, value) {
    state.state = value;
  },
  updateZipcode(state, value) {
    state.zipcode = value;
  },
  setBraintreeToken(state, value) {
    state.braintreeToken = value;
  },
  setTransactionId(state, value) {
    state.transactionId = value;
  },
  setProcessState(state, value) {
    state.processState = value;
  },
  setPaymentProcessingState(state, value) {
    state.paymentProcessingState = value;
  },
  setPaymentProcessingErrors(state, value) {
    state.paymentProcessingErrors = value;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
