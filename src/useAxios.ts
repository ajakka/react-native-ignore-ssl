import React from 'react';
import axios from 'axios';

export default function useAxios() {
  React.useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data', {
          cancelToken: cancelTokenSource.token,
        });
        console.log('data', JSON.stringify(response.data));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('canceled', error.message);
        } else {
          console.log('error', error);
        }
      } finally {
        console.log('finally');
      }
    };

    fetchData();

    return () => void cancelTokenSource.cancel('unmounted');
  }, []);
}
