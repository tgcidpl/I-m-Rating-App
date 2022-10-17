import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.scss';

export function Logo() {
    return <Link className="Logo largeTile" to="/">I'm Rating!</Link>
}