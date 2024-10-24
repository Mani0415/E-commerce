import React, { useState, useRef } from "react";
import "./Admin.css";

const ProductDetails = () => {
  const [viewproduct, setViewproduct] = useState([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef(null); // Use a ref for the file input
  const token = sessionStorage.getItem("activationToken");

  const addProduct = async () => {
    const formData = new FormData();
    formData.append("title", product);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    if (imageRef.current && imageRef.current.files[0]) {
      formData.append("image", imageRef.current.files[0]);
    } else {
      console.error("No image selected");
      return;
    }
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    await fetch("http://localhost:3000/api/v1/product/create", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-4xl ml-96 font-[sans-serif] p-3">
      <div className="text-center mb-16">
        <h1 className="text-gray-800 text-4xl font-bold mt-6 mr-96">
          Add Product
        </h1>
      </div>
      <form>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Title</label>
            <input
              name="title"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="title"
            />
          </div>
          <br />
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Description
            </label>
            <input
              name="Descrip"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
            />
          </div>
          <br />
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Category</label>
            <input
              name="category"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="category"
            />
          </div>
          <br />
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Price</label>
            <input
              name="price"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
          </div>
          <br />
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Image</label>
            <input
              name="file"
              type="file"
              ref={imageRef} // Use the ref to capture the file input
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
            />
          </div>
          <br />
        </div>
        <div className="!mt-12">
          <button
            type="button"
            className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onClick={addProduct}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
