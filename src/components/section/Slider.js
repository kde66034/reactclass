import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
    return (
        <div className="slider__inner">
          <Swiper 
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true} 
            pagination={{clickable: true}}
            modules={[Navigation, Pagination, Autoplay]} 
            className="mySwiper">

            <SwiperSlide>
                <div class="desc container">
                    <span>BAKING CLASS</span>
                    <h3>AWESOME BAKING</h3>
                    <p>
                        훌륭한 제빵사가 되고 싶으신가요? <br/>
                        별빛제빵교실에 오신 것을 환영합니다!
                    </p>
                    <div class="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" class="black">사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="desc container">
                    <span>BAKING CLASS</span>
                    <h3>AWESOME BAKING</h3>
                    <p>
                        훌륭한 제빵사가 되고 싶으신가요? <br/>
                        별빛제빵교실에 오신 것을 환영합니다!
                    </p>
                    <div class="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" class="black">사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="desc container">
                    <span>BAKING CLASS</span>
                    <h3>AWESOME BAKING</h3>
                    <p>
                        훌륭한 제빵사가 되고 싶으신가요? <br/>
                        별빛제빵교실에 오신 것을 환영합니다!
                    </p>
                    <div class="btn">
                        <a href="/">자세히 보기</a>
                        <a href="/" class="black">사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
    );
}

export default Slider;