import React from "react";
import GH from "../Images/git1.png";
import LK from "../Images/link1.png";

function Footer(props) {
  return (
    <div>
      <div className="foot-container">
        <h5>Kemistry, Inc. 2021</h5>
      </div>
      <div className="links">
        <div className="emaun">
          <h4>Emaun Hyde</h4>
          <a
            href="https://github.com/emaunhyde"
            target="blank"
            rel="noreferrer"
          >
            <img src={GH} alt="Github" height="60px" />
          </a>
          <a
            href="https://www.linkedin.com/in/emaunhyde"
            target="blank"
            rel="noreferrer"
          >
            <img src={LK} alt="Github" height="60px" />
          </a>
        </div>
        <div className="kel">
          <h4>Kelpius Zannou</h4>
          <a href="https://github.com/KelpiusZ" target="blank" rel="noreferrer">
            <img src={GH} alt="Github" height="60px" />
          </a>
          <a
            href="https://www.linkedin.com/in/kelpius-zannou/"
            target="blank"
            rel="noreferrer"
          >
            <img src={LK} alt="Github" height="60px" />
          </a>
        </div>

        <div className="michaelann">
          <h4>Michaelann Awesome</h4>
          <a
            href="https://github.com/michaelannawesome"
            target="blank"
            rel="noreferrer"
          >
            <img src={GH} alt="Github" height="60px" />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelann-awesome/"
            target="blank"
            rel="noreferrer"
          >
            <img src={LK} alt="Github" height="60px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
