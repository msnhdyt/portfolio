import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsBook } from 'react-icons/bs'

function Root() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">
            My Notes
            <BsBook />
          </Link>
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
