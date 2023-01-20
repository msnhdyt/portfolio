import React from "react"

function Form({form, isEdit, onFormSubmitHandler, onFormEditHandler, handleInput}){

  return <>
    <form onSubmit={isEdit ? onFormEditHandler : onFormSubmitHandler}>
      <label>
        Id
        <input required type="text" value={form.id} onChange={(event) => handleInput("id", event.target.value)}/>
      </label>
      <label>
        Title
        <input required type="text" value={form.title} onChange={(event) => handleInput("title", event.target.value)}/>
      </label>
      <label>
        Rating
        <input required type="number" value={form.rating} onChange={(event) => handleInput("rating", event.target.value)}/>
      </label>
      <label>
        Description
        <textarea required cols="30" rows="10" value={form.description} onChange={(event) => handleInput("description", event.target.value)}></textarea>
      </label>
      <label>
        Price
        <input type="number" value={form.price} onChange={(event) => handleInput("price", event.target.value)}/>
      </label>
      <button>{isEdit ? "Update" : "Add"}</button>
    </form>
  </>
}

export default Form