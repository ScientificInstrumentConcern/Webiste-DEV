import axios from 'axios';

const url = `https://sincon.herokuapp.com/instruments`;

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};


//get all products
export const getProduct = () => axios.get(url, config);

//get single product
export const getSingleProduct = (id) => axios.get(`${url}/${id}`, config);



