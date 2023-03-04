const axios = require('axios');
const URL = 'http://localhost:8080/GiveUsABreak_war_exploded'; 

export async function postReview(params) {
  const endpoint = URL + '/api/review';
  const dataFetched = await axios({
    url: endpoint,
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(dataFetched);
  return dataFetched;
}