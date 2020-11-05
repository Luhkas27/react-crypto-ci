import axios from 'axios';

const apiKey =
  'df759cf94ba3419215d0e3703bd03abe39a5935e7b8c7e08ff7aeda8212ab659';

const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  headers: {
    authorization: `ApiKey ${apiKey}`,
  },
});

export default api;
