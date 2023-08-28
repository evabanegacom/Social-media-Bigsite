import React from 'react';
import { Link, NavLink,  useNavigate } from 'react-router-dom';

const Navbar = () => {
    // const navigate = useNavigate();
    // setTimeout(()=>{
        
    //     navigate('/About')
    // }, 2000)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link className="brand-logo">Poke'Times</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to ="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;