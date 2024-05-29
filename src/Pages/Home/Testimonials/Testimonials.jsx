import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="py-10">
      <SectionTitle
        heading={"Testmonials"}
        subHeading={"what our client say"}
      ></SectionTitle>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((reviews) => (
            <SwiperSlide key={reviews._id}>
              <div className="flex flex-col justify-center items-center space-y-10 py-12 px-36">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={reviews.rating}
                  readOnly
                />
                <span className="text-7xl text-center block">
                  <FaQuoteLeft />
                </span>
                <p className="text-lg font-semibold text-center">
                  {reviews.details}
                </p>
                <p className="text-3xl font-semibold text-orange-300 text-center">
                  {reviews.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
