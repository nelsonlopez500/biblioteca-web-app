import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard">
            <div className="cards-container">
                <div className="card" onClick={() => handleCardClick('/overview')}>
                    <img src="https://w0.peakpx.com/wallpaper/455/843/HD-wallpaper-dark-blue-triangles-dark-blue.jpg" className="card-img-top" alt="Overview" />
                    <div className="card-body">
                        <h3>Overview</h3>
                        <p>Go to Overview section</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/reports')}>
                    <img src="https://w0.peakpx.com/wallpaper/455/843/HD-wallpaper-dark-blue-triangles-dark-blue.jpg" className="card-img-top" alt="Reports" />
                    <div className="card-body">
                        <h3>Reports</h3>
                        <p>Go to Reports section</p>
                    </div>
                </div>
                <div className="card" onClick={() => handleCardClick('/settings')}>
                    <img src="https://w0.peakpx.com/wallpaper/455/843/HD-wallpaper-dark-blue-triangles-dark-blue.jpg" className="card-img-top" alt="Settings" />
                    <div className="card-body">
                        <h3>Settings</h3>
                        <p>Go to Settings section</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;