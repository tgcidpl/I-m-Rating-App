import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Layout } from '../Layout';
import { Create } from '../../pages/Create'
import { AboutUs } from '../../pages/AboutUs'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Route>
            </Routes>
        </Router>
    );
}