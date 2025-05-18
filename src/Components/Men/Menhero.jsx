import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./menhero.css";
import "./men.css";
import "swiper/css";
import "swiper/css/navigation";

const Menhero = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_12.jpg?format=webp&w=1500&dpr=1.5"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_Page_2_RsHMd1M.jpg?format=webp&w=1500&dpr=1.5"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/home_Page_1.jpg?format=webp&w=1500&dpr=1.5"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/1982/7331/files/offer_banner_new_model_1_200c8d48-dd3e-499c-ab32-21995c8d48fc.jpg?v=1718601500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_10.jpg?format=webp&w=1500&dpr=1.5"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Menhero;
