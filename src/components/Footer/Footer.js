import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import footerLogo2 from '../../assets/images/logo/academy2.svg';
import './Footer.scss';

function Footer() {
    return (
        <footer id="footer" className="Footer">
            <div className="container">
                <div className=" wrapper  row">
                    <div className=" footerLogo col-12 col-md-6 ">

                        <img src={footerLogo2} alt="logo" />
                    </div>

                    <div className="socials col-12 col-md-6 ">
                        <div className="socialItem">
                            <a className="socialLink" href="https://m.facebook.com/itclusteracademy/" target="blank">
                                <FontAwesomeIcon
                                    className="socialIcon"
                                    icon={faFacebookF}

                                />
                            </a>
                        </div>
                        <div className="socialItem">
                            <a className="socialLink" href="https://www.instagram.com/itcluster_academy/?igshid=pcmue6cyzyu2" target="blank">
                                <FontAwesomeIcon
                                    className="socialIcon"
                                    icon={faInstagram}

                                />
                            </a>
                        </div>
                        <div className="socialItem">
                            <a className="socialLink" href="https://www.linkedin.com/company/it-cluster-academy" target="blank">
                                <FontAwesomeIcon
                                    className="socialIcon"
                                    icon={faLinkedinIn}

                                />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="row ">
                    <div className="infoOnline col-12 col-md-6 ">
                        <div className="title">IT Cluster Academy online</div>
                        <div className="phone">Телефон: +38 (063) 674 12 19</div>
                        <div className="email">Пошта: recruitacademyit@gmail.com</div>
                    </div>
                    <div className="info col-12 col-md-6">
                        <div className="title">IT Cluster Academy</div>
                        <div className="phone">Телефон: +38 (098) 655 45 29</div>
                        <div className="email">Пошта: itcaedu.online@gmail.com</div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;

