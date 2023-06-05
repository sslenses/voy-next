import React from "react";
import Copyright from "./copyright";
import FooterLinks from "./footerlinks";
import FooterTop from "./footertop";

const Footer = () => {
  return (
    <div className=" bg-blue-50">
      <FooterTop />
      <FooterLinks />
      <Copyright />
    </div>
  );
};

export default Footer;
