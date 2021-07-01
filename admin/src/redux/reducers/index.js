import { combineReducers } from "redux";
import {userRegisterReducer, userLoginReducer } from './authReducer'
import {productReducer} from './productReducer'

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    product:productReducer,
});

export default rootReducer;
