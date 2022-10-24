import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {AddItem} from '../AddItem/'
import Rating from '@mui/material/Rating';
import {DeleteItem} from "../DeleteItem";
import {DeleteList} from "../DeleteList";

export function Print() {

    const dataFromStorageToPrint = JSON.parse(localStorage.getItem("lists"))

    //Object.entries working good, issue was in AddList ([] instead of {})

    const [active, setActive] = useState(false)

    function handleClickSwitchActive() {
        setActive(!active)
    }


    function handleRatingChange(e, value) {
        const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
        // const listFromStorage = dataFromStorage[props.listName]
        console.log(`dataFromStorage`, dataFromStorage)
        console.log(e.target.value)
        value = e.target.value
        console.log(value)
        Rating.value = value
        console.log(Rating.value)
        const title = e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText
        console.log(title)
        const listName = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.firstElementChild.innerText
        console.log(listName)

        // localStorage.setItem('lists', JSON.stringify(dataFromStorage))
        // location.reload()
    }


    return (
        <div className="PrintArea">

            {
                Object.entries(dataFromStorageToPrint).map((list, idx) => {
                    return (
                        <div key={idx} className="largeTile List">
                            <h2 className="List-header">{list[0]}</h2>
                            <ul className="List-items">
                                {/*if sorting option for printing then add .sort((a, b) => b.rating - a.rating) below*/}
                                {list[1].map((item, idx) => {
                                    return (
                                        <li key={idx}
                                            className={`smallTile List-items-item ${active ? 'active' : 'inactive'}`}
                                            style={{backgroundImage: `url(${item.imgLink})`}}>
                                            <div className="List-items-item-title">
                                                <h3 className="List-items-item-title__header">{item.title}</h3>
                                                <Button
                                                    sx={{color: '#BE64FF'}}
                                                    className="List-items-item-title__edit"
                                                    onClick={handleClickSwitchActive}
                                                    variant="text">EDIT</Button>
                                            </div>
                                            <div className="List-items-item__rating">
                                                <Rating
                                                    // className={`${active ? '' : ``}`}
                                                    value={item.rating} max={10} readOnly={!active}
                                                    onChange={handleRatingChange}
                                                />
                                            </div>
                                            <p className="List-items-item__webLink">{item.author}</p>
                                            <a href={item.webLink} className="List-items-item__webLink">Link!</a>
                                            <div><img className="List-items-item__imgLink" src={item.imgLink} alt=""/>
                                            </div>
                                            <DeleteItem index={idx} title={item.title} listName={list[0]}/>
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