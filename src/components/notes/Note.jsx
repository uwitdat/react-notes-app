import React from 'react'
import './Note.css'

const Note = ({ note }) => {
    return (
        <div className='flex-contain'>
            <div className='note'>

                <div className='note-icons'>
                    <h5 className='note-title'>{note.title}</h5>

                </div>

                <p className='note-p truncate'>{note.content}</p>
                <p className='note-date'>2 days ago</p>
                <div className='note-edit'>
                    <i className='material-icons edit'>edit</i>
                    <i className='material-icons trash'>delete</i>
                </div>
                <div className='flex-icon'>
                    <i className='material-icons heart'>favorite</i>
                </div>
            </div>
        </div>
    )
}

export default Note
