import React, { useEffect, useState } from "react"

function useForm(initialValue){
  const [form, setForm] = useState(initialValue)

  const handleInput = (key, value, inputType) => {
    if(inputType !== "checkbox"){
      setForm({...form, [key]:value})
    }else {
      let updateCheckbox = []
      if(form[key].includes(value)){
        updateCheckbox = form[key].filter((element) => element !== value)
        
      }
      else {
        updateCheckbox = [...form[key], value]
      }
      setForm({...form, [key]:updateCheckbox})
    }
  }

  const resetForm = function(){
    setForm(initialValue)
  }

  return [form, handleInput, resetForm]
}

export default useForm