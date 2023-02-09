import React, { useState } from 'react'

export default function useInput(initialValue) {
  const [input, setInput] = useState(initialValue)
  const handleInput = (key, value) => {
    setInput({ ...input, [key]: value })
  }
  return [input, handleInput]
}
