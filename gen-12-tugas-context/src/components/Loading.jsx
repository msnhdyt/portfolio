import React, { useContext } from 'react'
import { LangContext } from '../contexts/LangProvider'

function Loading() {
  const { lang } = useContext(LangContext)
  return (
    <>
      <div>{lang === 'id' ? 'Memuat data ...' : 'loading ...'}</div>
    </>
  )
}

export default Loading
