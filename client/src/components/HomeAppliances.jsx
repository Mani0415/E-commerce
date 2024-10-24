import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeAppliances = ({ data }) => {
  const navigate=useNavigate()
  return (
    <>
      <div className="mt-0">
        <div className="font-[sans-serif] bg-gray-100">
          <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              {/* Map through the data to create a product card for each item */}
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 cursor-pointer hover:-translate-y-2 transition-all relative"
                  style={{ height: "330px", width: "290px" }} // Reduced height and width
                  onClick={() => navigate(`/product/homeAppliances/${item.id}`)}
                >
                  <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-full h-[150px] overflow-hidden mx-auto md:mb-2 mb-4">
                    {/* Render the image */}
                    <img
                      className="h-full w-full object-contain"
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-2">{item.descrip}</p>
                    <h4 className="text-sm text-gray-800 font-bold mt-2">
                      {item.price}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
