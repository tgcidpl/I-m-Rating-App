import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {AddItem} from '../AddItem/'
import Rating from '@mui/material/Rating';
import {DeleteItem} from "../DeleteItem";
import {DeleteList} from "../DeleteList";

export function Print() {
    const dataFromStorageToPrint = JSON.parse(localStorage.getItem("lists"))
    const [active, setActive] = useState(false)

    const handleClickSwitchActive = () => setActive(!active)

    function handleRatingChange(e) {
        const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
        const title = e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText
        const listName = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.firstElementChild.innerText
        const listFromStorage = dataFromStorage[listName]
        const objIndex = listFromStorage.findIndex((obj => obj.title === title));
        listFromStorage[objIndex].rating = +e.target.value
        listFromStorage.sort((a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))
        localStorage.setItem('lists', JSON.stringify(dataFromStorage))
        location.reload()
    }

    return (
        <div className="PrintArea">

            {
                Object.entries(dataFromStorageToPrint).map((list, idx) => {
                    return (
                        <div key={idx} className="largeTile List">
                            <h2 className="List-header">{list[0]}</h2>
                            <ul className="List-items">
                                {list[1].map((item, idx) => {
                                    return (
                                        <li key={idx}
                                            className={`smallTile List-items-item 
                                            ${active ? 'active' : 'inactive'}`}
                                            style={{backgroundImage: `url(${item.imgLink})`}}>
                                            <div className="List-items-item-title">
                                                <h3 className="List-items-item-title__header">{item.title}</h3>
                                                <Button
                                                    sx={{color: '#BE64FF'}}
                                                    className="List-items-item-title__rate"
                                                    onClick={handleClickSwitchActive}
                                                    variant="text">RATE</Button>
                                            </div>
                                            <div className="List-items-item__rating">
                                                <Rating
                                                    value={item.rating} max={10} readOnly={!active} size="large"
                                                    onChange={handleRatingChange}
                                                />
                                            </div>
                                            <p className="List-items-item__author">{item.author}</p>
                                            <a href={item.webLink}
                                               className="List-items-item__webLink">Link!</a>
                                            <div className="List-items-item__footer">
                                                <img className="List-items-item__footer__img"
                                                     src={item.imgLink} alt=""/>
                                                <DeleteItem index={idx} title={item.title} listName={list[0]}/>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                            <AddItem index={idx} listName={list[0]}/>
                            <DeleteList
                                index={idx} listName={list[0]}/>
                        </div>
                    )
                })
            }
        </div>
    )
}