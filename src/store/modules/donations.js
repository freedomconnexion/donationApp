//import donation from '../../api/donation'

// initial state
const state = {
  amount: null,
  frequency: 'one-time',
  donationPanelState: 1,
  firstName: 'Justin',
  lastName: 'Hildebrandt',
  email: 'jhilde@gmail.com',
  streetAddress: '42 Regent Street',
  city: 'Cambridge',
  state: 'MA',
  zipcode: '02140',
}

// getters
const getters = {
  amount: state => state.amount,
  frequency: state => state.frequency,
  donationPanelState: state => state.donationPanelState,
  firstName: state => state.firstName,
  lastName: state => state.lastName,
  email: state => state.email,
  streetAddress: state => state.streetAddress,
  city: state => state.city,
  state: state => state.state,
  zipcode: state => state.zipcode,
}

// actions
const actions = {
  
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
    state.donationPanelState++;
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
  setDonationPanelState(state, value) {
    state.donationPanelState = value;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
