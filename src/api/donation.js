import axios from 'axios';

export default {
  processDonation(nonce, donation, info) {
    const payload = {
      "donation_info": {
        "amount": donation.amount,
        "frequency": donation.frequency,
      },
      "donor_info": {
        "first_name": info.firstName,
        "last_name": info.lastName,
        "email": info.email,
        "address": {
          "street_address": info.streetAddress,
          "city": info.city,
          "state": info.state,
          "zip": info.zipcode
        }
      },
      "nonce": nonce,
    }
    return axios.post('https://plhky3gted.execute-api.us-east-1.amazonaws.com/dev/Donate', payload);
  },

  async fetchToken() {
    const response = await axios.post('https://plhky3gted.execute-api.us-east-1.amazonaws.com/dev/clientToken')
    const data = await response.data;
    return data.btClientToken;
  }
}
