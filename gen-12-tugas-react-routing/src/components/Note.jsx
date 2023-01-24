import React from 'react'
import { showFormattedDate } from '../utils/formatDate'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'

function Note({ id, title, createdAt, body, onDeleteHandler, onUpdateHandler }) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <h3 className="note-item__content__title">
            <Link to={`/note/${id}`}>{title}</Link>
          </h3>
          <p>{showFormattedDate(createdAt)}</p>
          <article className="note-item__content__body">{parser(body)}</article>
        </div>
        <div className="note-item__button-container">
          <button className="note-item__button" onClick={() => onUpdateHandler(id)}>
            {' '}
            <AiFillEdit />{' '}
          </button>
          <button className="note-item__button" onClick={() => onDeleteHandler(id)}>
            {' '}
            <AiFillDelete />{' '}
          </button>
        </div>
      </div>
    </>
  )
}

export default Note
