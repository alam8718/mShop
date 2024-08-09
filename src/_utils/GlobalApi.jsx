const {default: axios} = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:3333/api",
});

const getCategory = () => axiosClient.get("/categories?populate=*");

const getSliders = () =>
  axiosClient.get("/sliders?populate=*").then((res) => {
    // console.log(res.data.data);
    return res.data.data;
  });

const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((res) => {
    // console.log("category list", res.data.data);
    return res.data.data;
  });

const getAllProducts = () =>
  axiosClient.get("/products?populate=*").then((res) => {
    console.log("all products", res.data.data);
    return res.data.data;
  });

const getProductsByCategory = (category) => {
  const encodedCategory = encodeURIComponent(category);
  const url = `/products?filters[categories][name][$eq]=${encodedCategory}&populate=*`;

  return axiosClient.get(url).then((res) => {
    console.log("all products of specific category", res.data.data);
    return res.data.data;
  });
};

export default {
  getCategory,
  getSliders,
  getCategoryList,
  getAllProducts,
  getProductsByCategory,
};
