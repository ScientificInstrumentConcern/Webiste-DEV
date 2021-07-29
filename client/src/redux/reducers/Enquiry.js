import {POST_ENQUIRY, POST_CONTACTENQUIRY} from '../action-constants'


const initialState = {
    error: null,
    data: [],
};

const enquiryReducer = (state= initialState , action) => {
    switch(action.type){
        case POST_ENQUIRY:
            return{
                data: action.payload,
            };
        case POST_ENQUIRY_FAILED:
            return{
                error: action.payload,
            }
        default:
            return state;    
    }
}

export {enquiryReducer}