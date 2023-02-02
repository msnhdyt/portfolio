import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedPage({ children }) {
  const user = useSelector((state) => state.user)
  if (JSON.stringify(user) === '{}') {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedPage
