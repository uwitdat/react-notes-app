import React from 'react'
import { updateNote } from '../../store/actions/noteAction'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../customhook/useInput'
import { useHistory } from 'react-router'

const EditForm = () => {
    const note = useSelector((state) => state.note)

    const [title, bindTitle, resetTitle] = useInput(note.title)
    const [content, bindContent, resetContent] = useInput(note.content)

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateNote({ id: note.id, title, content }))
        resetTitle()
        resetContent()
        history.push('/')
    }

    return (

        <div className='section-edit'>
            <form onSubmit={handleSubmit}>
                <h5 className=''>Edit Note: {note.title}</h5>
                <div className="input-field">
                    <input id='note_title' type="text" className="validate" required='true' {...bindTitle} />
                    <label className="active" htmlFor='note_title'>Note Title</label>
                </div>
                <div className='input-field'>
                    <textarea id="note_content" className="materialize-textarea" required='true' {...bindContent}></textarea>
                    <label className="active" htmlFor="note_content">Note Content</label>
                </div>
                <button className='btn'>Update</button>
            </form>
        </div>

    )
}

export default EditForm
