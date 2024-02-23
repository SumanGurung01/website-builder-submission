import React from "react";
import "../styles/Navbar.scss";
import { Search } from "lucide-react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__search">
                <Search size={24} />
                <input type="text" className="navbar__input" />
            </div>
            <ul className="navbar__list">
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's deals</li>
            </ul>
        </div>
    );
}

export default Navbar;
