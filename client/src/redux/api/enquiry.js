import axios from 'axios';

const url = `https://sincon.herokuapp.com/enquiry`;

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

//post enquiry and send mail
export const postEnquiry = (name , email , company, country, specification, instrumentName) =>{
const enquiryData = {
    name: name,
    email: email,
    company: company,
    country: country,
    specification: specification,
    instrumentName: instrumentName
};
    axios.post(url,enquiryData,config);
} 


