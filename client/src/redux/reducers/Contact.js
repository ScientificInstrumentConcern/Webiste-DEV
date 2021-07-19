import {POST_CONTACT, POST_CONTACT_FAILED} from '../action-constants'


const initialState = {
    error: null,
    data: [],
};

const contactReducer = (state= initialState , action) => {
    switch(action.type){
        case POST_CONTACT:
            return{
                data: action.payload,
            };
        case POST_CONTACT_FAILED:
            return{
                error: action.payload,
            }
        default:
            return state;    
    }
}

export {contactReducer}