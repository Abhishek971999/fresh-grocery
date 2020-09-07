import React from 'react'
import SearchStyles from './QuickSearch.module.css'
import Grocery from '../../images/Grocery.svg'
import HomeKitchen from '../../images/HomeKitchen.svg'
import PersonalCare from '../../images/PersonalCare.svg'
import VegetablesFruits from '../../images/VegetablesFruits.svg'
import Beverages from '../../images/Beverages.svg'
function QuickSearch() {
    return (
        <div className={SearchStyles.SearchSection}>
            <div className={SearchStyles.TextBox}>
                <p className={SearchStyles.SubText}>Here's what you need</p>
                <h1 className={SearchStyles.MainText}>Quick Searches</h1>
            </div>
            <div className={SearchStyles.Row}>
                <div className={SearchStyles.Col}>
                    <img src={Grocery} alt="Grocery and Staples"/>
                    <p>Grocery & Staples</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src={VegetablesFruits} alt="Vegetables and Fruits"/>
                    <p>Vegetables & Fruits</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src={PersonalCare} alt="Personal Care"/>
                    <p>Personal Care</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src={HomeKitchen} alt="Home and Kitchen"/>
                    <p>Home & Kitchen</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src={Beverages} alt="Beverages"/>
                    <p>Beverages</p>
                </div>
            </div>
            <div className={SearchStyles.ButtonContainer}>
                <button className={SearchStyles.Button}>Explore More</button>
            </div>
        </div>
    )
}

export default QuickSearch
