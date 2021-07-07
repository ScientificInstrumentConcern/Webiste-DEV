import {
  FETCH_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  CREATE_PRODUCT_FAILED,
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAILED,
  UPDATE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_FAILED
} from "../action-types";

const initialState = {
  error: null,
  data: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { loading: false, error: null, data: action.payload };

    case CREATE_PRODUCT_FAILED:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case FETCH_PRODUCT:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case FETCH_PRODUCT_FAILED:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case UPDATE_PRODUCT:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case UPDATE_PRODUCT_FAILED:
      return {
        loading: false,
        error: action.payload,
        data: [],
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
      case FETCH_SINGLE_PRODUCT_REQUEST:
        return {
          loading: true,
          error: null,
          data: [],
        };
      case FETCH_SINGLE_PRODUCT:
        return {
          loading: false,
          error: null,
          data: action.payload,
        };
      case FETCH_SINGLE_PRODUCT_FAILED:
        return {
          loading: false,
          error: action.payload,
          data: [],
        };

    default:
      return state;
  }
};


export {productReducer};