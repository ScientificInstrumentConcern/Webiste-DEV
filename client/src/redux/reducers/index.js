import { combineReducers } from 'redux';

import {contactReducer} from '../reducers/Contact'

const rootReducer = combineReducers({
    contact : contactReducer
})

export default rootReducer;