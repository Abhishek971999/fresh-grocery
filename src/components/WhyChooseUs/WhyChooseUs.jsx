import React from 'react'
import ChooseStyles from './WhyChooseUs.module.css'
import nominorder from '../../images/nominorder.svg'
import delivery from '../../images/delivery.svg'
import livetrack from '../../images/livetrack.svg'
function WhyChooseUs() {
    return (
        <div className={ChooseStyles.SearchSection}>
            <div className={ChooseStyles.TextBox}>
                <p className={ChooseStyles.SubText}>Why Choose Fresh Grocery</p>
                <h1 className={ChooseStyles.MainText}>Because we are in it together</h1>
            </div>
            <div className={ChooseStyles.Row}>
                <div className={ChooseStyles.Col}>
                    <img src={nominorder} alt="No Minimum Order"/>
                    <h1>No Minimum Order</h1>
                    <p>No order value restrictions, Order for yourself or your group</p>
                </div>
                <div className={ChooseStyles.Col}>
                    <img src={livetrack} alt="Live Order Tracking"/>
                    <h1>Live Order Tracking</h1>
                    <p>Track your order anytime fromthe store to your doorstep</p>
                </div>
                <div className={ChooseStyles.Col}>
                    <img src={delivery} alt="24 x 7 delivery"/>
                    <h1>24 x 7 delivery</h1>
                    <p>Order anytime, anywhere. Wewill get you delivered</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
