import { products } from "../utils/data";
import "../styles/Product.scss";
import { ChevronDown, Gem, Trophy } from "lucide-react";
function Product() {
    return (
        <div className="product">
            {products.map((product, index) => (
                <ProductCard
                    product={product}
                    key={product.name}
                    index={index}
                />
            ))}
        </div>
    );
}

export default Product;

function ProductCard({ product, index }) {
    const stars = {
        Exceptional: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"],
        Excellent: [
            "fa-star",
            "fa-star",
            "fa-star",
            "fa-star",
            "fa-star-half-full"
        ],
        "Very Good": ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"]
    };

    return (
        <div className="productcard">
            <div className="tag">
                {product.catagory ? (
                    <p>
                        {product.catagory === "Best Choice" ? (
                            <Trophy size={16} />
                        ) : (
                            <Gem size={16} />
                        )}
                        {product.catagory}
                    </p>
                ) : null}
            </div>

            <div className="index">{index + 1}</div>

            <div className="productcard__image">
                <img
                    src={require("../assets/item.png")}
                    alt={product.name}
                    width={141}
                    height={103}
                />
                <p>{product.image_name}</p>
            </div>
            <div className="product__description">
                <p>
                    <b>{product.name}</b> - {product.description}
                </p>
                <b>
                    <p>Main highlights</p>
                </b>
                <p style={{ marginLeft: "20px" }}>{product.highlight}</p>
                <p className="show__more">
                    Show more <ChevronDown size={16} color={"#1B88F4"} />
                </p>
            </div>

            <div className="product__rating">
                <div className="rating__container">
                    <p
                        style={{
                            fontSize: "32px",
                            color: "#074786",
                            margin: "20px"
                        }}
                    >
                        {product.rating}
                    </p>
                    <p>{product.remark}</p>
                    <div className="stars">
                        {stars[product.remark].map((star) => (
                            <i
                                className={`fa ${star}`}
                                style={{ fontSize: "16px", color: "orange" }}
                            ></i>
                        ))}
                    </div>
                </div>
                <button>View</button>
            </div>
        </div>
    );
}
