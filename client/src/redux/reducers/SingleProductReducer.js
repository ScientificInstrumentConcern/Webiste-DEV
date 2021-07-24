import  {FETCH_SINGLE_PRODUCT, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_FAILED} from '../action-constants'

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
                loading: true,
                data: action.payload,
            };
        case FETCH_SINGLE_PRODUCT_FAILED:
            return {
                loading:false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { singleproductReducer };