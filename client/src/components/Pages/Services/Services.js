import React from "react";
import "./Services.css";
import Icon0 from "../../../assets/service_icons/1.png";
import Icon1 from "../../../assets/service_icons/2.png";
import Icon2 from "../../../assets/service_icons/3.png";
import Icon3 from "../../../assets/service_icons/4.png";
import Icon4 from "../../../assets/service_icons/5.png";
import Icon5 from "../../../assets/service_icons/6.png";
const Services = () => {
  return (
    <div className="Services">
      <h1>Services</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus
        sed turpis tincidunt id aliquet. Lectus quam id leo in vitae turpis
        massa. Purus non enim praesent elementum facilisis leo vel fringilla
        est.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <img src={Icon0} alt="1" />
          Lorem ipsum dolor sit amet
        </div>
        <div className="grid-item">
          <img src={Icon1} alt="2" />
          Lorem ipsum dolor sit amet
        </div>
        <div className="grid-item">
          <img src={Icon2} alt="3" />
          Lorem ipsum dolor sit amet
        </div>
        <div className="grid-item">
          <img src={Icon3} alt="4" />
          Lorem ipsum dolor sit amet
        </div>
        <div className="grid-item">
          <img src={Icon4} alt="5" />
          Lorem ipsum dolor sit amet
        </div>
        <div className="grid-item">
          <img src={Icon5} alt="6" />
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
};
export default Services;
