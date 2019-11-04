export const ON_MODAL_OPEN = 'ON_MODAL_OPEN';
export const ON_MODAL_CLOSE = 'ON_MODAL_CLOSE';

export function onModalOpen(type, data) {
  return {
    type: ON_MODAL_OPEN,
    payload: {
      visible: true,
      type,
      data,
    }
  };
}

export function onModalClose(cb) {
  return {
    type: ON_MODAL_CLOSE,
    payload: {
      cb
    }
  };
}
