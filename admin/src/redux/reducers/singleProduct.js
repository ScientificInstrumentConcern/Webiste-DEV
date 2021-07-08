import {
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_FAILED,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAILED,
} from "../action-types";

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
    case UPDATE_PRODUCT:
      return {
        data: action.payload,
      };
    case UPDATE_PRODUCT_FAILED:
      return {
        error: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case DELETE_PRODUCT_FAILED:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export { singleproductReducer };
