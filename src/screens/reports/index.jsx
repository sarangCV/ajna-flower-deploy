import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Select from 'react-select'
import TextInput from '../../components/text-input/textinput';
import DatePicker from 'react-date-picker'

import './style.css'


function Reports() {

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
                    <div className="transport-input-section">
                        <div className="transport-date-container">
                            <div className="departure-date">
                                <h3>From</h3>
                                    <DatePicker
                                        onChange={setStartDate}
                                        value={startDate}
                                        className="date-picker"                    
                                    />
                            </div>
                            <div className="departure-date">
                                <h3>To</h3>
                                    <DatePicker
                                        onChange={setEndDate}
                                        value={endDate}
                                        className="date-picker"                    
                                    />
                            </div>
                             
                        </div>
                        
                    </div>
                    <div className="transport-box-select">
                        <Select 
                            options={options}
                            className="transport-input-select"
                            onChange={ setClientsList }
                            placeholder='Choose a Client Name'
                            isMulti={false}
                        />
                    </div>
                </div>
            </div>
            <div className="reports-footer">
                <div className="button-container">
                    <button><i class="fas fa-check" style={{ marginRight: 10 }}></i>Get Reports</button>
                </div>
            </div>
        </div>
    )
}

export default Reports

