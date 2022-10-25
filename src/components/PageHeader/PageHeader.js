import React from 'react';
import { Logo } from '../Logo'
import { Menu } from '../Menu'

export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <Menu />
        </header>
    );
}