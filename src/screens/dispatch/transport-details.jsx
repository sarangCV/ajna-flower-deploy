import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Select from 'react-select'
import TextInput from '../../components/text-input/textinput';
import DatePicker from 'react-date-picker'

// import './style.css'


function TransportDetails() {

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
    
    const addItem = () => {
        setTransportList([
            ...transportList,
            {
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
    }

    const deleteItem = (item) => {
        const duplicateTransport = [...transportList];
        const currentIndex = duplicateTransport.indexOf(item);
        const filteredTransport = duplicateTransport.filter((val) => val != item)
        setTransportList(filteredTransport)
    }

      console.log(transportList)
    return (
        <div className="dispatch-container">
            <Navbar />
            <div className="dispatch-content">
            {transportList.map((item) => {
                    // console.log(item.items[0].value_one)
                    return(
                        <div className="transport-box-container">
                            <div className="transport-id-container">
                                <h3>D-id: 100</h3>
                                <i className="far fa-trash-alt"  onClick={() => deleteItem(item)}></i>
                            </div>
                            <div className="transport-box-select">
                                <Select 
                                    options={options}
                                    className="transport-input-select"
                                    onChange={ setSelectedBoxes }
                                    placeholder='Select Items'
                                    isMulti={true}
                                    // value={{ value: item.items[0].value_one, label: item.items[0].value_one }}
                                />
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                    width="100%"
                                    placeholder="Contact person / Driver name"
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
                                    width="49%"
                                    placeholder="Vehicle No"    
                                />
                                <TextInput 
                                    width="49%"
                                    placeholder="Vehicle Type"
                                />
                            </div>
                            <div className="transport-input-section">
                                {/* <TextInput 
                                    width="49%"
                                    placeholder="Dispatch Time"
                                > */}
                                <div className="transport-date-container">
                                    <div className="departure-date">
                                        <h3>Departure</h3>
                                        <DatePicker
                                            onChange={setDispatchTime}
                                            value={dispatchTime}
                                            className="date-picker"                    
                                        />   
                                    </div>
                                     <div className="arrival-date">
                                        <h3>Arrival</h3>
                                        <DatePicker
                                            onChange={setArriveTime}
                                            value={arriveTime}
                                            className="date-picker"                    
                                        />
                                     </div>
                                    
                                </div>
                                
                            </div>
                            <div className="transport-input-section">
                                <TextInput 
                                    width="100%"
                                    placeholder="Note"
                                />
                            </div>
                            {/* <input type="text" placeholder="Enter a quantity"/> */}
                        </div>
                    )
                })}
            </div>
            <div className="dispatch-footer">
                <div className="button-container">
                    <button onClick={addItem}><i class="fas fa-plus" style={{ marginRight: 10 }}></i>Add New</button>
                    <button><i class="fas fa-check" style={{ marginRight: 10 }}></i>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default TransportDetails

