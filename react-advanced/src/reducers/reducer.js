export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload,
      };
    case "SET_TERM":
      return {
        ...state,
        term: action.payload,
      };
    default:
      return state;
  }
};
