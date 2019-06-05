import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <input className="input" type="text" placeholder="Search news"/>
            <button className="button">Standard</button>
            <button className="button">Hot</button>
            <button className="button">All</button>
        </div>
    )
}

export default Header;