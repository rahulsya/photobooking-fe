import React from "react";

function Photos({ photos }) {
  return (
    <div className="pt-16">
      <h1 className="text-2xl font-bold mb-3">Our Works</h1>
      <p className="capitalize -backdrop-hue-rotate-15 mb-3">
        these are examples of work that we have been working on
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row auto-rows-max mb-5">
        {photos.map((photo, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? "col-span-1 lg:col-span-2" : ""}`}
            >
              <img
                className="h-48 lg:h-72 object-cover w-full"
                src={`${process.env.REACT_APP_BASEURL}/${photo.image_url}`}
                alt={`dummy-${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
