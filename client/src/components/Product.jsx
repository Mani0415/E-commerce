import React from "react";
import "../css/product.css";
import { useNavigate, useParams } from "react-router-dom";

const Product = ({ index,home,tech,station }) => {
  const { type,id } = useParams();
  const navigate = useNavigate()
  let product;
  console.log("Type from URL:", type);
  console.log("ID from URL:", id);
    console.log("homeAppliances:", home);
    console.log("electronics:", tech);
  if (type === "homeAppliances") {
    product = home.find((item) => item.id === parseInt(id));
  } else if (type === "Technologys") {
    product = tech.find((item) => item.id === parseInt(id));
  } else if (type === "Stationary") {
    product = station.find((item) => item.id === parseInt(id));
  } else if (type === "home") {
    product = index.find((item) => item.id === parseInt(id));
  }
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <>
      <div className="font-sans bg-white">
        <div className="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="bg-white px-4 py-12 rounded-xl">
                <img
                  src={product.src}
                  alt="Product"
                  className="w-9/12 rounded object-cover mx-auto"
                />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-gray-100 rounded-xl p-4 cursor-pointer">
                  <img
                    src={product.src}
                    alt="Product2"
                    className="w-full object-contain"
                  />
                </div>
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-gray-100 rounded-xl p-4 cursor-pointer">
                  <img
                    src={product.src}
                    alt="Product2"
                    className="w-full object-contain"
                  />
                </div>
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-gray-100 rounded-xl p-4 cursor-pointer">
                  <img
                    src={product.src}
                    alt="Product2"
                    className="w-full object-contain"
                  />
                </div>
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-gray-100 rounded-xl p-4 cursor-pointer">
                  <img
                    src={product.src}
                    alt="Product2"
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-black">{product.title}</h2>

              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-[18px] fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-black text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <p className="text-black text-4xl font-semibold">{product.price}</p>
                <p className="text-gray-400 text-base">
                  <strike>₹1600</strike>{" "}
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-3 bg-indigo-300 hover:bg-indigo-400 text-black text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-2.5 border border-indigo-300 bg-transparent text-indigo-300 text-sm font-semibold rounded"
                  onClick={()=>navigate('/cart')}
                >
                  Add to cart
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black">
                  About the coffee
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-black">
                  {product.descrip}
                </ul>
              </div>

              <div className="mt-8">
                <ul className="flex">
                  <li className="text-black font-semibold text-sm bg-indigo-200 py-3 px-8 border-b-2 border-black cursor-pointer transition-all">
                    Reviews
                  </li>
                  <li className="text-black font-semibold text-sm py-3 px-8 cursor-pointer">
                    Sellter
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-black">Reviews(10)</h3>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                      <p className="text-sm text-black font-semibold">5.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-2/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-black font-semibold ml-3">66%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm text-black font-semibold">4.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-black font-semibold ml-3">33%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm text-black font-semibold">3.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/6 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-black font-semibold ml-3">16%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm text-black font-semibold">2.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/12 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-black font-semibold ml-3">8%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm text-black font-semibold">1.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-[6%] h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-black font-semibold ml-3">6%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-8">
                  <img
                    src="https://i.pinimg.com/564x/62/f8/ee/62f8eebefb48bf07dcb93e46654c934d.jpg"
                    className="w-20 h-20 -mt-4 rounded-full border-1 border-gray-400"
                  />

                  <div className="ml-3">
                    <h4 className="text-sm font-semibold text-black">Sita Mahalakshmi</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold text-black">
                        2 mins ago
                      </p>
                    </div>
                    <p className="text-xs mt-4 text-black">
                      The service was amazing. I never had to wait that long for
                      my food. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-8 px-4 py-2.5 bg-transparent border border-indigo-300 text-indigo-300 font-semibold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
