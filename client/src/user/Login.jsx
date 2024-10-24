import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../components/AuthuProvider.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for displaying messages
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Email and Password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An error occurred");
      }

      const data = await response.json(); // Parse response
      console.log("Login response:", data); // Debug logging

      if (data.token && data.user) {
        const userData = {
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
        };

        // Store the token and user in sessionStorage
        sessionStorage.setItem("activationToken", data.token); // Use consistent key
        sessionStorage.setItem("user", JSON.stringify(userData));
        console.log(userData);

        // Call login with userData and token
        login(userData, data.token);

        // Log sessionStorage contents for debugging
        console.log("Stored Token:", sessionStorage.getItem("activationToken"));
        console.log("Stored User:", JSON.parse(sessionStorage.getItem("user")));

        setMessage("Login successful");
        navigate("/"); // Redirect to profile or home page
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Token or user data not found in response");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-500 to-purple-500 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Login</h1>
          <img
            className="mt-4"
            src="https://t4.ftcdn.net/jpg/02/14/17/83/240_F_214178320_TvxKfDNFc7O77LVrDGDGujfJqX19w0wG.jpg"
            alt=""
          />
          <p className="text-white mt-1">
            Big Billion Day Sale: Everything you need to know about the
            discounts, offers
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white" onSubmit={handleLogin}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {message && (
              <p className="message text-red-800 pl-20 font-bold">{message}</p>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <Link to="/Signup">Register Here!</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
