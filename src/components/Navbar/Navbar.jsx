import React from 'react'
import './Navbar.css'
import Logo from '../../images/Logo.svg'
function Navbar() {
    return (
        <nav>
        <div className="navWide">
            <div className="wideDiv">
                <a href="#" className="brandName">
                    <img src={Logo} alt=""/>
                </a>
                <div className="navbarLinks">
                    <a href="#" className="login">Login</a>
                    <a href="#" className="signup">Signup</a>
                </div>
            </div>
        </div>
        <div className="navNarrow">
            <div className="mobNav">
                <a href="#" onClick={burgerToggle} className="brandName">
                    <img src={Logo} alt=""/>
                </a>
                <i className="fa fa-bars fa-2x" style={{color:'#3BC08B'}} onClick={burgerToggle}></i>
            </div>
            <div className={`narrowLinks`}>
                <a href="#" onClick={burgerToggle} className="login">Login</a>
                <a href="#" onClick={burgerToggle} className="signup">Signup</a>
            </div>
        </div>
    </nav>
    )
}

const burgerToggle = ()=>{
    let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
}

export default Navbar
