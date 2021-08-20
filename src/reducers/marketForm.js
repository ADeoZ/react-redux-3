import { CHANGE_PRODUCT_FORM, RESET_PRODUCT_FORM } from "../actions/actionTypes";

const initial_state = {
  title: '',
  price: '',
  discount: '',
  image: '',
};

export default function marketFormReducer(state = initial_state, action) {
  switch (action.type) {
    case CHANGE_PRODUCT_FORM:
      const { name, value } = action.payload;
      return {...state, [name]: value};
    case RESET_PRODUCT_FORM:
      return initial_state;
    default:
      return state;
  }
}