import React, {useState} from 'react'
import Fab from '../../../components/fab/fab'
import Navbar from '../../../components/navbar/navbar'
import {Link, useHistory} from 'react-router-dom'


function Clients() {

    const [dispatched, setDispatched] = useState(false)
    const [data, setData] = useState([
        {
            id: 100,
            shortName: 'TONY',
            fullName: 'Tony Jacob'
        },
        {
            id: 100,
            shortName: 'XAVI',
            fullName: 'Xavier Alex'
        },
        {
            id: 100,
            shortName: 'BOB',
            fullName: 'Boban Chacko'
        },
        {
            id: 100,
            shortName: 'MAT',
            fullName: 'Mathew Henry'
        },
        {
            id: 100,
            shortName: 'VENU',
            fullName: 'Venu Gopal'
        }
    ])

    const history = useHistory();

    const toggleButton = (status) => {
        if(status != 'available')
            setDispatched(true)
        if(status == 'available')
            setDispatched(false)
    }
    const onClick = () => {
        history.push(`/add-clients`)
    }
    return (
        <>
          <Navbar/>
          <div className="dispatch-content">
              {data && data.map((item) => {
                  return(
                      <div className="dispatch-item" style={{ marginTop: 10, marginBottom: 10 }}>
                          <div className="dispatch-item-top-container">
                            <div className="dispacth-item-date">
                                <h3>{item.shortName}</h3>
                            </div>
                            <div className="dispatch-item-box">
                                <h3>{item.fullName}</h3>
                            </div>
                            <div className="dispatch-item-details" onClick={() => console.log('Details')}>
                                {/* <h3>Details</h3> */}
                                <i className="far fa-trash-alt" style={{fontSize: "20px"}}></i>
                            </div>
                          </div>
                      </div>
                  )
              })}
              <Fab onClick={onClick}/>
          </div>
        </>
    )
}

export default Clients
