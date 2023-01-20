import React from "react"

function Product({id, title, description, price, rating, thumbnail, onProductDeleteHandler, onProductEditHandler}){
  return <>
    <div className="product">
      <img src={thumbnail} alt="" />
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => onProductEditHandler(id)}>edit</button>
      <button onClick={() => onProductDeleteHandler(id)}>delete</button>
    </div>
  </>
}

export default Product