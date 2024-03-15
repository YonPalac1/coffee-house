import { Blog } from "../constants";
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
    return <Swiper
    className="mt-12"
    modules={[Pagination, Scrollbar, Autoplay]}
    autoplay
    spaceBetween={0}
    pagination={{ clickable: true }}
    slidesPerView={4}
    breakpoints={{
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      382: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
  >
    {
        Blog.map((item, i) => {
            return <SwiperSlide  key={i} className="bg-black">
                <img className="h-[300px]" src={item.img} alt="" />
                <div className="p-5 leading-2 text-left">
                    <p className="text-orange-400">{item.date}</p>
                    <p className="text-white font-bold mt-5">{item.paraph}</p>
                </div>
            </SwiperSlide >
        })
    }
</Swiper>
}