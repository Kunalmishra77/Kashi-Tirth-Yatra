import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    return (
        <Swiper
            modules={[Autoplay, A11y]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
        >
            {slides.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className="position-relative">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-100 back-img"
                           
                        />

                        {/* Dark overlay */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" style={{
                            borderBottomLeftRadius: "3rem",
                            borderBottomRightRadius: "3rem"
                        }}></div>

                        {/* Slide content: animate only when active */}
                        <div className="middle overlay-content text-center position-absolute top-50 start-50 z-2">
                            <h2 className="head-cont display-5 fw-semibold text-white"> {item.title}</h2>
                            <p className="desc lead text-light fw-semibold"> {item.desc}</p>
                            <button className="btn button overlay-btn "> {item.btnTxt}</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider;