import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Layout } from '../Layout';
import { Create } from '../../pages/Create'
import { AboutUs } from '../../pages/AboutUs'
import { Auth } from '../../pages/Auth'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Auth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Route>
            </Routes>
        </Router>
    );
}