import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Select from 'react-select'
import Navbar from '../../components/navbar/navbar';
import DatePicker from 'react-date-picker'
import './style.css'

function Dispatch() {
    const history = useHistory();
    
    const [count, setCount] = useState(1)
    const [dispatches, setDispatches] = useState([
        {
            id: 'B' + `${1}`.padStart(3, '0'),
            items: [
                {
                    id: 0,
                    value_one: 'PLG',
                    value_two: null
                }
            ]
            
        }
    ])
    const [date, setDate] = useState(new Date());
    const options = [
        { value: 'VLG', label: 'VLG' },
        { value: 'PLG', label: 'PLG' },
        { value: 'WLG', label: 'WLG' },
      ]

    const addBoxes = () => {
        setDispatches([
            ...dispatches ,
             {
                 index: dispatches.length,
                 id: 'B' + `${dispatches.length+1}`.padStart(3, '0'),
                 items: [
                     {
                         id: 0,
                         value_one: 'PLG',
                         value_two: null
                     }
                 ]
            }
        ]);
    }

    const deleteBoxes = (item) => {
        const index = dispatches.indexOf(item);
        const filteredDispatches = dispatches.filter((val) => val != dispatches[index])
        for (let i = 0; i < filteredDispatches.length; i++) {
            // filteredDispatches[i].index = i;
            filteredDispatches[i].id = 'B' + `${i+1}`.padStart(3, '0')
        }
        setDispatches(filteredDispatches)
        console.log(filteredDispatches)
    }
    
    const duplicateBoxes = (item) => {
        const currentIndex = dispatches.indexOf(item)
        const lastIndex = dispatches[currentIndex].items.length-1
        const lastItem = dispatches[currentIndex].items[lastIndex].value_one
        // console.log(lastItem)
        let duplicateItems = [...dispatches]
        duplicateItems[currentIndex].items = [
            ...duplicateItems[currentIndex].items, {
                id: duplicateItems[currentIndex].items.length,
                value_one: lastItem,
                value_two: null
            }
        ]
        setDispatches(duplicateItems);
        // console.log(duplicateItems)
    }

    // STORE ITEM NAME TO THE ARRAY (Eg: VLG)
    const itemNameHandler = (item, itemVal, isParent, childItem) => {
        
        const currentIndex = dispatches.indexOf(item)
        const dispatchCopy = [...dispatches];
        if(isParent) {
            dispatchCopy[currentIndex].items[0].value_one = itemVal.value
        }
        else {
            const index = dispatchCopy[currentIndex].items.indexOf(childItem)
            dispatchCopy[currentIndex].items[index].value_one = itemVal.value;
           
        }
        setCount(count+1)
    }

    const onSubmit = () => history.push('/transport-details')

    console.log(dispatches, date)
    return (
        <div className="dispatch-container">
            <Navbar/>
            
            <div className="dispatch-content">
                <div className="date-container">
                    <h3>Choose a Date</h3>
                    <DatePicker
                        onChange={setDate}
                        value={date}
                        className="date-picker"                    
                    />        
                </div>
            
                {dispatches.map((item) => {
                    // console.log(item.items[0].value_one)
                    return(
                        <div className="box-container" key={item.id}>
                            <div className="inner-box-container">
                                <p>{item.id}</p>
                                <div className="input-container">
                                    <Select 
                                        options={options}
                                        className="dispatch-input-select"
                                        onChange={ (itemVal, itemIndex, isParent=true ) => {itemNameHandler(item, itemVal, isParent)} }
                                        value={{ value: item.items[0].value_one, label: item.items[0].value_one }}
                                    />
                                    <input type="text" placeholder="Enter a quantity"/>
                                </div>
                                <div className="action-icon-container">
                                    <i className="far fa-trash-alt" style={{fontSize: "20px"}} onClick={()=> {deleteBoxes(item)}}></i>
                                    <i className="far fa-clone" style={{fontSize: "20px"}} onClick={() => duplicateBoxes(item)}></i>
                                </div>
                            </div>
                            
                            {item ? item.items.slice(1).map((val) => {
                                return(
                                    <div className="inner-box-container">
                                        <p></p>
                                        <div className="input-container">
                                            <Select options={options}
                                                className="dispatch-input-select"
                                                onChange={ (itemVal, itemIndex, isParent=false ) => {itemNameHandler(item, itemVal, isParent,val )} }
                                                value={{ value: val.value_one, label: val.value_one }}
                                            />
                                            <input type="text" placeholder="Enter a quantity"/>
                                        </div>
                                        <div className="action-icon-container">
                                        </div>
                                    </div>
                                )
                                
                            }) : null}
                        </div>
                    )
                })}
                
            </div>
            {/* <div className="floating-button">
                <i class="fas fa-plus" style={{fontSize: "20px", color: '#fff'}}></i>
            </div> */}
            <div className="dispatch-footer">
                <div className="button-container">
                    <button onClick={addBoxes}><i class="fas fa-plus" style={{ marginRight: 10 }}></i>Add box</button>
                    <button onClick={onSubmit}><i class="fas fa-check" style={{ marginRight: 10 }}></i>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dispatch;