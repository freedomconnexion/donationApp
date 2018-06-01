import axios from 'axios';
import { promise } from 'when';

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
    console.log('processing donation')
    return axios.post('https://plhky3gted.execute-api.us-east-1.amazonaws.com/dev/Donate', payload);
    //return response
  },

  async fetchToken() {
    const response = await axios.post('https://plhky3gted.execute-api.us-east-1.amazonaws.com/dev/clientToken')
    const data = await response.data;
    console.log(data.btClientToken)
    return data.btClientToken;
  }

  /*
  async theDonation(payload) {
    const response = await axios.get('http://cnn.com')
    console.log("here")
  }
  serializeDonationData() {
        return ({
          "donation_info": {
            "amount": this.state.donationAmount,
            "frequency": this.state.donationFrequency
          },
          "donor_info": {
            "first_name": this.state.donorInfo.firstName,
            "last_name": this.state.donorInfo.lastName,
            "email": this.state.donorInfo.email,
            "phone": this.state.donorInfo.phone,
            "address": {
              "street_address": this.state.donorInfo.address,
              "city": this.state.donorInfo.city,
              "state": this.state.donorInfo.state,
              "zip": this.state.donorInfo.zip
            }
          },
          "nonce": this.state.donationNonce
        })
      }
  
  */
}
