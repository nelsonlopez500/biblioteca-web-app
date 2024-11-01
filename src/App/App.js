import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login.jsx';
import Dashboard from '../pages/dashboard/dashboard.jsx';
import DataLoader from '../components/dataLoader/DataLoader.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/*" element={<DataLoader />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;