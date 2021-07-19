import {POST_CONTACT, POST_CONTACT_FAILED} from '../action-constants'

import {postContact} from '../api'

/**
 * Action to post contact us enquiry
 */
export const contactenquiry = (name, email, company, country, city, query)=> async (dispatch) => {
    try {
        const {data} = await postContact(name, email, company, country, city, query)
        dispatch({
            type: POST_CONTACT,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_CONTACT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}