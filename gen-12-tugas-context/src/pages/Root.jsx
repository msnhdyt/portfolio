import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
import { LangContext } from '../contexts/LangProvider'
import { Link, Outlet } from 'react-router-dom'
import { BsBook } from 'react-icons/bs'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/all'

function Root() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { lang, toggleLang } = useContext(LangContext)

  return (
    <>
      <header>
        <h1>
          <Link to="/">
            My Notes
            <BsBook />
          </Link>
        </h1>
        <div className="header-button">
          <button className="toggle-lang" onClick={toggleLang}>
            {lang === 'id' ? 'en' : 'id'}
          </button>
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
