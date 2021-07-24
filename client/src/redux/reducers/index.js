import { combineReducers } from 'redux';

import {contactReducer} from './Contact'
import {productReducer} from './ProductReducer'
import {singleproductReducer} from './SingleProductReducer'

const rootReducer = combineReducers({
    contact : contactReducer,
    product : productReducer,
    singleProduct : singleproductReducer
})

export default rootReducer;