import React from "react";
import "../styles/Footer.scss";
import { ChevronDown } from "lucide-react";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__box">
                    <p>CATAGORIES</p>
                    <ul>
                        <li>Web Builder</li>
                        <li>Hoisting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>
                <div className="footer__box">
                    <p>CONTACT</p>
                    <ul>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Catagories</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="footer__box">
                    <p
                        className="footer__dropdown"
                        style={{ color: "#D1D6DA" }}
                    >
                        United States <ChevronDown size={16} />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
