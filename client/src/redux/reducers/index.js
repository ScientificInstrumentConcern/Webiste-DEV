import { combineReducers } from 'redux';

import {contactReducer} from './Contact'
import {productReducer} from './ProductReducer'
import {singleproductReducer} from './SingleProductReducer'
import {enquiryReducer} from './Enquiry.js'

const rootReducer = combineReducers({
    contact : contactReducer,
    product : productReducer,
    singleProduct : singleproductReducer,
    enquiry: enquiryReducer
})

export default rootReducer;