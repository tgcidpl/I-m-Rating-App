import React from 'react';
import { Logo } from '../Logo'
import '../../index.scss';


export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <div>Menu</div>
            {/*<Menu />*/}
        </header>
    );
}