import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { animateScroll as scroll } from 'react-scroll';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import GrantProgram from './components/GrantProgram/GrantProgram';
import ProgramPlan from './components/ProgramPlan/ProgramPlan';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BurgerButton from './components/Navbar/BurgerButton/BurgerButton';
import HiddenMenu from './components/Navbar/HiddenMenu/HiddenMenu';

class App extends Component {
  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }
  render() {

    return (
      <div className="App">
        <Navbar
          isMenuOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />

        <BurgerButton
          isMenuOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />
        <HiddenMenu
          isMenuOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />
        <Header />

        <AboutUs />
        <FontAwesomeIcon
          className="icon"
          icon={faArrowCircleUp}
          onClick={() => {
            scroll.scrollToTop({
              duration: 500
            })
          }}
        />
        <Courses />
        <GrantProgram />
        <ProgramPlan />
        <SignUp />
        <Footer />

      </div>
    );
  }
}
export default App;


