import React, { useEffect, useState } from "react"
import "./style/App.css"
import { addProduct, deleteProduct, getAllProducts, updateProduct } from "./utils/api-request"
import Product from "./components/Product"

function App(){
  const [products, setProducts] = useState([])
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

  const onProductDeleteHandler = (id) => {
    deleteProduct(id)
      .then(response => {
        if(!response.error){
          productsStateHandler()
          console.log(response)
        }
      })
  }

  const onProductChangeHandler = (id, product) => {
    updateProduct(id, product)
      .then(response => {
        if(!response.error){
          productsStateHandler()
          console.log(response)
        }
      })
  }

  const onProductAddHandler = (product) => {
    addProduct(product)
      .then(response => {
        if(!response.error){
          productsStateHandler()
          console.log(response)
        }
      })
  }
  return <>
    <button onClick={() => onProductAddHandler({title: "product baru"})}>add</button>
    <h1>Product Catalog</h1>
    <div className="products-list">
      {
        products.map((product) => {
          return <Product key={product.id} 
          {...product} 
          onProductDeleteHandler={onProductDeleteHandler}
          onProductChangeHandler={onProductChangeHandler} />
        })
      }
    </div>
  </>
}

export default App