
import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from
    'react-redux-firebase'
import moment from 'moment'



function NoteDetail(props) {
    const id = props.match.params.id
    useFirestoreConnect([{ collection: 'notes', doc: id }])
    const note = useSelector(({ firestore: { data } }) => data.notes &&
        data.notes[id])

    return (
        <div className='flex-contain'>
            <div className='note'>
                <div className='note-icons'>
                    <h5 className='note-title'>{note?.title}</h5>
                </div>
                <p className='note-p'>{note?.content}</p>

                <div className='note-date'>{moment(note?.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    )
}

export default NoteDetail
