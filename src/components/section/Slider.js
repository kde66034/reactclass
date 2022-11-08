import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderInfo = {
    subject: "BAKING CLASS",
    title: "AWESOME BAKING",
    desc: "훌륭한 제빵사가 되고 싶으신가요? <br/> 별빛제빵교실에 오신 것을 환영합니다!",
    btnLink: "/",
    btnClass: "black",
}

function Slider() {
    return (
    <section id="sliderType" className="slider__wrap scroll">
        <h2 className="blind">슬라이드 영역</h2>
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
                    <span>{sliderInfo.subject}</span>
                    <h3>{sliderInfo.title}</h3>
                    <p>
                        {sliderInfo.desc}
                    </p>
                    <div class="btn">
                        <a href={`${sliderInfo.btnLink}`}>자세히 보기</a>
                        <a href={`${sliderInfo.btnLink}`} class={`${sliderInfo.btnClass}`}>사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="desc container">
                    <span>{sliderInfo.subject}</span>
                    <h3>{sliderInfo.title}</h3>
                    <p>
                        {sliderInfo.desc}
                    </p>
                    <div class="btn">
                        <a href={`${sliderInfo.btnLink}`}>자세히 보기</a>
                        <a href={`${sliderInfo.btnLink}`} class={`${sliderInfo.btnClass}`}>사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="desc container">
                    <span>{sliderInfo.subject}</span>
                    <h3>{sliderInfo.title}</h3>
                    <p>
                        {sliderInfo.desc}
                    </p>
                    <div class="btn">
                        <a href={`${sliderInfo.btnLink}`}>자세히 보기</a>
                        <a href={`${sliderInfo.btnLink}`} class={`${sliderInfo.btnClass}`}>사이트 보기</a>
                    </div>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
          </Swiper>
        </div>
    </section>
    );
}

export default Slider;