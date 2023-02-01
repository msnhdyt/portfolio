import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { FaSave } from 'react-icons/fa'
import { LangContext } from '../contexts/LangProvider'
import { useContext } from 'react'

function DraftEditor({ title, onTitleChangeHandler, editorState, setEditorState, onFormSubmitHandler }) {
  const { lang } = useContext(LangContext)
  return (
    <form onSubmit={onFormSubmitHandler}>
      <label className="draft-editor__title">
        {lang === 'id' ? 'Judul' : 'Title'}
        <input required type="text" value={title} onChange={onTitleChangeHandler} placeholder={lang === 'id' ? 'tulis judul di sini ...' : 'write your title ...'} />
      </label>
      <div className="draft-editor__body">
        <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      </div>
      <button className="save-button button-fixed" title={lang === 'id' ? 'simpan' : 'save'}>
        <FaSave />
      </button>
    </form>
  )
}

export default DraftEditor
