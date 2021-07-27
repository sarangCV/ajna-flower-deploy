import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/navbar';
import Select from 'react-select'
import TextInput from '../../../components/text-input/textinput';
import DatePicker from 'react-date-picker'

// import './style.css'


function AddClients() {

    const [vehicleNo, setVehicleNo] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [dispatchTime, setDispatchTime] = useState('');
    const [arriveTime, setArriveTime] = useState('');
    const [note, setNote] = useState('');
    const [selectedBoxes, setSelectedBoxes] = useState('');
    const [transportList, setTransportList] = useState([
        {
            // dispatchId: dispatchId,
            vehicleNo: '',
            vehicleType: '',
            contactPerson: '',
            contactNumber: '',
            dispatchTime: '',
            arriveTime: '',
            note: '',
            boxes: ''
            
        }
    ])
    const [date, setDate] = useState(new Date());

    const options = [
        { value: 'VLG', label: 'VLG' },
        { value: 'PLG', label: 'PLG' },
        { value: 'WLG', label: 'WLG' },
      ]

    return (
        <div className="dispatch-container">
            <Navbar />
            <div className="dispatch-content">
                        <div className="transport-box-container">
                            <div className="transport-id-container">
                                <h3>Client Details</h3>
                            </div>
                            
                            <div className="transport-input-section">
                                <TextInput 
                                    width="100%"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="Short Name"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="Email"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="Contact Number"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="Adress"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                    width="100%"
                                    placeholder="Country"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="State"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="City"
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                width="100%"
                                placeholder="Pincode"
                                />
                            </div>
                        </div>
            </div>
            <div className="reports-footer">
                <div className="button-container">
                    <button><i class="fas fa-check" style={{ marginRight: 10 }}></i>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddClients

