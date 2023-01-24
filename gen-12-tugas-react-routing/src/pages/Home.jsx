import { useEffect, useState } from 'react'
import { getAllNotes, deleteNote, getNote } from '../utils/api-request'
import Note from '../components/Note'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
import { IoIosAddCircle } from 'react-icons/all'

function Home() {
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const tempFunc = (async () => {
      setNotes(await getAllNotes())
      setIsLoading(false)
    })()
  }, [])

  const onDeleteHandler = async (id) => {
    await deleteNote(id)
    setNotes(await getAllNotes())
  }

  const onUpdateHandler = (id) => {
    navigate(`/add/${id}`)
  }

  const onAddButtonClickHandler = () => {
    navigate('/add')
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="note-list">
          {notes.map((note) => {
            return <Note key={note.id} {...note} onDeleteHandler={onDeleteHandler} onUpdateHandler={onUpdateHandler} />
          })}
        </section>
      )}
      <button className="add-button button-fixed" onClick={onAddButtonClickHandler}>
        <IoIosAddCircle />
      </button>
    </>
  )
}

export default Home
