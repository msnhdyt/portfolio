import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const { form, handleInput } = useForm({
    username: '',
    password: ''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (event) => {
    event.preventDefault()
    const user = await axios.post('https://dummyjson.com/auth/login', form)
    dispatch({
      type: 'user/set_auth_user',
      payload: user.data
    })
    navigate('/')
  }

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
        </form>
      </section>
    </>
  )
}

export default LoginPage
