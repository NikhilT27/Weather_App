import React from "react";
import github from "../github.png";
import linkedin from "../linkedin.png";

function Footer() {
  return (
    <div>
      <div className="App-footer">
        <div>Made by</div>
        <div>Nikhil Thakare</div>
        <div>nikhilthakare14@gmail.com</div>
        <div className="social-media">
          <div>
            <a target="_blank" href="https://github.com/NikhilT27">
              <img className="social-media-logo" src={github}></img>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/nikhil-t">
              <img className="social-media-logo" src={linkedin}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
