import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <div>
                <Link to="/videogames">Home</Link>
                <Link to="/videogames/create">New</Link>
            </div>
        );
    };
};

export default Nav;
