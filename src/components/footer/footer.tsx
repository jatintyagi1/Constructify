import './footer.css'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className='footer-upper-wrapper'>
                <div className='footer-about-wrapper'>
                    <div className='footer-about-container'>
                        <h1 className='footer-content-heading'>Who We Are</h1>
                        <ul className='footer-list-container'>
                            <li className='footer-list'>Our Company</li>
                            <li className='footer-list'>Our Businesses</li>
                            <li className='footer-list'>Our Global Presence</li>
                            <li className='footer-list'>Our Unique Capability</li>
                            <li className='footer-list'>Our Innovation Centres</li>
                            <li className='footer-list'>Our Corporate Museum</li>
                            <li className='footer-list'>Our Magazine</li>
                            <li className='footer-list'>Our Blogs</li>
                            <li className='footer-list'>Our Award</li>
                            <li className='footer-list'>Our Corporate Office</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-business-wrapper'>
                    <div className='footer-business-container'>
                        <h1 className='footer-content-heading'>Business</h1>
                        <ul className='footer-list-container'>
                            <li className='footer-list'>Building</li>
                            <li className='footer-list'>Heavy Civil Infrastructure</li>
                            <li className='footer-list'>Constructify GeoStructure</li>
                            <li className='footer-list'>Constructify Smart World</li>
                            <li className='footer-list'>minerals & Metals</li>
                            <li className='footer-list'>Power Transmission & Distribution</li>
                            <li className='footer-list'>Railways</li>
                            <li className='footer-list'>Transportation Infrastructure</li>
                            <li className='footer-list'>Water & Effluent Treatment</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-sustainability-wrapper'>
                    <div className='footer-sustainability-container'>
                        <h1 className='footer-content-heading'>Sustainability</h1>
                        <ul className='footer-list-container'>
                            <li className='footer-list'>ESG at L&T</li>
                            <li className='footer-list'>Green Buildings</li>
                            <li className='footer-list'>Ongoing CSR Partnerships</li>
                            <li className='footer-list'>Education</li>
                            <li className='footer-list'>Skilling</li>
                            <li className='footer-list'>L&Teering</li>
                            <li className='footer-list'>Greening</li>
                            <li className='footer-list'>Health</li>
                            <li className='footer-list'>Trust</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-contact-wrapper'>
                    <div className='footer-contact-social-media-container'>
                        <FontAwesomeIcon className='footer-linkedin-icon' icon={faLinkedin}/>
                        <p className='footer-contact-follow-us-text'>Follow Us</p>
                    </div>
                    <div className='footer-contact-container'>
                        <h1 className='footer-content-heading'>Contact Us</h1>
                        <p>Larsen & Toubro Limited</p>
                        <p>Mount Poonamallee Road,</p>
                        <p>Manapakkam, P.B.No.979,</p>
                        <p>Chennai - 600 089 </p>
                        <p>Toll Free(India): 1800 209 4544</p>
                        <p>Available from: 8 am to 8 pm IST</p>
                        <p>International: +91 22 6752 5899</p>
                        <p>Available from: 2:30 am to 2:30 pm GMT</p>
                        <p>Send us a mail: infodesk@larsentoubro.com /</p>
                        <p>info@lntecc.com</p>
                    </div>
                </div>
            </div>
            {/* Copyright Container */}
            <div className="footer-copyright-wrapper">
                <div className="footer-copyright-container">
                    <p><FontAwesomeIcon icon={faCopyright}/>2024 Constructify. All Right Reserved</p>
                </div>
                <div className="footer-copyright-term-container">
                    <p className='footer-copyright-terms-condition'>Copyright & Terms</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;