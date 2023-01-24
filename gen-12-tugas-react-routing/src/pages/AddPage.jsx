import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import useForm from '../hooks/useForm'
import { addNote, updateNote, getNote } from '../utils/api-request'

function AddPage() {
  const { form, handleInput, resetForm, setForm } = useForm({
    title: '',
    body: ''
  })
  const { noteId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    ;(async function () {
      if (noteId) {
        const note = await getNote(noteId)
        setForm(note)
      }
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
    navigate('/')
  }

  return (
    <>
      <section>
        <Form form={form} handleInput={handleInput} onFormSubmitHandler={onFormSubmitHandler} />
      </section>
    </>
  )
}

export default AddPage
