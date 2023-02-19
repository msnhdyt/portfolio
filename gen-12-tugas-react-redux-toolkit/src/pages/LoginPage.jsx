import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../hooks/useForm'
import { useNavigate, Navigate } from 'react-router-dom'
import { getAuthUser } from '../utils/api-request'
import { setAuthUser } from '../store/userSlice'

function LoginPage() {
  const navigate = useNavigate()

  const user = useSelector((state) => state.user)

  const { form, handleInput } = useForm({
    username: '',
    password: ''
  })

  const dispatch = useDispatch()

  const login = async (event) => {
    event.preventDefault()
    const user = await getAuthUser(form)
    dispatch(setAuthUser(user))
    sessionStorage.setItem('authUser', JSON.stringify(user))
    navigate('/')
  }

  if (JSON.stringify(user) !== '{}') return <Navigate to="/" />
  return (
    <>
      <section className="login-page">
        <form className="login-form" onSubmit={login}>
          <label>
            Username
            <input type="text" value={form.username} onChange={(evt) => handleInput('username', evt.target.value)} />
          </label>
          <label>
            Password
            <input type="password" value={form.password} onChange={(evt) => handleInput('password', evt.target.value)} />
          </label>
          <button className="login-form__submit__button">Login</button>
          <p className="credential-src">
            You can use any user's credentials from{' '}
            <a className="credential-link" href="https://dummyjson.com/users" target="_blank">
              here
            </a>
          </p>
        </form>
      </section>
    </>
  )
}

export default LoginPage
