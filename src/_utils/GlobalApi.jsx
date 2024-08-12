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

const registerUser = (username, email, password) =>
  axiosClient.post("auth/local/register", {
    username,
    email,
    password,
  });

const signInUser = (email, password) =>
  axiosClient.post("auth/local", {
    identifier: email,
    password,
  });

const addToCart = (data, jwt) =>
  axiosClient.post("/user-carts", data, {
    headers: {
      Authorization: "Bearer" + jwt,
    },
  });

const getCartItems = (userId, jwt) =>
  axiosClient
    .get(`/user-carts?filters[userId][$eq]=${userId}&populate=*`, {
      headers: {
        Authorization: "Bearer" + jwt,
      },
    })
    .then((res) => {
      console.log(res.data.data);
      const data = res.data.data;
      const cartItemList = data.map((item, index) => {
        return {
          id: item?.id,
          name: item?.attributes?.products?.data[0]?.attributes?.name,
          amount: item?.attributes?.amount,
          quantity: item?.attributes?.quantity,
          image: item?.attributes?.products?.data[0]?.attributes?.productImage,
          actualPrice: item?.attributes?.products?.data[0]?.attributes?.taka,
          product: item?.attributes?.products?.data[0]?.id,
        };
      });
      return cartItemList;
    });

const deleteCartIItem = (id, jwt) =>
  axiosClient.delete("/user-carts/" + id, {
    headers: {
      Authorization: "Bearer" + jwt,
    },
  });

const createOrder = (data, jwt) =>
  axiosClient.post("/orders", data, {
    headers: {
      Authorization: "Bearer" + jwt,
    },
  });

const getMyOrders = (userId, jwt) => {};

export default {
  getCategory,
  getSliders,
  getCategoryList,
  getAllProducts,
  getProductsByCategory,
  registerUser,
  signInUser,
  addToCart,
  getCartItems,
  deleteCartIItem,
  createOrder,
  getMyOrders,
};
