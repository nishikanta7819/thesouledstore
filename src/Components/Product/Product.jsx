import "./product.css";
import { FaRegHeart } from "react-icons/fa";
import Sizechart from "../Sizechart/Sizechart";

function Product() {
  return (
    <div className="product">
      <div className="product-image">
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731939264_5685767.jpg?format=webp&w=480&dpr=1.5"
          alt=""
        />
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731939264_1258398.jpg?format=webp&w=480&dpr=1.5"
          alt=""
        />
      </div>
      <div className="product-details">
        <div className="product-name">Harry Potter: Azkaban</div>
        <div className="product-price"><span>$1999</span></div>
        <div className="product-size">
          <span>Please select a size</span>
          <span>
            <a href="" onClick={<Sizechart />}>
              size-chart
            </a>
          </span>

          <div className="size-chart">
            <span>XXS</span>
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
        </div>
        <div className="product-details-quantity">
          <p>Quantity</p>
        </div>
        <div className="product-details-btns">
          <button id="cart">add to cart</button>
          <button id="wishlist">
            <FaRegHeart />
            add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
