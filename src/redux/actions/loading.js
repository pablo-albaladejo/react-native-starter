export const SET_LOADING = 'SET_LOADING';
export const CLEAR_LOADING = 'CLEAR_LOADING';

export function setLoading(process, isLoading) {
  return {
    type: SET_LOADING,
    payload: {
      process,
      isLoading
    }
  };
}

export function clearLoading() {
  return {
    type: CLEAR_LOADING,
  };
}
