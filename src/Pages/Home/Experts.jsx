import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ExpertCard from "../../Components/home/ExpertCard";

const Experts = () => {
  return (
    <div className="container mx-auto pb-8">
      <SectionTitle title="Meet our Ayurveda experts" />
      <div className="">
        <Swiper
          watchSlidesProgress={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper min-h-[60vh]"
          loop={true}
          spaceBetween={30}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="min-h-[60vh]">
            <ExpertCard />
          </SwiperSlide>
          <SwiperSlide className="min-h-[60vh]">
            <ExpertCard />
          </SwiperSlide>
          <SwiperSlide className="min-h-[60vh]">
            <ExpertCard />
          </SwiperSlide>
          <SwiperSlide className="min-h-[60vh]">
            <ExpertCard />
          </SwiperSlide>
          <div className="custom-prev size-12 hidden lg:flex rounded-full  border justify-center items-center text-gray-500 ">
            <GrLinkPrevious />
          </div>
          <div className="custom-next size-12 hidden lg:flex rounded-full  border justify-center items-center text-gray-500">
            <GrLinkNext />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Experts;
