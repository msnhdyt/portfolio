import React, { useEffect, useState } from "react"
import "./style/App.css"
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./utils/api-request"
import Product from "./components/Product"
import Form from "./components/Form"
import useForm from "./hooks/useForm"

function App(){
  const [products, setProducts] = useState([])
  const {form, handleInput, resetForm, setForm} = useForm({
    id: "",
    title: "",
    rating: 0,
    description: "",
    price: 0
  })

  const [isEdit, setIsEdit] = useState(false)

  const productsStateHandler = () => {
    getAllProducts()
      .then(response => {
        if(!response.error){
          setProducts(response.data)
          console.log("update state")
        } 
      })
  }

  useEffect(() => {
    productsStateHandler()
  }, [])

  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    addProduct(form).then(response => {
      if(!response.error){
        console.log("data submitted")
        console.log(response)
        resetForm()
        productsStateHandler()
      }
    })
  }

  const onFormEditHandler = (event) => {
    event.preventDefault()
    updateProduct(form)
      .then(response => {
        if(!response.error){
          console.log("data updated")
          console.log(response)
          setIsEdit(false)
          productsStateHandler()
          resetForm()
        }
      })
  }

  const onProductDeleteHandler = (id) => {
    deleteProduct(id)
      .then(response => {
        if(!response.error){
          productsStateHandler()
          console.log("data deleted")
          console.log(response)
        }
      })
  }

  const onProductEditHandler = (id) => {
    getProductById(id)
      .then(response => {
        if(!response.error){
          setForm({
            id: response.data.id,
            title: response.data.title,
            rating: response.data.rating,
            description: response.data.description,
            price: response.data.price,
          })
          setIsEdit(true)
        }
      })
  }

  return <>
    <h1>Product Catalog</h1>
    <Form form={form} isEdit={isEdit}
    onFormSubmitHandler={onFormSubmitHandler} 
    onFormEditHandler={onFormEditHandler}
    handleInput={handleInput}/>
    <div className="products-list">
      {
        products.map((product) => {
          return <Product key={product.id} 
          {...product} 
          onProductDeleteHandler={onProductDeleteHandler}
          onProductEditHandler={onProductEditHandler} />
        })
      }
    </div>
  </>
}

export default App