import React from 'react';
import { Link } from 'react-scroll';
import './Header.scss';
import Partners from './Partners/Partners';

function Header() {
    return (
        <header id="header" className="Header">
            <div className="container">
                <div className="wrapper row">
                    <div className="contentLeft col-12 col-md-5">
                        <h1 className="title">It claster academy online.</h1>
                        <div className="text">Приймай участь в грантовій програмі від ІТ Кластер Академії</div>
                        <div className="registrationButton ">
                            <Link
                                className="registrationLink"
                                to="signUp"
                                duration={500}
                                smooth={true}
                                offset={-80}
                            >Реєстрація</Link>
                        </div>
                    </div>
                    <div className="contentRight col-12 col-md-7">
                    </div>
                </div>
            </div>
            <div className="container-fluid ">
                <h2 className="title">Наші партнери</h2>
                <Partners />
            </div>
        </header>
    )
}

export default Header
