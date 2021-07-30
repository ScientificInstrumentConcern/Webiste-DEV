import { POST_ENQUIRY, POST_ENQUIRY_FAILED } from '../action-constants';

import { postEnquiry } from '../api/enquiry.js';

/**
 * Action to post contact us enquiry
 */
export const EnquiryAction =
    (name , email , company, country, specification, instrumentName) => async (dispatch) => {
        try {
            const { data } = await postEnquiry(
                name , email , company, country, specification, instrumentName
            );
            dispatch({
                type: POST_ENQUIRY,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: POST_ENQUIRY_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
