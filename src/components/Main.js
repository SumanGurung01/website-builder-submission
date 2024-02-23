import React from "react";
import Heading from "./Heading";
import "../styles/Main.scss";
import Product from "./Product";

function Main() {
    return (
        <div className="main">
            <div className="main__container">
                <Heading />
                <Product />
            </div>
        </div>
    );
}

export default Main;
