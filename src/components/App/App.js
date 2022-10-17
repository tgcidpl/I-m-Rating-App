import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../index.scss';

export function App() {
    return (
        <div className="largeTile">
            Hello World
            <ul>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
            </ul>
        </div>
    );
}
