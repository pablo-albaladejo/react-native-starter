import { SET_LOADING, CLEAR_LOADING } from '../actions/loading'

export const initialState = {
};

export default function loading(state = initialState, { type, payload }) {
  switch (type) {

    case SET_LOADING:
      if (payload.isLoading) {
        let obj = {};
        obj[payload.process] = payload.isLoading

        return {
          ...state,
          ...obj,
        };
      } else {
        let obj = { ...state };
        delete obj[payload.process];
        return obj;
      }

    case CLEAR_LOADING:
      return initialState;

    default:
      return state;
  }
}
