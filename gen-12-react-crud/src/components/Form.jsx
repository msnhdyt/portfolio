import React from 'react'

function Form({ form, handleInput, onFormSubmitHandler }) {
  return (
    <>
      <form onSubmit={onFormSubmitHandler}>
        <label>
          Title
          <input required type="text" value={form.title} onChange={(event) => handleInput('title', event.target.value)} />
        </label>
        <label>
          Body
          <textarea required type="text" value={form.body} onChange={(event) => handleInput('body', event.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form
