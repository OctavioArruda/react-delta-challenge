import React, { FC } from 'react';
import './styles.css';

interface Props {
    onButtonClick: () => void;
}

const Navbar: FC<Props> = ({ onButtonClick }) => {
    return(
        <header>
            <div className="container">
                <a href="" className="" id="logo">
                    Logo
                </a>
                <button className="navbar-button" onClick={onButtonClick}>
                    <span className="navbar-button__bars"></span>
                </button>
            </div>
        </header>
    )
}

export default Navbar;