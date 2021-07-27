import React from 'react'
import Card from '../../components/home/card';
import Navbar from '../../components/navbar/navbar';
// import './style.css'

function Master() {
    return (
        <div className="home-container">
            <Navbar/>
            <div className="home-content">
                    <Card 
                        title="Dispatch"
                        description="Manage & cancel dispatches"
                        navigate="/dispatch"
                    />
                    <Card
                        title="Tax & Gst"
                        description="Add & manage gst & taxes company wise"
                        navigate="/dispatches"
                    />
                    <Card
                        title="Items"
                        description="View & Add Items"/>
                    <Card
                        title="Clients"
                        description="Add & View Clients"
                        navigate="/clients"
                        />
            </div>
        </div>
    )
}

export default Master;
