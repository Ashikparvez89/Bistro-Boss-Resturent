import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Paralax = () => {
  return (
    <div>
      <div className="">
        <div
          className="hero h-[50em] bg-fixed"
          style={{
            backgroundImage: "url(https://i.postimg.cc/d3TZ0mmh/featured.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center text-neutral-content">
            <div className="">
              <SectionTitle
                heading={"Check It Now"}
                subHeading={"See our awesome product"}
              ></SectionTitle>
            </div>
            <div className="flex justify-center items-center gap-10 pt-10">
              <div className="">
                <img
                  className="max-w-96 mx-auto"
                  src="https://i.postimg.cc/d3TZ0mmh/featured.jpg"
                  alt=""
                />
              </div>
              <div className="max-w-md text-left space-y-5">
                <p className=" text-white text-xl">March 20, 2023</p>
                <p className="my-4 text-white text-xl">WHERE CAN I GET SOME?</p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn text-lg font-semibold btn-outline border-0 border-b-4 border-white text-white">
                  View Full Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
