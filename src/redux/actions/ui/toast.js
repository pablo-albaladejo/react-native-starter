export const ON_TOAST_OPEN = 'ON_TOAST_OPEN';
export const ON_TOAST_CLOSE = 'ON_TOAST_CLOSE';

export function onToastOpen(data) {
  return {
    type: ON_TOAST_OPEN,
    payload: {
      visible: true,
      data,
    }
  };
}

export function onToastClose(cb) {
  return {
    type: ON_TOAST_CLOSE,
    payload: {
      cb
    }
  };
}
