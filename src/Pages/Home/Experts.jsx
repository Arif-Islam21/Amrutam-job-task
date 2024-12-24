import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Experts = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle title="Meet our Ayurveda experts" />
      <div className="">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper min-h-[60vh]"
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="min-h-[60vh]">Slide 1</SwiperSlide>
          <SwiperSlide className="min-h-[60vh]">Slide 2</SwiperSlide>
          <SwiperSlide className="min-h-[60vh]">Slide 3</SwiperSlide>
          <SwiperSlide className="min-h-[60vh]">Slide 4</SwiperSlide>
          <div className="custom-prev size-12 rounded-full border flex justify-center items-center text-gray-500">
            <GrLinkPrevious />
          </div>
          <div className="custom-next size-12 rounded-full border flex justify-center items-center text-gray-500">
            <GrLinkNext />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Experts;
