import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer2 pt-3">
        <div className="about">
          <h5 style={{ color: "gray", fontSize: " 15px" }}>ABOUT</h5>
          <ul
            className="text-white pt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            {/* <li>flipkart Stories</li> */}
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="group">
          <h5 style={{ color: "gray", fontSize: " 15px" }}>GROUP COMPANIES</h5>
          <ul
            className="text-white pt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div className="help">
          <h5 style={{ color: "gray", fontSize: " 15px" }}>HELP</h5>
          <ul
            className="text-white pt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div className="policy">
          <h5 style={{ color: "gray", fontSize: " 15px" }}>CONSUMER POLICY</h5>
          <ul
            className="text-white pt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            <li>Cancellation & Returm</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>ERP Comliance</li>
          </ul>
        </div>
        <div className="mail">
          <h5 style={{ color: "gray", fontSize: " 15px" }}>Mail Us</h5>
          <ul
            className="text-white pt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            {/* <li>Flipkart Internet Private Limited</li> */}
            <li>Buliding Alyssa,Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road,Devarabeesanahalli Village,</li>
            <li>Bengaluru,560103,</li>
            <li>Karnataka,India</li>
          </ul>
        </div>
        <div className="address">
          <h5 style={{ color: "gray", fontSize: " 15px" }}>
            Registered Office Adrress
          </h5>
          <ul
            className="text-white pt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            {/* <li>Flipkart Internet Private Limited</li> */}
            <li>Buliding Alyssa,Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road,Devarabeesanahalli Village,</li>
            <li>Bengaluru,560103,</li>
            <li>Karnataka,India</li>
            <li>CIN:U51109KA2012PTC066107</li>
            <li>Telephone : 044-45614700/044-67415800</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
