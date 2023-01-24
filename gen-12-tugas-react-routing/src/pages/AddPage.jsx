import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addNote, updateNote, getNote } from '../utils/api-request'
import DraftEditor from '../components/DraftEditor'
import { EditorState, convertToRaw, convertFromHTML, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

function AddPage() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [title, setTitle] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editNote, setEditNote] = useState('')

  const { noteId } = useParams()
  const navigate = useNavigate()

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  useEffect(() => {
    ;(async function () {
      if (noteId) {
        setIsEdit(true)
        const note = await getNote(noteId)
        setEditNote(note)
        setTitle(note.title)
        const blocksFromHtml = convertFromHTML(note.body)
        const state = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap)
        setEditorState(EditorState.createWithContent(state))
      }
    })()
  }, [])

  const onFormSubmitHandler = async (event) => {
    event.preventDefault()
    const note = {
      title,
      body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      createdAt: editNote.createdAt,
      archived: false
    }
    if (isEdit) {
      await updateNote(noteId, note)
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
        <DraftEditor title={title} onTitleChangeHandler={onTitleChangeHandler} editorState={editorState} setEditorState={setEditorState} onFormSubmitHandler={onFormSubmitHandler} />
      </section>
    </>
  )
}

export default AddPage
