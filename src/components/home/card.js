import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './styles.css'

function Card(props) {
    const history = useHistory();

    const handleNavigation = () => history.push(`${props.navigate}`)

    return (
            <div className="card-container" onClick={handleNavigation}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        
    )
}

export default Card
