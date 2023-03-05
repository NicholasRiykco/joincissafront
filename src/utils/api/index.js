const axios = require('axios');
const URL = 'http://localhost:3050'; 

export async function postReview(params) {
  const endpoint = URL + '/api/review';
  console.log(params);
  const dataFetched = await axios({
    url: endpoint,
    method: 'POST',
    data: {
        body: params
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(dataFetched);
  return dataFetched;
}