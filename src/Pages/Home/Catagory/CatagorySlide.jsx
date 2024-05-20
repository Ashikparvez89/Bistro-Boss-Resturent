import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const CatagorySlide = () => {
  return (
    <section className="py-10">
      <SectionTitle
        subHeading={"-------- from 11 am to 12 Pm --------"}
        heading={"Order Online"}
      ></SectionTitle>
      <div className="py-16 w-[70%] mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="cursor-pointer relative">
              <img src="https://i.ibb.co/mGL2G93/slide2.jpg" alt="" />
              <p className="text-4xl text-white text-center absolute left-0 right-0 bottom-7 uppercase">
                Salad
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer relative">
              <img src="https://i.ibb.co/F5KxbSv/slide3.jpg" alt="" />
              <p className="text-4xl text-white text-center absolute left-0 right-0 bottom-7 uppercase">
                biriany
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer relative">
              <img src="https://i.ibb.co/TgH7DK5/slide4.jpg" alt="" />
              <p className="text-4xl text-white text-center absolute left-0 right-0 bottom-7 uppercase">
                pasta
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer relative">
              <img
                src="https://i.postimg.cc/sDCN76xx/slide1.jpg"
                alt="Image not found"
              />
              <p className="text-4xl text-white text-center absolute left-0 right-0 bottom-7 uppercase">
                Soup
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer relative">
              <img
                src="https://i.postimg.cc/sDCN76xx/slide1.jpg"
                alt="Image not found"
              />
              <p className="text-4xl text-white text-center absolute left-0 right-0 bottom-7 uppercase">
                chienese
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CatagorySlide;
