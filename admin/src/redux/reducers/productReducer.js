import {
    FETCH_PRODUCT,
    CREATE_PRODUCT,
    CREATE_PRODUCT_FAILED,
    FETCH_PRODUCT_FAILED,
    FETCH_PRODUCT_REQUEST,
} from '../action-types';

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
                error: action.payload,
            };
        case FETCH_PRODUCT_REQUEST:
            return {
                loading: true,
            };
        case FETCH_PRODUCT:
            return {
                loading: false,
                error: null,
                data: action.payload,
            };
        case FETCH_PRODUCT_FAILED:
            return {
                error: action.payload,
            };
        default:
            return state;
    }
};

export { productReducer };
