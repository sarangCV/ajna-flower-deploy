import React, {useEffect, useState} from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { validateUser } from '../../api/auth';
import {icon} from '../../assets/icons/index';

import './style.css';

function SignIn() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const isLogged = window.sessionStorage.getItem('sarangcv');
        isLogged ? history.push('/dashboard') : (<Redirect to={'/'}/>)
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        // history.push('/home')
        await validateUser(email, password)
        .then((res) => {
            // console.log(res)
            const {token} = res;
            if(token) {
                history.push('/dashboard')
            }
            else {
                setError(res)
                // console.log(res)
            }
        })
    }

    return (
        <div className="container">
            <form>
                <div className="form-inner">
                    <img src={icon}/>
                    <h2>Login to continue</h2>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" name="name" onChange={(t) => setEmail(t.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" name="name" onChange={(t) => setPassword(t.target.value)}/>
                    </div>
                    <p>{error}</p>
                    <button className="submit-btn" onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
