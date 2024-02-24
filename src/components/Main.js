import React from "react";
import Heading from "./Heading";
import "../styles/Main.scss";
import Product from "./Product";
import RelatedDeal from "./RelatedDeal";
import Signup from "./Signup";

function Main() {
    return (
        <div className="main">
            <div className="main__container">
                <Heading />
                <Product />
                <RelatedDeal />
                <Signup />
            </div>
        </div>
    );
}

export default Main;
