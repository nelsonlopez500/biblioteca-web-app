import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <nav className="navbar">    
                <ul>
                    <li><Link to="/overview">Overview</Link></li>
                    <li><Link to="/reports">Reports</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
            <div className="cards-container">
                <div className="card">
                    <h3>Card 1</h3>
                    <p>Option 1</p>
                </div>
                <div className="card">
                    <h3>Card 2</h3>
                    <p>Option 2</p>
                </div>
                <div className="card">
                    <h3>Card 3</h3>
                    <p>Option 3</p>
                </div>
                <div className="card">
                    <h3>Card 4</h3>
                    <p>Option 4</p>
                </div>
            </div>
        </div>
    );
};

const Overview = () => (
    <div>
        <h2>Overview</h2>
        <p>This is the overview section.</p>
    </div>
);

const Reports = () => (
    <div>
        <h2>Reports</h2>
        <p>This is the reports section.</p>
    </div>
);

const Settings = () => (
    <div>
        <h2>Settings</h2>
        <p>This is the settings section.</p>
    </div>
);

export default Dashboard;