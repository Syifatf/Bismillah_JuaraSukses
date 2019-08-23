import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Navbarr from './nav';

class Ba extends React.Component {
    render() {
        const navStyle = {
            color: 'white'
        };

        return (
            <div>
                <nav>
                <ul className="nav-link">
                    <Link style={navStyle} to='/About'>
                        <li>About</li>
                    </Link>

                    <Link to="/Produk" style={navStyle}>
                        <li>Produk</li>
                    </Link>

                    
                
                </ul>
                </nav>
            </div>
        );
    }       
}

export default Ba