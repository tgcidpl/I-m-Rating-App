import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddItem } from '../AddItem/'
import Rating from '@mui/material/Rating';

export function Print() {

const formattedDataFromLocalStorage = [];
const formattedDataV2 = [];
        for (let i=0; i<localStorage.length; i++){
            const key = localStorage.key(i)
            const list = JSON.parse(localStorage.getItem(key))
            //POSSIBLE FUTURE ISSUE BELOW WHEN ADDING ITEMS TO LIST!!!!!!!!!!!!!!!!
            const newList = list[0];
            newList['listName'] = key
            formattedDataFromLocalStorage.push(newList);

            formattedDataV2.push(list);
        }
        console.log('localStorage', localStorage)
        console.log('v1',formattedDataFromLocalStorage)
    console.log('v2',formattedDataV2)

    //CONTINUE WORKING BELOW WITH MAPPING AND ABOVE WITH GETTING DATA FROM LOCAL STORAGE
    //need to properly parse data from LS and print it with Object.entries(formattedData).map
    return (
        <div className="PrintArea">

            { formattedDataFromLocalStorage.map((item, idx) => (
                <div key={idx} className="largeTile List">
                    <h2 className="List-header">{item.listName}</h2>
                    <ul className="List-items">
                        <li className="smallTile List-items-item">
                            <div className = "List-items-item-title">
                                <h3 className="List-items-item-title__header">{item.title}</h3>
                                <Button
                                    sx={{color: '#BE64FF'}}
                                    className="List-items-item-title__edit" variant="text">EDIT</Button>
                            </div>
                            <div className="List-items-item__rating">
                                <Rating value={item.rating} max={10}/>
                            </div>
                            <a href={item.webLink} className="List-items-item__webLink">Link!</a>
                            <div><img className="List-items-item__imgLink" src={item.imgLink} alt=""/></div>
                            <DeleteIcon/>
                        </li>
                    </ul>
                    <AddItem listName={item.listName} />
                </div>
            ))}
        </div>
    )
}