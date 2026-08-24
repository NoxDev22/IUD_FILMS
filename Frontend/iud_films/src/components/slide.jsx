// Import Swiper React components
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//COMPONENTS
import { SlideFilm } from "./SlideFilm";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export function Slide({ list }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      style={{ height: "100%" }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {list.map((fl, i) => (
        <SwiperSlide key={i}>
          <SlideFilm url={fl.url} name={fl.name} description={fl.description} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
