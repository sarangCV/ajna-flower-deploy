import React from 'react'
import './style.css'

function Fab({onClick}) {
    return (
        <div className="floating-button" onClick={onClick}>
            <h3>Add a Client</h3>
            <i class="fas fa-plus"></i>
        </div>
    )
}

export default Fab
