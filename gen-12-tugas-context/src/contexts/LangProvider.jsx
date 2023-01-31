import { useState, createContext, useEffect } from 'react'

export const LangContext = createContext()

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'id')
  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id')
  }
  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])
  return (
    <>
      <LangContext.Provider
        value={{
          lang,
          toggleLang
        }}
      >
        {children}
      </LangContext.Provider>
    </>
  )
}
