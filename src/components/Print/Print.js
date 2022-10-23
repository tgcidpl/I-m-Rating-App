import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddItem } from '../AddItem/'
import Rating from '@mui/material/Rating';
import {DeleteItem} from "../DeleteItem";
import {DeleteList} from "../DeleteList";

export function Print() {

    //below list just for testing, structure provided by Marceli
    const myStructure = {
        "music": [
            {
                title: 'Xabc',
                rating: 8,
                webLink: "www",
                imgLink: "www"
            },
            {
                title: 'Xabc2',
                rating: 8,
                webLink: "www",
                imgLink: "www"
            },
            {
                title: 'Xab3',
                rating: 8,
                webLink: "www",
                imgLink: "www"
            }
        ],
        "tv_shows": [
            {
                title: 'Yxyz',
                rating: 8,
                webLink: "www",
                imgLink: "www"
            },
            {
                title: 'Yxyz2',
                rating: 8,
                webLink: "www",
                imgLink: "www"
            },
            {
                title: 'Yxyz3',
                rating: 8,
                webLink: "www",
                imgLink: "www"
            }
        ]
    }


// const formattedDataFromLocalStorage = [];
// const formattedDataV2 = [];
//         for (let i=0; i<localStorage.length; i++){
//             const key = localStorage.key(i)
//             const list = JSON.parse(localStorage.getItem(key))
//             //POSSIBLE FUTURE ISSUE BELOW WHEN ADDING ITEMS TO LIST!!!!!!!!!!!!!!!!
//             const newList = list[0];
//             newList['listName'] = key
//             formattedDataFromLocalStorage.push(newList);
//
//             formattedDataV2.push(list);
//         }
//         console.log('localStorage', localStorage)
//         console.log('v1',formattedDataFromLocalStorage)
//     console.log('v2',formattedDataV2)

    // code above is for previous attempts of printing before 22 Oct, below new printing based on Marceli's advice

    const dataFromStorageToPrint = JSON.parse(localStorage.getItem("lists"))

    //Object.entries working good, issue was in AddList

    const [active, setActive] = useState(false)
    function handleClickSwitchActive() {
        setActive(!active)
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
                                            className={`smallTile List-items-item ${active ? 'active' : 'inactive'}`}>
                                            <div className="List-items-item-title">
                                                <h3 className="List-items-item-title__header">{item.title}</h3>
                                                <Button
                                                    sx={{color: '#BE64FF'}}
                                                    className="List-items-item-title__edit"
                                                    onClick={handleClickSwitchActive}
                                                    variant="text">EDIT</Button>
                                            </div>
                                            <div className="List-items-item__rating">
                                                <Rating value={item.rating} max={10}/>
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