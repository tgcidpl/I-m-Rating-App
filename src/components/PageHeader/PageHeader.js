import React from 'react';
import '../../index.scss';
import { Logo } from '../Logo'


export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <div>Menu</div>
            {/*<Menu />*/}
        </header>
    );
}