import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddItem } from '../AddItem/'

export function Print() {

const formattedDataFromLocalStorage = [];
const formattedDatav2 = [];
        for (let i=0; i<localStorage.length; i++){
            const key = localStorage.key(i)
            const list = JSON.parse(localStorage.getItem(key))
            //POSSIBLE FUTURE ISSUE BELOW WHEN ADDING ITEMS TO LIST!!!!!!!!!!!!!!!!
            const newList = list[0];
            console.log('newList', newList)
            newList['listTitle'] = key
            formattedDataFromLocalStorage.push(newList);
            formattedDatav2.push(list);
        }
        console.log('v1',formattedDataFromLocalStorage)
    console.log('v1',formattedDatav2)

    return (
        <div className="PrintArea">

            {formattedDataFromLocalStorage.map((item, idx) => (
                <div key={idx} className="largeTile List">
                    <h2 className="List-header">{item.listTitle}</h2>
                    <ul className="List-items">
                        <li className="smallTile List-items-item">
                            <div className = "List-items-item-title">
                                <h3 className="List-items-item-title__header">{item.title}</h3>
                                <Button
                                    sx={{color: '#BE64FF'}}
                                    className="List-items-item-title__edit" variant="text">EDIT</Button>
                            </div>
                            <div className="List-items-item__rating">{item.rating}</div>
                            <a href={item.webLink} className="List-items-item__webLink">Link!</a>
                            <div><img className="List-items-item__imgLink" src={item.imgLink} alt=""/></div>
                            <DeleteIcon/>
                        </li>
                    </ul>
                    <AddItem />
                </div>
            ))}
        </div>
    )
}