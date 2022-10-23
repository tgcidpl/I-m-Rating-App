import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteItem(props) {

function handleClickDelete() {
    console.log(props.title)
    console.log(props.index)
    console.log(props.listName)

    const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
    const listFromStorage = dataFromStorage[props.listName]
    console.log(dataFromStorage)
    console.log(listFromStorage)

}

    return (
        <DeleteIcon onClick={handleClickDelete}/>
    )
}