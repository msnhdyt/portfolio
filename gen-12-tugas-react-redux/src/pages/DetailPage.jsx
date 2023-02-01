import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../utils/api-request'
import Loading from '../components/Loading'
import parser from 'html-react-parser'
import { showFormattedDate } from '../utils/formatDate'
import { LangContext } from '../contexts/LangProvider'

function DetailPage() {
  const { noteId } = useParams()
  const [note, setNote] = useState(null)
  const { lang } = useContext(LangContext)

  useEffect(() => {
    ;(async function () {
      const tempNote = await getNote(noteId)
      setNote(tempNote)
    })()
  }, [])
  if (!note) {
    return <Loading />
  }

  return (
    <>
      <section className="detail-page">
        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__createdAt">{showFormattedDate(note.createdAt, lang)}</p>
        <hr />
        <article className="detail-page__body">{parser(note.body)}</article>
      </section>
    </>
  )
}

export default DetailPage
