import React from 'react'
import './style.css'

function TextInput(props) {

    const inputStyle = {
        width: props.width,
        height: '100%',
        // backgroundColor: 'red'
    }

    return (
        <div style={inputStyle}>
            <input type="text"  class="input" placeholder={props.placeholder}/>
            {props.children}
        </div>
    )
}

export default TextInput;
