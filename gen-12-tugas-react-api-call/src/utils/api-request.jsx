import axios from "axios"

const BASE_URL = "https://dummyjson.com/products"


const getAllProducts = () => {
  return axios.get(BASE_URL)
    .then(response => {
      return {
        error: false,
        data: response['data']['products']
      }})
    .catch(err => {
      return {
        error: true,
        message: err
      }})
}

const addProduct = (newProduct) => {
  return axios.post(BASE_URL + "/add", newProduct)
    .then(response => {
      return {
        error: false,
        data: response["data"]
      }})
    .catch(err => {
      return {
        error: true,
        message: err
      }})
}

const deleteProduct = (id) => {
  return axios.delete(BASE_URL + "/" + id)
    .then(response => {
      return {
        error: false,
        data: response["data"]
      }})
    .catch(err => {
      return {
        error: true,
        message: err
      }})
}

const updateProduct = (product) => {
  return axios.put(BASE_URL + "/" + product.id, {
    title: product.title,
    rating: product.rating,
    description: product.description,
    price: product.price,
  })
    .then(response => {
      return {
        error: false,
        data: response["data"]
      }})
    .catch(err => {
      return {
        error: true,
        message: err
      }})
}

const getProductById = (id) => {
  return axios.get(BASE_URL + "/" + id)
  .then(response => {
    return {
      error: false,
      data: response["data"]
    }})
  .catch(err => {
    return {
      error: true,
      message: err
    }})
}

export {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getProductById
}