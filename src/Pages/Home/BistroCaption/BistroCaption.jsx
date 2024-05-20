import React from "react";

const BistroCaption = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center py-56"
        style={{
          backgroundImage: "url(https://i.ibb.co/T8ChLSJ/chef-service.jpg)",
        }}
      >
        <div className="flex justify-center items-center text-neutral-content">
          <div className="w-[70%] mx-auto flex flex-col justify-center items-center space-y-10 bg-white py-12 px-12">
            <h1 className="text-black font-semibold uppercase text-4xl">
              Bistro Boss
            </h1>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              inventore dolore quis sunt corrupti provident, repudiandae
              corporis ea delectus harum blanditiis repellat aut reprehenderit,
              quod est. Aut, sequi ducimus tempora ipsa voluptas dicta.
              Aspernatur hic nulla nam unde, facilis amet, culpa officia
              blanditiis ab sed, voluptas eaque asperiores tempore commodi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroCaption;
