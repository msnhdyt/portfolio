import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
import { LangContext } from '../contexts/LangProvider'
import { Link } from 'react-router-dom'
import { BsBook } from 'react-icons/bs'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { lang, toggleLang } = useContext(LangContext)

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [isShowProfile, setIsShowProfile] = useState(false)
  const navigate = useNavigate()

  const onProfileClickHandler = () => {
    setIsShowProfile(!isShowProfile)
  }

  const onAnywhereClickHandler = () => {
    if (isShowProfile) setIsShowProfile(false)
  }

  const onLogoutHandler = () => {
    dispatch({
      type: 'user/set_unauth_user'
    })
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <>
      <header onClick={onAnywhereClickHandler}>
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
        {user && (
          <div className="profile">
            <div className="profile__photo__wrapper" onClick={onProfileClickHandler}>
              <img src={user.image} className="profile__photo" />
            </div>
            {isShowProfile && (
              <div className="profile__info">
                <p>Halo {user.firstName + ' ' + user.lastName}!</p>
                <hr />
                <p>{user.username}</p>
                <p>{user.email}</p>
                <hr />
                <p onClick={onLogoutHandler} className="profile__info__logout">
                  Log out
                </p>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  )
}

export default Header
