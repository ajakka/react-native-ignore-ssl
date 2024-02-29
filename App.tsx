import React from 'react';
import {Text} from 'react-native';
import axios from 'axios';

function App(): React.JSX.Element {
  return <Text>Testing API while ignoring SSL</Text>;
}

// const api = axios.create({
//   timeout: 1000,
// });

axios.interceptors.request.use(
  request => {
    console.log('[Request onFulfilled]', JSON.stringify(request, null, 2));
    return request;
  },
  error => {
    console.log('[Request onRejected]', JSON.stringify(error, null, 2));
  },
);

axios.interceptors.response.use(
  response => {
    console.log('[Response onFulfilled]', JSON.stringify(response, null, 2));
    return response;
  },
  error => {
    console.log('[Response onRejected]', JSON.stringify(error, null, 2));
  },
);

export default App;
