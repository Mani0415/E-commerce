import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";

const AdminPage = () => {
  const [users, setUsers] = useState(0);
  const [products, setProduct] = useState(0);
  const [orders, setOrders] = useState(0);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/user");
        const data = await response.json();
        console.log(data);
        setUsers(data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchuser();
  }, []);
    useEffect(() => {
      const fetchproduct = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/v1/product");
          const data = await response.json();
          console.log(data);
          setProduct(data.length);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchproduct();
    }, []);

  return (
    // <div className='container-Admin'>
    //   <div className='product-form'>
    //     <div className='Admin-details'>
    //       <div className='Head m-auto ml-96'>
    //         <h1 className="text-3xl text-black mt-6 ml-28">Admin Page</h1>
    //       </div>
    //       <div className='Admin-edit'>
    //         <a className='link-a' href="/userdetails">
    //           <div className='users bg-blue-200 p-16'>
    //             <h1 className='user-head text-2xl underline'>users</h1>
    //             <label className='text-3xl' htmlFor="">user details:{users}</label>
    //           </div>
    //         </a>
    //         <a className='link-a' href="/ProductDetails">
    //           <div className='Product bg-blue-200 p-16'>
    //             <h1 className='user-head text-2xl underline'>products</h1>
    //             <label className='text-3xl' htmlFor="">product details:</label>
    //           </div>
    //         </a>
    //         <a className='link-a' href="">
    //           <div className='Orders bg-blue-200 p-16'>
    //             <h1 className='user-head text-2xl underline'>orders</h1>
    //             <label className='text-3xl' htmlFor="">order details:</label>
    //           </div>
    //         </a>
    //         <div className='product-details'>
    //           <a className='pro-Add' href="/ProductDetails">Add</a><br />
    //           <a className='pro-update' href="/ProductUpadte">update</a><br />
    //           <a className='pro-delete' href="/ProductDelete">Delete</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div class="font-[sans-serif] bg-gradient-to-r from-[#3b82f6] to-[#e11d48] py-12 px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-white sm:text-4xl text-2xl font-bold text-center mb-16">
            Admin Panel Manikandan
          </h2>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
            <Link to="/userdetails">
              <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img
                  width={100}
                  height={100}
                  className="ml-28"
                  src="https://cdn-icons-png.flaticon.com/512/476/476863.png"
                  alt=""
                />
                <h3 class="text-xl font-semibold mt-7">User Details</h3>
                <h1 className="text-xl font-semibold">{users}</h1>
                <p class="text-gray-300 group-hover:text-gray-500 text-sm"></p>
              </div>
            </Link>
            <Link to="/ProductDetails">
              <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img
                  width={100}
                  height={100}
                  className="ml-28"
                  src="https://cdn-icons-png.flaticon.com/512/7711/7711948.png"
                  alt=""
                />
                <h3 class="text-xl font-semibold mt-7">Add Product</h3>
                <p class="text-gray-300 group-hover:text-gray-500 text-sm"></p>
              </div>
            </Link>
            <Link to="/ProductView">
              <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img
                  width={100}
                  height={100}
                  className="ml-28"
                  src="https://cdn-icons-png.flaticon.com/512/4866/4866817.png"
                  alt=""
                />
                <h3 class="text-xl font-semibold mt-7">Product Details</h3>
                <h1 className="text-xl font-semibold">{products}</h1>
                <p class="text-gray-300 group-hover:text-gray-500 text-sm"></p>
              </div>
            </Link>

            <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <img
                width={100}
                height={100}
                className="ml-28"
                src="https://cdn-icons-png.flaticon.com/512/6632/6632834.png"
                alt=""
              />
              <h3 class="text-xl font-semibold mt-7">Order Details</h3>
              <p class="text-gray-300 group-hover:text-gray-500 text-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
