import React from "react";
import "./Contact.css";
import Facebook from "../../../assets/contact_icons/facebook.png";
import Instagram from "../../../assets/contact_icons/instagram.png";
import Whatsapp from "../../../assets/contact_icons/whatsapp.png";
import Gmail from "../../../assets/contact_icons/gmail.png";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus
        sed turpis tincidunt id aliquet.
      </p>
      <div className="SocialMedia">
        <div className="withImage">
          <a href="https://www.facebook.com/adelina.vasiliev" target="_blank">
            <img src={Facebook} alt="1" />
          </a>
          <a href="https://www.instagram.com/adelinavasiliev/" target="_blank">
            <img src={Instagram} alt="2" />
          </a>
        </div>
        <div className="withoutImage">
          <div className="gmail-div">
            <img src={Gmail} />
            {/* add copy to clipboard */}
            <p>adelinavasiliev@gmail.com</p>
          </div>
          <div className="whatsapp-div">
            <img src={Whatsapp} />
            <p>+7376116515165654</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>ORIGINAL IMAGES by Adelina Vasiliev</p>
        <p>© 2019. All rights reserved | Made by Vadim Doga</p>
      </div>
    </div>
  );
};
export default Contact;
