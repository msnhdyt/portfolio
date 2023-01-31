import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
import { Link, Outlet } from 'react-router-dom'
import { BsBook } from 'react-icons/bs'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/all'

function Root() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <header>
        <h1>
          <Link to="/">
            My Notes
            <BsBook />
          </Link>
        </h1>
        <button className="toggle-theme" onClick={toggleTheme}>
          {theme === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
