import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/images/logo/academy2.svg';

import './Navbar.scss';


function Navbar(props) {
    return (
        <section className="Navbar">
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <nav className="items">
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="header"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >Головна</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="aboutUs"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >Про нас</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="grantProgram"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >Грантова програма</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="programPlan"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >Програма</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="signUp"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >Реєстрація</Link></div>
                        <div className="item">
                            <Link
                                className="itemLink"
                                activeClass="active"
                                to="courses"
                                duration={500}
                                smooth={true}
                                offset={-80}

                            >Курси програмування</Link></div>

                    </nav>
                </div>


            </div>

        </section>
    )
}

export default Navbar;


