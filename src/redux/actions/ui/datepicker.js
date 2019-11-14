export const ON_DATEPICKER_OPEN = 'ON_DATEPICKER_OPEN';
export const ON_DATEPICKER_CLOSE = 'ON_DATEPICKER_CLOSE';

export function onDatePickerOpen(data) {
  return {
    type: ON_DATEPICKER_OPEN,
    payload: {
      visible: true,
      data,
    }
  };
}

export function onDatePickerClose(cb) {
  return {
    type: ON_DATEPICKER_CLOSE,
    payload: {
      cb
    }
  };
}
