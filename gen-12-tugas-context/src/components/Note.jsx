import React from 'react'
import { showFormattedDate } from '../utils/formatDate'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'

function Note({ id, title, createdAt, body, onDeleteHandler, onUpdateHandler }) {
  const trackPos = (position, id) => {
    localStorage.setItem(
      id,
      JSON.stringify({
        x: position.x,
        y: position.y
      })
    )
  }

  const defaultPos = (id) => {
    if (!localStorage.getItem(id)) return { x: 0, y: 0 }
    return JSON.parse(localStorage.getItem(id))
  }

  const generateColor = (id) => {
    const color = '#' + (Math.random().toString(16) + '000000').substring(2, 8)
    if (!localStorage.getItem(`color${id}`)) {
      localStorage.setItem(`color${id}`, color)
    }
    return localStorage.getItem(`color${id}`)
  }

  return (
    <>
      <Draggable defaultPosition={defaultPos(id)} onDrag={(event, pos) => trackPos(pos, id)}>
        <div className="note-item" style={{ backgroundColor: generateColor(id) }}>
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
      </Draggable>
    </>
  )
}

export default Note
