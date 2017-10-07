import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                {/* Materialize Navbar */}
                <nav className= "blue darken-3">
                    <div className="nav-wrapper">
                        <Link to = "/" className="brand-logo">Customers</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to= "/customers/add">Add Customer</Link></li>
                            <li><Link to="/about">About</Link></li>
                            {/* <li><a href="collapsible.html">JavaScript</a></li> */}
                        </ul>
                    </div>
                </nav>
                </div>
        )
    }

}

export default Navbar;