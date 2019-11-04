import { ON_MODAL_OPEN, ON_MODAL_CLOSE } from '../../actions/ui/modal'

const initialState = {
  visible: false,
};

export default function modal(state = initialState, { type, payload }) {
  switch (type) {
    case ON_MODAL_OPEN:
      return {
        ...state,
        ...payload,
      };
    case ON_MODAL_CLOSE:
      return initialState;

    default:
      return state;
  }
}
