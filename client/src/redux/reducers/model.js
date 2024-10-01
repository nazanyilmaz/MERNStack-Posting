const modalReducer = (state = { model: false }, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
