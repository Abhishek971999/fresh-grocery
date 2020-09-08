import React from 'react'
import PartnerStyles from './BecomePartner.module.css'
import Partner1 from '../../images/partner-1.png'
import Partner2 from '../../images/partner-2.png'
import Partner3 from '../../images/partner-3.png'
import Partner4 from '../../images/partner-4.png'
function BecomePartner() {
    return (
        <div className={PartnerStyles.PartnerContainer}>
            <div className={PartnerStyles.PartnerBox}>
                <div className={PartnerStyles.TextBox}>
                    <h1>Become a partner and start earning</h1>
                    <p>You can login and logout whenever you want ! <span className={PartnerStyles.span}>No mandatory timings!</span></p>
                   <div className={PartnerStyles.ButtonBox}>
                    <button className={PartnerStyles.Button}>Become a Partner</button>
                   </div>
                </div>
                <div className={PartnerStyles.imageArea}>
                    <img src={Partner1} alt="Partner 1" className={PartnerStyles.partner1}/>
                    <img  src={Partner2} alt="Partner 2" className={PartnerStyles.mainPartnerImg}/>
                    <img src={Partner3} alt="Partner 3" className={PartnerStyles.partner3}/>
                    <img src={Partner4} alt="Partner 4" className={PartnerStyles.partner4}/>
                </div>
            </div>
        </div>
    )
}

export default BecomePartner
