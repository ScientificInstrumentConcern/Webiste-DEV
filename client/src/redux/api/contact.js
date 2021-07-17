import axios from 'axios';

const url = `https://sincon.herokuapp.com/contact`;

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

//post contact info and send mail
export const postContact = (name, email, company, country, city, query) => {
    const contactData = {
        name: name,
        email: email,
        company: company,
        country: country,
        city: city,
        query: query,
    };
    axios.post(url, contactData, config);
};
