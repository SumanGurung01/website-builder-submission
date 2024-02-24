import React from "react";
import "../styles/RelatedDeal.scss";
import { relatedDeals } from "../utils/data";
function RelatedDeal() {
    return (
        <>
            <p
                style={{
                    color: "#2C384A",
                    fontFamily: "Inter",
                    fontWeight: "400px",
                    fontSize: "32px",
                    lineHeight: "44px",
                    marginTop: "90px"
                }}
            >
                Related deals you might like for
            </p>
            <div className="related__deal__container">
                {relatedDeals.map((deal) => (
                    <Deals product={deal} />
                ))}
            </div>
        </>
    );
}

function Deals({ product }) {
    return (
        <div className="related__deal">
            <img
                src={require("../assets/item.png")}
                alt={product.name}
                width={141}
                height={103}
                className="related__deal__image"
            />
            <div className="related__deal__badge">
                <p>{product.discount}% Off</p>
                <p>Limited time</p>
            </div>
            <p
                style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#626E79",
                    textAlign: "center"
                }}
            >
                {product.name}
            </p>
            <p
                style={{
                    fontSize: "16px",
                    color: "#626E79",
                    textAlign: "center",
                    margin: 0,
                    textAlign: "left"
                }}
            >
                {product.description}
            </p>
            <div className="related__deal__price">
                <p
                    style={{
                        fontSize: "20px",
                        color: "#5C6874",
                        textAlign: "center",
                        margin: 0,
                        textAlign: "left"
                    }}
                >
                    ${product.current_price}
                </p>
                <p
                    style={{
                        color: "#9FA9B3",
                        margin: 0
                    }}
                >
                    ${product.original_price}
                </p>
                <p
                    style={{
                        color: "#EF4C5D",
                        margin: 0
                    }}
                >
                    ({product.discount}% Off)
                </p>
            </div>
            <button>View Deal</button>
        </div>
    );
}

export default RelatedDeal;
