import React, {useState} from 'react'
import './style.css'

function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload();
    }

    return (
        <nav className="navbar-items">
            <h1 className="navbar-logo">Ajna Flowers</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <button className="signout-button-nav" onClick={handleLogout}>Sign Out</button>
            </ul>
            <button className="signout-button">Sign Out</button>
        </nav>
    )
}

export default Navbar;
