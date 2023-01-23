import './styles/App.css'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import useForm from './hooks/useForm'
import { getAllNotes, addNote, updateNote, deleteNote, getNote } from './utils/api-request'
import Note from './components/Note'
import Loading from './components/Loading'

function App() {
  const [notes, setNotes] = useState([])
  const { form, handleInput, resetForm, setForm } = useForm({
    title: '',
    body: ''
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const tempFunc = (async () => {
      setNotes(await getAllNotes())
      setIsLoading(false)
    })()
  }, [])

  const onFormSubmitHandler = async (event) => {
    event.preventDefault()
    const isEdit = !!form.id
    const note = {
      ...form
    }
    if (isEdit) {
      await updateNote(form.id, note)
    } else {
      await addNote({
        ...note,
        createdAt: new Date().toISOString(),
        archived: false
      })
    }
    resetForm()
    setNotes(await getAllNotes())
  }

  const onDeleteHandler = async (id) => {
    await deleteNote(id)
    setNotes(await getAllNotes())
  }

  const onUpdateHandler = async (id) => {
    const note = await getNote(id)
    setForm(note)
  }

  return (
    <>
      <header>
        <h1>My Notes</h1>
      </header>
      <main>
        <section>
          <Form form={form} handleInput={handleInput} onFormSubmitHandler={onFormSubmitHandler} />
        </section>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="note-list">
            {notes.map((note) => {
              return <Note key={note.id} {...note} onDeleteHandler={onDeleteHandler} onUpdateHandler={onUpdateHandler} />
            })}
          </section>
        )}
      </main>
    </>
  )
}

export default App
