import React, { useEffect, useState } from "react"

function useForm(initialValue){
  const [form, setForm] = useState(initialValue)

  const handleInput = (key, value) => {
    setForm({...form, [key]:value})
  }

  const resetForm = function(){
    setForm(initialValue)
  }

  return {form, handleInput, resetForm, setForm}
}

export default useForm