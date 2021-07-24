import { combineReducers } from 'redux';

import {contactReducer} from './Contact'
import {productReducer} from './ProductReducer'

const rootReducer = combineReducers({
    contact : contactReducer,
    product : productReducer,
    
})

export default rootReducer;