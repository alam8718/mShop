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
    console.log("category list", res.data.data);
    return res.data.data;
  });

export default {
  getCategory,
  getSliders,
  getCategoryList,
};
