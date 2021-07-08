import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Note Slice</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="nav-li"><NavLink to="/favorites">Favorites</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Navbar
