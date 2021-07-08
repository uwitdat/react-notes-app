import './Note.css'
import React from 'react'
import { deleteNote } from '../../store/actions/noteAction'
import { toggleFav } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import moment from 'moment'


const Note = ({ note }) => {
    const dispatch = useDispatch()

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }

    const toggleFavHandle = () => {
        dispatch(toggleFav(note))
    }

    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border'
    return (
        <div className='flex-contain'>
            <div className='note'>

                <div className='note-icons'>
                    <h5 className='note-title'>{note.title}</h5>

                </div>

                <p className='note-p truncate'>{note.content}</p>
                <p className='note-date'>{moment(note.createdAt.toDate()).fromNow()}</p>
                <div className='note-edit'>
                    <i className='material-icons edit'>edit</i>
                    <i onClick={deleteNoteHandler} className='material-icons trash'>delete</i>
                </div>
                <div className='flex-icon'>
                    <i onClick={toggleFavHandle} className='material-icons heart'>{heartMarkup}</i>
                </div>
            </div>
        </div>
    )
}

export default Note
