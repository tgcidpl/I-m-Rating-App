import React, {useState} from 'react';
import Rating from '@mui/material/Rating';
import '../../index.scss';

export function AddItem() {
    const [listName, setListName] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(5)
    const [webLink, setWebLink] = useState('')
    const [imgLink, setImgLink] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const dataFromStorage = JSON.parse(localStorage.getItem('lists')) || []
        const newItem = {
            listName: listName,
            title: title,
            rating: rating,
            webLink: webLink,
            imgLink: imgLink
        }

        const dataToSave = [...dataFromStorage, newItem]
        console.log(dataToSave)
        localStorage.setItem('lists', JSON.stringify(dataToSave))
        location.reload()
    }

    const [active, setActive] = useState(false)

    function handleClickSwitchActive() {
        setActive(current => !current)
    }

    return (
        <div>
            <button className="smallTile"
                    style={{
                        display: !active ? 'block' : 'none'
                    }}
                onClick={handleClickSwitchActive}>Add Item!</button>
            <form  className="AddItem"
                   style={{
                display: active ? 'block' : 'none'
            }}>
                <div>
                    <ul>
                        <li className="smallTile">
                            <label>Title</label>
                            <input
                                className="smallTile"
                                type="text"
                                required
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}/>
                            <label>Your Initial Rating</label>
                            <div>
                                <Rating value={rating}
                                        onChange={(event, newValue) => {
                                            setRating(newValue)}}
                                        max={10}/>
                            </div>
                            <label>External Webpage Link</label>
                            <input
                                className="smallTile"
                                type="link"
                                value={webLink}
                                onChange={(e) => {
                                    setWebLink(e.target.value);
                                }}/>
                            <label>Image Link</label>
                            <input
                                className="smallTile"
                                type="link"
                                value={imgLink}
                                onChange={(e) => {
                                    setImgLink(e.target.value);
                                }}/>
                        </li>
                    </ul>
                    <button
                        className="List__link largeTile"
                        type="submit"
                        onClick={handleSubmit}>
                        Add
                    </button>
                    <button className="smallTile"
                            style={{
                                display: active ? 'block' : 'none'
                            }}
                            onClick={handleClickSwitchActive}>Hide</button>
                </div>
            </form>
        </div>
    )
}