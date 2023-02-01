import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import { useSelector } from 'react-redux'
import './styles/App.css'

function App() {
  const user = useSelector((state) => state.user)
  let router

  if (user) {
    router = createBrowserRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: 'add/:noteId?',
            element: <AddPage />
          },
          {
            path: 'note/:noteId',
            element: <DetailPage />
          }
        ]
      }
    ])
  } else {
    router = createBrowserRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: '',
            element: <LoginPage />
          }
        ]
      }
    ])
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
