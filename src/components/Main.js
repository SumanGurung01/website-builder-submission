import React from "react";
import Heading from "./Heading";
import "../styles/Main.scss";
import Product from "./Product";
import RelatedDeal from "./RelatedDeal";

function Main() {
    return (
        <div className="main">
            <div className="main__container">
                <Heading />
                <Product />
                <RelatedDeal />
            </div>
        </div>
    );
}

export default Main;
