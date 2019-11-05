import { ON_TOAST_OPEN, ON_TOAST_CLOSE } from '../../actions/ui/toast'

const initialState = {
  visible: false,
  data: {}
};

export default function toast(state = initialState, { type, payload }) {
  switch (type) {
    case ON_TOAST_OPEN:
      return {
        ...state,
        ...payload,
      };
    case ON_TOAST_CLOSE:
      return initialState;

    default:
      return state;
  }
}
