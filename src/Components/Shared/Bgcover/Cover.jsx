import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, caption }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero min-h-[700px]">
          <div
            style={{
              backgroundColor: "rgba(21, 21, 21, 0.6)",
            }}
            className="hero-content text-center text-white bg-rgba(21, 21, 21, 0.6) px-[20em] py-20"
          >
            <div className="max-w-4xl z-10">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 text-xl font-semibold ">{caption}</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
