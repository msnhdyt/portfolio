import React, { useState } from 'react'

function useForm(initialValue) {
  const [form, setForm] = useState(initialValue)
  const handleInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }
  return { form, handleInput }
}

export default useForm
