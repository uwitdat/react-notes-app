export const addNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt: new Date()
            })
            .then(() => {
                console.log('note added successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                console.log('deleted note successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const toggleFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const fav = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: fav
        }).then(() => {
            console.log('toggle fav success')
        }).catch((err) => {
            console.log(err)
        })

    }
}