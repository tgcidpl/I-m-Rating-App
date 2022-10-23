import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteItem(props) {

    function handleClickDeleteItem() {
        const result = confirm(`Are you sure you want to delete ${props.title}?`);
        if (result) {

            const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
            const listFromStorage = dataFromStorage[props.listName]
            // filter below should splice be replaced
            // listFromStorage.filter(el=>el.title !== props.title)
            listFromStorage.splice(props.index, 1)

            localStorage.setItem('lists', JSON.stringify(dataFromStorage))
            location.reload()
        }
    }

    return (
        <DeleteIcon onClick={handleClickDeleteItem}/>
    )
}