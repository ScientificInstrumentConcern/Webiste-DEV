import axios from "axios";

const url = `http://localhost:5000/instruments`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addProduct = (code, name, desc, instrumentImage, instrumentDesc) => {
  const instrumentdata = {
    code: code,
    name: name,
    desc: desc,
    itemImg: instrumentImage,
    descImg: instrumentDesc
  };
  const { data } = axios.post(`${url}/add`, instrumentdata, config);
  return data;
};

//get all products
export const getProduct = () => axios.get(url, config);

//get single product
export const getSingleProduct = (id) => axios.get(`${url}/${id}` , config);

export const updateProduct = (id , code, name, desc, instrumentImage, instrumentDesc) => {
  const instrumentdata = {
    code: code,
    name: name,
    desc: desc,
    itemImg: instrumentImage,
    descImg: instrumentDesc
  };
  axios.put(`${url}/${id}`,instrumentdata, config);
};

export const deleteProduct = (id) => {
  axios.delete(`${url}/${id}`, config);
};
