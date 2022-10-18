import React from "react";
import '../../index.scss';


export function AddList() {

    return (
        <div>
            <h2 className="smallTile">Add your new list with its first entry!</h2>
            <form>
                <div className="largeTile">
                    <label>List name: </label>
                    <input className="smallTile" type="text" required />
                    <ul>
                        <li className="smallTile">
                            <label>Title or Name</label>
                            <input className="smallTile" type="text" required />
                            <label>Your Initial Rating</label>
                            <div>**********</div>
                            <label>External Webpage Link</label>
                            <input className="smallTile" type="link" />
                            <label>Image Link</label>
                            <input className="smallTile" type="link" />
                            <input className="List__link largeTile" type="submit" value="Submit" />
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )

}

