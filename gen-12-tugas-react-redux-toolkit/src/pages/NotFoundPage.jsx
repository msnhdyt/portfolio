import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../components/Header'

function NotFoundPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <main>
        <div className="error-page">
          <img className="not-found-image" src="\src\assets\pngwing.com_404_2.png" alt="404" />
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
