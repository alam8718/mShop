const {default: axios} = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:3333/api",
});

const getCategory = () => axiosClient.get("/categories?populate=*");

export default {
  getCategory,
};
