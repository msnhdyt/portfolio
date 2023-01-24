import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">My Notes</Link>
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
