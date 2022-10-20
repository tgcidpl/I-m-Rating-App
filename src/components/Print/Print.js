import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddItem } from '../AddItem/'

export function Print() {

    const dataFromStorage = JSON.parse(localStorage.getItem(localStorage.key(0))) || []

    return (
        <div className="PrintArea">
            {dataFromStorage.map((item, i) => (
                <div key={i} className="largeTile List">
                    <h2 className="List-header">{localStorage.key(0)}</h2>
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