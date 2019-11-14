import { ON_DATEPICKER_OPEN, ON_DATEPICKER_CLOSE } from '../../actions/ui/datepicker'

const initialState = {
  visible: false,
  data: {}
};

export default function modal(state = initialState, { type, payload }) {
  switch (type) {
    case ON_DATEPICKER_OPEN:
      return {
        ...state,
        ...payload,
      };
    case ON_DATEPICKER_CLOSE:
      return initialState;

    default:
      return state;
  }
}
