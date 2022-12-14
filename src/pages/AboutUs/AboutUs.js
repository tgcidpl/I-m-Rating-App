import React from 'react';
import {PageHeader} from "../../components/PageHeader";

export function AboutUs (){

    return (
        <>
            <PageHeader/>
        <div className="largeTile">
            About Us
        </div>
        <div className="smallTile aboutUsText">
            <p>
                Welcome to our App designed for listing and rating your favourite things!
            </p>
            <p>
                Just create a new list (films, books, songs, whatever you like) and keep adding, removing, and rating entries!
            </p>
            <p>
                All your all-time favourites in one place!
            </p>
        </div>
        </>
    )
}
