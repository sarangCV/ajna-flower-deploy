import React, {useState} from 'react'
import Navbar from '../../components/navbar/navbar'

function Dispatches() {

    const [dispatched, setDispatched] = useState(false)
    const [data, setData] = useState([
        {
            id: 100,
        },
        {
            id: 101,
        },
        {
            id: 102,
        },
        {
            id: 102,
        },
        {
            id: 102,
        },
        {
            id: 102,
        },
        {
            id: 102,
        },
        {
            id: 102,
        },
        {
            id: 102,
        }
    ])

    const toggleButton = (status) => {
        if(status != 'available')
            setDispatched(true)
        if(status == 'available')
            setDispatched(false)
    }
    return (
        <>
          <Navbar/>
          <div className="dispatch-content">
              <div className="dispatches-toggle-container">
                  <div className="dispatches-tab-button" onClick={() => toggleButton('available')} style={{ backgroundColor: !dispatched ? '#000' : '#fff', color: !dispatched ? '#fff' : '#000'}}>
                    <h3>Available</h3>
                  </div>
                  <div className="dispatches-tab-button" onClick={() => toggleButton('dispatched')} style={{ backgroundColor: !dispatched ? '#fff' : '#000', color: !dispatched ? '#000' : '#fff'}}>
                    <h3>Dispatched</h3>
                  </div>
              </div>
              {data && data.map((item) => {
                  return(
                      <div className="dispatch-item">
                          <div className="dispatch-item-top-container">
                            <div className="dispacth-item-date">
                                <h3>Oct 27</h3>
                            </div>
                            <div className="dispatch-item-box">
                                <h3>10 Boxes</h3>
                            </div>
                            <div className="dispatch-item-details" onClick={() => console.log('Details')}>
                                <h3>Details</h3>
                                <i class="fas fa-info-circle" style={{ marginLeft: 7 }}></i>
                            </div>
                          </div>
                          <div className="dispatch-item-bottom-container">
                              <h3>ASSIGN BOXES TO SELLER</h3>
                          </div>
                      </div>
                  )
              })}
          </div>
        </>
    )
}

export default Dispatches
