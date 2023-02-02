import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import './styles/App.css'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedPage from './pages/ProtectedPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: '',
        element: (
          <ProtectedPage>
            <Home />
          </ProtectedPage>
        )
      },
      {
        path: 'add/:noteId?',
        element: (
          <ProtectedPage>
            <AddPage />
          </ProtectedPage>
        )
      },
      {
        path: 'note/:noteId',
        element: (
          <ProtectedPage>
            <DetailPage />
          </ProtectedPage>
        )
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
