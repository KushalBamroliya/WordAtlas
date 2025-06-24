import React from "react";
import footer from "../../api/Footerapi.json";
import { MdPlace, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";


function Footer() {

  const icons = {
    MdPlace : <MdPlace/>,
    MdPhone : <MdPhone/>,
    MdAccessTime : <MdAccessTime/>
  }

  return (
    <footer className="footersecton">
      <div className="footeritem">
        {footer.map((data, index) => {
          const {icon, title, details} = data;
          return (
            <div className="footercontact" key={index}>
              <div className="icon">{icons[icon]}</div>
              <div className="footertext">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          )
        })}
      </div>
    </footer>
  );
}

export default Footer;
