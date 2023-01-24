import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
