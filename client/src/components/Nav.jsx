import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/navBar.css'

class Nav extends Component {

    render() {
        return (
            <div className='navBar'>
                <a><Link to="/videogames">Home</Link></a>
                <a><Link to="/videogames/create">Nuevo</Link></a>
            </div>
        );
    };
};

export default Nav;
