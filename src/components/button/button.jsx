import React from 'react'

function Button(props) {
    return (
        <div className="button-container">
            <button onClick={props.addBoxes}><i class="fas fa-plus" style={{ marginRight: 10 }}></i>Add box</button>
            <button onClick={props.onSubmit}><i class="fas fa-check" style={{ marginRight: 10 }}></i>Submit</button>
        </div>
    )
}

export default Button
