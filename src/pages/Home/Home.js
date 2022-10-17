import React from "react";
import '../../index.scss';

export function Home() {
    return (
        <div className="largeTile">
            Hello World
            <ul>
                <li className="smallTile">
                    <span>Title</span>
                    <div>**********</div>
                    <a href="http://"></a>
                    <div>image</div>
                    <div>lnk</div>
                    <div>img</div>
                    <div>del</div>
                </li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
                <li className="smallTile">Item</li>
            </ul>
        </div>
    );
}