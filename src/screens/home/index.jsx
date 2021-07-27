import React from 'react'
import Card from '../../components/home/card';
import Navbar from '../../components/navbar/navbar';
import './style.css'

function Home() {
    console.log('homescreen...!!')
    return (
        <div className="home-container">
            <Navbar/>
            <div className="home-content">
                    <Card 
                        title="Add Dispatch"
                        description="Add dispatch items & transport details"
                        navigate="/dispatch"
                    />
                    <Card
                        title="Dispatches"
                        description="View and manage dispatches"
                        navigate="/dispatches"
                    />
                    <Card
                        title="Inventory"
                        description="Add and manage daily expenses"/>
                    <Card
                        title="Accounts"
                        description="Invoice, sales, payments & expenses"/>
                    <Card
                        title="Master"
                        description="Manage, dispatch, tax & more"
                        navigate="/master"
                        />
                    <Card
                        title="Reports"
                        description="Get all reports"
                        navigate="/reports"
                    />
                    <Card
                        title="Add Transport"
                        description="Add Transport details"
                        navigate="/transport-details"
                    />
                    <Card
                        title="Expenses"
                        description="View and add expenses"/>
            </div>
        </div>
    )
}

export default Home;
