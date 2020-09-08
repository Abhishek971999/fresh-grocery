import React from 'react'
import HeaderStyles from './Header.module.css'
function Header() {
    return (
        <div className={HeaderStyles.headerSection}>
           
            <div className={HeaderStyles.MainBox}>
                <h1 className={HeaderStyles.HeaderText}>Stay Home <span className={HeaderStyles.dash}>&ndash;</span> We'll Deliver</h1>
                <p className={HeaderStyles.HeaderSubText}>Get your groceries delivered in less than an hour</p>
                <div className={HeaderStyles.InputBox}>
                    {/* <i className="fas fa-map-marker-alt" style={{color:"#3BC08B"}}></i> */}
                    <input type="text" placeholder="Search for a location" aria-labelledby="search-location" className={HeaderStyles.Input}/>
                    <button className={HeaderStyles.InputButton}>Search</button>
                    
                </div>
                <div className={HeaderStyles.LocationText}>
                    <ul>
                        <li>NEW YORK</li>
                        <li>LOS ANGELES</li>
                        <li>CHICAGO</li>
                        <li>HOUSTON</li>
                        <li>PHOENIX</li>
                        <li>PHILADELPHIA</li>
                        <li>SAN ANTONIO</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
