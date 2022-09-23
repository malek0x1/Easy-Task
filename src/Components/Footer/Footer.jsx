import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-wrapper container">
                <img className='footer-logo' src="./images/footer-logo.png" alt="" />
                <div className="footer-body">
                    <div className="footer-left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores aliquam dignissimos saepe placeat asperiores ipsum quidem. Explicabo, exercitationem aspernatur.</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-top">
                            <img src="./images/location-ico.png" alt="" />
                            <h5>Location Icon MAIN ROAD, BUILDING NAME, COUNTRY</h5>
                        </div>
                        <div className="footer-right-bottom">
                            <img src="./images/email-ico.png" alt="" />
                            <h5>info@companyname.com</h5>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© COMPANY NAME 2020. ALL RIGHTS RESERVED.</p>
                <div className="social-icons">
                    <div className="social-icon">
                        <span className="material-symbols-outlined">
                            whatshot
                        </span>
                    </div>
                    <div className="social-icon">
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                    </div>
                    <div className="social-icon">
                        <span className="material-symbols-outlined">
                            whatshot
                        </span>
                    </div>
                    <div className="social-icon">
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer