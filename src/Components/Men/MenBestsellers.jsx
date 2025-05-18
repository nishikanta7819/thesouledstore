import "./menbestsellers.css";
import "swiper/css";
import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

const MenBestSellers = () => {
  return (
    <div className="bestsellers">
      <div className="bestsellers-title">
        <p>Best Sellers</p>
      </div>
      <div className="bestsellers-cards">
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide> */}
        <div className="bestsellers-img">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/4_27_wkSm7ia.jpg?format=webp&w=480&dpr=1.5"
            alt=""
          />
        </div>
        <div className="bestsellers-img">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_24.jpg?format=webp&w=480&dpr=1.5"
            alt=""
          />
        </div>
        <div className="bestsellers-img">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_34.jpg?format=webp&w=480&dpr=1.5"
            alt=""
          />
        </div>
        <div className="bestsellers-img">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Winterwear.jpg?format=webp&w=480&dpr=1.5"
            alt=""
          />
        </div>
        <div className="bestsellers-img">
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Polos_XK6zlEl.jpg?format=webp&w=480&dpr=1.5"
            alt=""
          />
        </div>
        {/* </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default MenBestSellers;
