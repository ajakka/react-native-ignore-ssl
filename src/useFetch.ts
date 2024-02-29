import React from 'react';

export default function useFetch() {
  React.useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot', {
          signal: controller.signal,
        });
        const data = await response.json();
        console.log('data', JSON.stringify(data));
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
}
