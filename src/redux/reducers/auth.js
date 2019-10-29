import { SET_AUTH } from "../actions/auth";

const initialState = {
  jwt: null
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        jwt: payload.jwt
      }

    default:
      return state;
  }
}
