import { useState, useCallback } from 'react';

export function useError(initialState) {
  const [error, setError] = useState(initialState);
  const setErrorWithException = useCallback(error => {
    setError(error);
    return Promise.reject(error);
  }, []);

  return [error, setErrorWithException];
}
