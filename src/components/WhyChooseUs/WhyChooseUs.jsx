import React from 'react'
import ChooseStyles from './WhyChooseUs.module.css'
import Grocery from '../../images/Grocery.svg'
import HomeKitchen from '../../images/HomeKitchen.svg'
import PersonalCare from '../../images/PersonalCare.svg'
import VegetablesFruits from '../../images/VegetablesFruits.svg'
import Beverages from '../../images/Beverages.svg'
function WhyChooseUs() {
    return (
        <div className={ChooseStyles.SearchSection}>
            <div className={ChooseStyles.TextBox}>
                <p className={ChooseStyles.SubText}>Why Choose Fresh Grocery</p>
                <h1 className={ChooseStyles.MainText}>Because we are in it together</h1>
            </div>
            <div className={ChooseStyles.Row}>
                <div className={ChooseStyles.Col}>
                    <img src={Grocery} alt="Grocery and Staples"/>
                    <h1>No Minimum Order</h1>
                    <p>No order value restrictions, Order for yourself or your group</p>
                </div>
                <div className={ChooseStyles.Col}>
                    <img src={VegetablesFruits} alt="Vegetables and Fruits"/>
                    <h1>No Minimum Order</h1>
                    <p>No order value restrictions, Order for yourself or your group</p>
                </div>
                <div className={ChooseStyles.Col}>
                    <img src={PersonalCare} alt="Personal Care"/>
                    <h1>No Minimum Order</h1>
                    <p>No order value restrictions, Order for yourself or your group</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
