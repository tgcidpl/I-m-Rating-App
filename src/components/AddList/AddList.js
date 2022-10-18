import React, {useState} from "react";
import '../../index.scss';


export function AddList() {
    const [listName, setListName] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(10)
    const [webLink, setWebLink] = useState('')
    const [imgLink, setImgLink] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const newList = JSON.parse(localStorage.getItem(`${listName}`)) || []
        const newItem = {
            title: title,
            rating: rating,
            webLink: webLink,
            imgLink: imgLink
        }
        newList.push(newItem)
        localStorage.setItem(`${listName}`, JSON.stringify(newList));
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
                            <label>Title or Name</label>
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

