import "./home.css";
import { Routes, Route, Link } from "react-router-dom";
import Men from "../Men/Men";
import Women from "../Women/Women";

const Home = () => {
  return (
    <>
      <div className="shop-for">
        <div className="shop-for-title">
          <p>shop for</p>
        </div>
        <div className="shop-for-cards">
          <Link to="/men">
            <img
              src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-collection-tile.jpg-3..jpg?format=webp&w=480&dpr=1.5"
              alt=""
            />
          </Link>
          <Link to="/women">
            <img
              src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-collection-tile.jpg-women.jpg?format=webp&w=480&dpr=1.5"
              alt=""
            />
          </Link>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-collection-tile.jpg-kiddo_8wCu0ab.jpg?format=webp&w=480&dpr=1.5"
            alt=""
          />
          <Routes>
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Home;
