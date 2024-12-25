import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ExpertCard from "../../Components/home/ExpertCard";

const Experts = () => {
  return (
    <div className="container mx-auto pb-8">
      <SectionTitle title="Meet our Ayurveda experts" />
      <div className="mb-8">
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
          className="mySwiper "
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
          <SwiperSlide className="">
            <ExpertCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ExpertCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ExpertCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ExpertCard />
          </SwiperSlide>
          <div className="custom-prev size-12 hidden lg:flex rounded-full  border border-secondary justify-center items-center text-gray-500 ">
            <GrLinkPrevious />
          </div>
          <div className="custom-next size-12 hidden lg:flex rounded-full  border border-secondary justify-center items-center text-gray-500">
            <GrLinkNext />
          </div>
        </Swiper>
      </div>
      <div className="max-w-[20vw] mx-auto rounded-md bg-secondary/20 border border-secondary text-secondary">
        <h2 className="flex justify-center items-center gap-1 py-2 font-bold">
          Findn More Experts <IoIosArrowForward size={18} />{" "}
        </h2>
      </div>
    </div>
  );
};

export default Experts;
