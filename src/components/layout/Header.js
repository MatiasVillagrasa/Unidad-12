import React from 'react'
import logo from '../../assets/img/Logo.png'

const Header = (props) => {
    return (
        <div>
            <a href="https://workingsrl.com/"><img src={logo} alt="Logo"></img></a>
        </div>
    );
}

export default Header;