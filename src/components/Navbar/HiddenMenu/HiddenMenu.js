import React from 'react';
import './HiddenMenu.scss';
import { Link } from 'react-scroll';
import Logo from '../../../assets/images/logo/academy.svg'

function HiddenMenu(props) {
    return (
        <div className="HiddenMenu"
            style={props.isMenuOpen ? { transform: "translateX(0)" } : null} onClick={props.toggleMenu}>
            <div className="wrapper" >
                <div className="menu">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <nav className="items">
                        <nav className="items">
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="header"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    onClick={props.toggleMenu}

                                >Головна</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="aboutUs"
                                    duration={500}
                                    smooth={true}
                                    offset={-80}
                                    onClick={props.toggleMenu}

                                >Про нас</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="grantProgram"
                                    duration={500}
                                    smooth={true}
                                    offset={-80}
                                    onClick={props.toggleMenu}

                                >Грантова програма</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="programPlan"
                                    duration={500}
                                    smooth={true}
                                    offset={-80}
                                    onClick={props.toggleMenu}

                                >Програма</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="signUp"
                                    duration={500}
                                    smooth={true}
                                    offset={-80}
                                    onClick={props.toggleMenu}

                                >Реєстрація</Link></div>
                            <div className="item">
                                <Link
                                    className="itemLink"
                                    activeClass="active"
                                    to="courses"
                                    duration={500}
                                    smooth={true}
                                    offset={-80}
                                    onClick={props.toggleMenu}

                                >Курси програмування</Link></div>
                        </nav>
                    </nav>

                </div>
            </div>
        </div >
    )
}

export default HiddenMenu;
