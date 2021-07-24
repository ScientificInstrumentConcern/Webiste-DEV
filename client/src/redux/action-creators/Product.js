import { getProduct, getSingleProduct } from '../api/product';
import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_FAILED,
    FETCH_SINGLE_PRODUCT_FAILED,
    FETCH_PRODUCT_REQUEST,
    FETCH_SINGLE_PRODUCT_REQUEST,
    FETCH_SINGLE_PRODUCT
} from '../action-constants';


/**
 * @description: Views all the product from database
 */
 export const fetchProduct = () => async (dispatch) => {
    dispatch({
        type: FETCH_PRODUCT_REQUEST,
    });
    try {
        const { data } = await getProduct();
        dispatch({
            type: FETCH_PRODUCT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

/**
 *
 * @description: Views single the product from database
 * @param {string} id
 *
 */
 export const fetchSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_SINGLE_PRODUCT_REQUEST,
        });

        const { data } = await getSingleProduct(id);
        dispatch({
            type: FETCH_SINGLE_PRODUCT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_SINGLE_PRODUCT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};