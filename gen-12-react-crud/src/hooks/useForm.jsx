import React, { useState } from 'react'

function useForm(defaultValue) {
  const [form, setForm] = useState(defaultValue)
  const handleInput = (key, value) => {
    setForm({ ...form, [key]: value })
  }
  const resetForm = () => {
    setForm(defaultValue)
  }
  return { form, handleInput, resetForm, setForm }
}

export default useForm
