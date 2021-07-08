import { combineReducers } from "redux";
import {userRegisterReducer, userLoginReducer } from './authReducer'
import {productReducer } from './productReducer'
import {singleproductReducer} from './singleProduct'

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    product:productReducer,
    singleProduct: singleproductReducer
});

export default rootReducer;
