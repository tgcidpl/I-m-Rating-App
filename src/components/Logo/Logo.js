import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.scss';

export function Logo() {
    return <Link className="Menu__button largeTile Logo" to="/">I'm Rating!</Link>
}