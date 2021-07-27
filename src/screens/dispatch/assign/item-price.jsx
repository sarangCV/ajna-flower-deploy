import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/navbar';
import Select from 'react-select'
import TextInput from '../../../components/text-input/textinput';
import DatePicker from 'react-date-picker'

import './style.css'


function ItemPrice() {

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [clientsList, setClientsList] = React.useState();
    
    const options = [
        { value: 'Lotus Flower', label: 'Lotus Flower' },
        { value: 'PLG', label: 'PLG' },
        { value: 'WLG', label: 'WLG' },
      ]
    

    return (
        <div className="dispatch-container">
            <Navbar />
            <div className="dispatch-content">
            
                <div className="transport-box-container">
                    <h3 style={{ marginTop: 5, marginBottom: 5 }}>Assign and calculate price</h3>              
                    <div className="transport-box-select">
                        <Select 
                            options={options}
                            className="transport-input-select"
                            onChange={ setClientsList }
                            placeholder='Choose a Client Name'
                            isMulti={false}
                        />
                    </div>
                    <div className="transport-input-section">
                        <div className="transport-date-container">
                            <div className="item-price-date">
                                <h3>Choose Date</h3>
                                    <DatePicker
                                        onChange={setEndDate}
                                        value={endDate}
                                        className="date-picker"                    
                                    />
                            </div>
                             
                        </div>
                    </div>
                    <div className="find-items-btn-container">
                        {/* <div className="find-items-btn"> */}
                            <button><i class="fas fa-search" style={{ marginRight: 10 }}></i>Find Items</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className="reports-footer">
                <div className="button-container">
                    <button><i class="fas fa-check" style={{ marginRight: 10 }}></i>Submit for Invoice Generation</button>
                </div>
            </div>
        </div>
    )
}

export default ItemPrice

