import React from "react";
import "../styles/Heading.scss";
import { CheckCircle2, ChevronDown, ChevronRight, Info } from "lucide-react";

function Heading() {
    return (
        <div className="heading">
            <p className="heading__line">Best Website Builder in the US</p>

            <InfoList />
            <LinkButton />
            <BreadCrumb />
        </div>
    );
}

export default Heading;

function InfoList() {
    return (
        <div className="infolist">
            <div className="infolist__info">
                <p>
                    <CheckCircle2 size={20} color={"#4B5665"} /> Last Updated -
                    February 22,2020
                </p>
                <p>
                    <Info size={20} color={"#4B5665"} />
                    Advertising Disclosure
                </p>
            </div>
            <div className="infolist__drop">
                <p>
                    Top Relavent <ChevronDown size={20} color={"#4B5665"} />
                </p>
            </div>
        </div>
    );
}

function LinkButton() {
    const links = [
        "Tools",
        "AWS builder",
        "Start Build",
        "Build Supplies",
        "Tooling",
        "BlueHosting"
    ];
    return (
        <div className="linkbutton">
            {links.map((link) => (
                <p className="linkbutton__link">{link}</p>
            ))}
        </div>
    );
}

function BreadCrumb() {
    const crumbs = [
        "Home",
        "Hosting for all",
        "Hosting",
        "Hosting6",
        "Hosting5"
    ];

    return (
        <div className="breadcrumb">
            {crumbs.map((crumb, index) => (
                <p className="crumb">
                    {crumb}
                    {index !== crumbs.length - 1 ? (
                        <ChevronRight size={20} color={"#4B5665"} />
                    ) : null}
                </p>
            ))}
        </div>
    );
}
