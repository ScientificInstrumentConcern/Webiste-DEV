import axios from "axios";

const url = `http://localhost:5000/instruments`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addProduct = (code, name, desc, instrumentImage, instrumentDesc) => {
  axios.post(`${url}/add`, {code, name, desc, instrumentImage, instrumentDesc}, config);
};

export const getProduct = () => {
  axios.get(url, config);
};

export const updateProduct = (id) => {
  axios.put(`${url}/${id}`, {}, config);
};

export const deleteProduct = (id) => {
  axios.delete(`${url}/${id}`, config);
};