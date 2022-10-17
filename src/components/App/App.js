import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Layout } from '../Layout';
import { AboutUs } from '../../pages/AboutUs'
import '../../index.scss';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Route>
            </Routes>
        </Router>
    );
}