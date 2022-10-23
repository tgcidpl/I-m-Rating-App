import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteItem(props) {

function handleClickDelete() {
    console.log(props.title)
    console.log(props.index)
    console.log(props.listName)

    const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
    const listFromStorage = dataFromStorage[props.listName]
    // filter below should splice be replaced
    // listFromStorage.filter(el=>el.title !== props.title)
    listFromStorage.splice(props.index, 1)

    localStorage.setItem('lists', JSON.stringify(dataFromStorage))
    location.reload()
}

    return (
        <DeleteIcon onClick={handleClickDelete}/>
    )
}