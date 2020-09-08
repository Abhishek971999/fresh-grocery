import React from 'react'
import PartnerStyles from './BecomePartner.module.css'
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
                    <img  src="" alt="Partner Images"/>
                </div>
            </div>
        </div>
    )
}

export default BecomePartner
