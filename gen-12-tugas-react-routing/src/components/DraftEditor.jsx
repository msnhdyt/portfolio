import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { FaSave } from 'react-icons/fa'

function DraftEditor({ title, onTitleChangeHandler, editorState, setEditorState, onFormSubmitHandler }) {
  return (
    <form onSubmit={onFormSubmitHandler}>
      <label className="draft-editor__title">
        Title
        <input required type="text" value={title} onChange={onTitleChangeHandler} />
      </label>
      <div className="draft-editor__body">
        <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      </div>
      <button className="save-button button-fixed">
        <FaSave />
      </button>
    </form>
  )
}

export default DraftEditor
