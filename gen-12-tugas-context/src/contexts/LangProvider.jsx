import { useState, createContext } from 'react'

export const LangContext = createContext()

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('id')
  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id')
  }
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
