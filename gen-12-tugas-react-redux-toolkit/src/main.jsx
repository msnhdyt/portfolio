import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesProvider from './contexts/NotesProvider'
import ThemeProvider from './contexts/ThemeProvider'
import LangProvider from './contexts/LangProvider'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <LangProvider>
      <ThemeProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </ThemeProvider>
    </LangProvider>
  </Provider>
)
