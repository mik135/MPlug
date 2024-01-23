// import Swiper core and required modules
import { Scrollbar, A11y, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../App.css";

export default function SwiperPage() {
  return (
    <div className="bg-[#000] h-[100vh]">
      <Swiper
        // install Swiper modules
        modules={[Scrollbar, A11y, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="slide">
          <div className="relative">
            <img src="assets/aquaman.jpg" alt="" />
            <div className="absolute top-0 px-[1em] py-[10em] md:px-[5em] md:py-[10em] font-inter flex flex-col md:gap-5 gap-3">
              <h1 className="text-[#fff] text-2xl md:text-4xl font-bold px-0">
                Aquaman and the <br /> Lost Kingdom
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolor. Sit deleniti, molestiae debitis saepe, quae nihil praesentium vitae assumenda delectus autem non corporis eveniet minus. Labore voluptatum harum vel.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
                <button className="watchNowBtn">Watch Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div>
            <img src="assets/napoleon.jpg" alt="" />
            <div className="absolute top-0 px-[1em] py-[10em] md:px-[5em] md:py-[10em] font-inter flex flex-col md:gap-5 gap-3">
              <h1 className="text-[#fff] text-2xl md:text-4xl font-bold px-0">
                Napoleon
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolor. Sit deleniti, molestiae debitis saepe, quae nihil praesentium vitae assumenda delectus autem non corporis eveniet minus. Labore voluptatum harum vel.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
                <button className="watchNowBtn">Watch Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div>
            <img src="assets/shark.jpg" alt="" />
            <div className="absolute top-0 px-[1em] py-[10em] md:px-[5em] md:py-[10em] font-inter flex flex-col md:gap-5 gap-3">
              <h1 className="text-[#fff] text-2xl md:text-4xl font-bold px-0">
                Deep Fear
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolor. Sit deleniti, molestiae debitis saepe, quae nihil praesentium vitae assumenda delectus autem non corporis eveniet minus. Labore voluptatum harum vel.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
                <button className="watchNowBtn">Watch Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div>
            <img src="assets/wasted.jpg" alt="" />
            <div className="absolute top-0 px-[1em] py-[10em] md:px-[5em] md:py-[10em] font-inter flex flex-col md:gap-5 gap-3">
              <h1 className="text-[#fff] text-2xl md:text-4xl font-bold px-0">
                La Sociedad de la nieve
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolor. Sit deleniti, molestiae debitis saepe, quae nihil praesentium vitae assumenda delectus autem non corporis eveniet minus. Labore voluptatum harum vel.</p>
              <div className="heroBtns">
                <button className="trailerBtn">Watch Trailer</button>
                <button className="watchNowBtn">Watch Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
