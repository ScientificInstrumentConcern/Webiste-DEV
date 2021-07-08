import {
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_FAILED,
} from "../action-types";

const initialState = {
  error: null,
  data: {},
  loading: false,
};

const singleproductReducer = (
  state = {
    error: null,
    data: [],
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case FETCH_SINGLE_PRODUCT:
      return {
        loading: false,
        data: action.payload,
      };
    case FETCH_SINGLE_PRODUCT_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export { singleproductReducer };
