import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import '../../index.scss';


export function AddList() {
    const [listName, setListName] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(10)
    const [webLink, setWebLink] = useState('')
    const [imgLink, setImgLink] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        //below new code

        const dataFromStorage = JSON.parse(localStorage.getItem(`lists`)) || []
        const newList = {}
        newList[listName] = {
            title: title,
            rating: rating,
            webLink: webLink,
            imgLink: imgLink
        }
        const dataToSave = [...dataFromStorage, newList]
        console.log(dataToSave)
        localStorage.setItem('lists', JSON.stringify(dataToSave))

        //below testing code

        // const dataFromStorage = JSON.parse(localStorage.getItem('lists')) || []
        // const newItem = {
        //     listName: listName,
        //     title: title,
        //     rating: rating,
        //     webLink: webLink,
        //     imgLink: imgLink
        // }
        //
        // const dataToSave = [...dataFromStorage, newItem]
        // console.log(dataToSave)
        // localStorage.setItem('lists', JSON.stringify(dataToSave))

        //below original code

        // const newList = JSON.parse(localStorage.getItem(`${listName}`)) || []
        // const newItem = {
        //     title: title,
        //     rating: rating,
        //     webLink: webLink,
        //     imgLink: imgLink
        // }
        // newList.push(newItem)
        // localStorage.setItem(`${listName}`, JSON.stringify(newList));

        navigate('/')

    }

    return (
        <div>
            <h2 className="smallTile">Add your new list with its first entry!</h2>
            <form>
                <div className="largeTile">
                    <label>List name: </label>
                    <input
                        className="smallTile"
                        type="text"
                        required
                        value={listName}
                        onChange={(e) => {
                            setListName(e.target.value);
                        }}/>
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
                            <div>**********</div>
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
                            <button
                                className="List__link largeTile"
                                type="submit"
                                onClick={handleSubmit}>
                                SUBMIT
                            </button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

