import { products, specialProducts, stars } from "../utils/data";
import "../styles/Product.scss";
import { CheckCircle2, ChevronDown, Gem, Trophy } from "lucide-react";
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

            {specialProducts.map((specialProduct, index) => (
                <SpecialProduct
                    product={specialProduct}
                    index={index + products.length + 1}
                />
            ))}
        </div>
    );
}

export default Product;

function ProductCard({ product, index }) {
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

function SpecialProduct({ product, index }) {
    const {
        name,
        description,
        discount,
        highlight,
        points,
        rating,
        remark,
        image_name
    } = product;

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

            <div className="index">{index}</div>

            <div className="productcard__image">
                <img
                    src={require("../assets/item.png")}
                    alt={product.name}
                    width={141}
                    height={103}
                />
                <p>{image_name}</p>
            </div>
            <div className="product__description">
                <p>
                    <b>{name}</b> : {description}
                </p>
                <span
                    style={{
                        backgroundColor: "#F2F4F7",
                        padding: "8px",
                        borderRadius: "12px"
                    }}
                >
                    {discount}% Off
                </span>
                <b>
                    <p>Main highlights</p>
                </b>

                <div className="highlight">
                    {Object.keys(highlight).map((value) => (
                        <p>
                            <span
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#1B88F4",
                                    padding: "5px",
                                    margin: "5px",
                                    borderRadius: "4px"
                                }}
                            >
                                {highlight[value]}
                            </span>
                            {value}
                        </p>
                    ))}
                </div>

                <p style={{ margin: "10px 0px 5px 0px" }}>Why we love it</p>

                <div className="points">
                    {points.map((point) => (
                        <p>
                            <CheckCircle2 size={16} color={"#1B88F4"} />
                            {point}
                        </p>
                    ))}
                </div>

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
                        {rating}
                    </p>
                    <p>{remark}</p>
                    <div className="stars">
                        {stars[remark].map((star) => (
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
