import React from 'react'
import aboutStyles from './About.module.css'
import AboutImage from '../../images/About.svg'
import Tick from '../../images/Tick.svg'
function About() {
    return (
        <div className={aboutStyles.aboutContainer}>
            <div className={aboutStyles.aboutSection}>
            <div className={aboutStyles.textBox}>
                <div className={aboutStyles.textContainer}>
                    <p className={aboutStyles.hashtag}>#GroceryDeliveredSafely</p>
                    <h1 className={aboutStyles.MainText}>Hyenically <br/> Packed , <br/> Safely Delivered</h1>
                    <button className={aboutStyles.Button}>Learn More</button>
                </div>
            </div>
            <div className={aboutStyles.imageArea}>
                <img src={AboutImage} className={aboutStyles.AboutImage} alt="Delivery Guy"/>
            </div>
        </div>
        <div className={aboutStyles.aboutRow}>
            <div className={aboutStyles.aboutCol}>
                <img src={Tick} alt=""/>
                <p>Zero touch delivery options</p>
            </div>
            <div className={aboutStyles.aboutCol}>
                <img src={Tick} alt=""/>
                <p>Regular cleaning of warehouses</p>
            </div>
            <div className={aboutStyles.aboutCol}>
                <img src={Tick} alt=""/>
                <p>Fever screening of all executives</p>
            </div>
        </div>
        </div>
    )
}

export default About
