import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Womenhero = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_Page_1_LcHYgAa.jpg?format=webp&w=1500&dpr=1.5" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HOMEPAGE_3_copy.jpg?format=webp&w=1500&dpr=1.5" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_1_xU7hhzz.jpg?format=webp&w=1500&dpr=1.5" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_2_hLI0iCz.jpg?format=webp&w=1500&dpr=1.5" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Womenhero;
