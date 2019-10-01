import React from "react";
import SideNavBar from "../components/UI/SideNavBar/SideNavBar";
import { animateScroll as scroll, Link } from "react-scroll";
import Element from "./Element";
import avatar from "../assets/avatar_icon.png";
import close_icon from "../assets/close.png";
import menu_icon from "../assets/menu.png";
class Builder extends React.Component {
  constructor(props) {
    super();

    this.state = {
      display: true,
      displayWidth: window.innerWidth < 700
    };
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  handleMenu = () => {
    this.setState({
      display: true
    });
    var sideNav = document.getElementsByClassName("sideNav")[0];
    sideNav.style.display = "block";
    sideNav.style.width = "30%";
  };
  handleClose = () => {
    var sideNav = document.getElementsByClassName("sideNav")[0];
    sideNav.style.display = "none";
    this.setState({
      display: true
    });
  };
  render() {
    return (
      <div>
        <img
          className="menuToggler"
          style={
            this.state.displayWidth ? (this.state.display ? { display: "block" } : { display: "none" }):{display: "none"}
          }
          onClick={this.handleMenu.bind(this)}
          src={menu_icon}
          alt="menu"
        />
        <div id="toggler-container">
          <SideNavBar>
            <img
              className="avatar-icon"
              src={avatar}
              alt="1"
              onClick={this.scrollToTop}
            />
            <img
              className="close-button"
              src={close_icon}
              onClick={this.handleClose.bind(this)}
            />
            <p>Adelina Vasiliev</p>
            <Link
              href="general"
              to="general"
              className="general"
              spy={true}
              smooth={true}
              duration={500}
            >
              General
            </Link>
            <Link
              href="aboutme"
              to="aboutme"
              className="aboutme"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              href="gallery"
              to="gallery"
              className="gallery"
              spy={true}
              smooth={true}
              duration={500}
            >
              Portfolio
            </Link>
            <Link
              href="services"
              to="services"
              className="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              Services
            </Link>
            <Link
              href="contact"
              to="contact"
              className="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </SideNavBar>
        </div>
        <Element />
      </div>
    );
  }
}

export default Builder;
