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
import {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct
} from "../api/product";

/****
 * @description: creates a new instrument in the database
 ***/
export const createProduct = (code, name, desc, instrumentImage, instrumentDesc) => async (dispatch) => {

  try {
    const { data } = await addProduct(code, name, desc, instrumentImage, instrumentDesc);
    console.log(data);
    dispatch({
      type: CREATE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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
    console.log(error);
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
    
    const {data} = await getSingleProduct(id);
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
    console.log(error);
  }
};
/**
 * @description: Updates the data of the product
 */
export const UpdateProduct = (id , code, name, desc, instrumentImage, instrumentDesc ) => async (dispatch) => {
  try {
    const { data } = await updateProduct(id , code, name, desc, instrumentImage, instrumentDesc);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
/**
 * @description: Deletes the product
 */
export const DeleteProduct = (id) => async (dispatch) => {
    try {
        const { data } = await deleteProduct(id);
        dispatch({
          type: DELETE_PRODUCT,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: DELETE_PRODUCT_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
}