import React from 'react'
import {Link} from 'react-router-dom'
import FooterStyles from './Footer.module.css'
import Logo from '../../images/Logo.svg'
function Footer() {
    return (
        <div className={FooterStyles.FooterSection}>
            <div className={FooterStyles.Row}>
                <div className={FooterStyles.Col}>
                    <img src={Logo} alt="Logo"/>
                    <ul>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Help Center</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">English (International)</Link></li>
                    </ul>
                </div>
                <div className={FooterStyles.Col}>
                    <h1>About Us</h1>
                    <ul>
                        <li><Link className={FooterStyles.FooterLinks} to="#">My Account</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Categories</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Cities</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Become a Partner</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Blog</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Careers</Link></li>
                    </ul>
                </div>
                <div className={FooterStyles.Col}>
                    
                    <h1>Questions ?</h1>
                    <ul>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Frequently Asked Questions</Link></li>
                        <li><Link className={FooterStyles.FooterLinks} to="#">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className={FooterStyles.graveYardLinks}>
                <p>© 2020 Appening Infotech Pvt Ltd</p>
                <div className={FooterStyles.centerLinkBox}>
                    <Link to="#" className={FooterStyles.centerLink}>Privacy</Link>
                    <Link to="#" className={FooterStyles.centerLink}>Accesbility</Link>
                    <Link to="#" className={FooterStyles.centerLink}>Terms</Link>
                </div>
                <div className={FooterStyles.icons}>
                    <a target="_blank" aria-label="Instagram" rel="noopener" href=""className={FooterStyles.link} >
                        <i className={`${FooterStyles.instagram} fab fa-instagram fa-lg`}></i>
                    </a>
                    <a target="_blank" aria-label="Facebook" rel="noopener" href=""className={FooterStyles.link} >
                        <i  className={`${FooterStyles.facebook} fab fa-facebook-square fa-lg`}></i>
                    </a>
                    <a target="_blank" aria-label="Twitter" rel="noopener" href=""className={FooterStyles.link} >
                        <i className={`fab fa-twitter fa-lg ${FooterStyles.twitter}`}></i>
                    </a>
                    <a target="_blank" aria-label="Youtube" rel="noopener" href=""className={FooterStyles.link} >
                        <i className={`${FooterStyles.youtube} fab fa-youtube fa-lg`}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
