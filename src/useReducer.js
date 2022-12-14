export const initialState = { value: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, value: state.value + 1 };
    case "decrease":
      return { ...state, value: state.value - 1 };
    case "multiply":
      return { ...state, value: state.value * 2 };
    case "division":
      return { ...state, value: state.value / 2 };
    case "reset":
      return { ...state, value: 0 };
    default:
      return state;
  }
}
