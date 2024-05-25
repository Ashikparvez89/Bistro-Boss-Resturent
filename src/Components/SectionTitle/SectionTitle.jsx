import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="max-w-xs mx-auto text-center py-10">
      <p className="text-yellow-600 font-semibold">{subHeading}</p>
      <p className="text-4xl py-1 mt-2 text-black font-semibold border-0 border-b-4 border-t-4 border-black">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
