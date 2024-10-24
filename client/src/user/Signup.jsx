import React, { useEffect, useState } from "react";
import "../css/Signup.css";
import "../App.css";

const Signup = () => {
  const [viewUser, setViewUser] = useState([]);
  const [Newuser, setNewUser] = useState("");
  const [Newemail, setNewEmail] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error,setError]=useState('')

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/user")
      .then((res) => res.json())
      .then((json) => setViewUser(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const NewRegister = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    if (!Newuser.trim() || !Newemail.trim() || !Newpassword.trim()) {
      setMessage("Please Enter the All Filleds");
      return;
    }
    const name = Newuser.trim();
    const email = Newemail.trim();
    const password = Newpassword.trim();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isEmail) {
        setError("Invalid Email ID");
        return;
      }

    await fetch("http://localhost:3000/api/v1/user/register", {
      method: "POST",
      body: JSON.stringify(isEmail?{ name, email, password }:'fecth Error'),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setViewUser([...viewUser, data]);
        setMessage("Register Successfull");
        // Clear the form fields after successful registration
        setNewUser("");
        setNewEmail("");
        setNewPassword("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Signup</h1>
            <img
              className="mt-4"
              src="https://t4.ftcdn.net/jpg/10/05/47/53/240_F_1005475352_Q2XDMC4acWfnZyMwGxeSDWHA1M3FMhA3.jpg"
              alt=""
            />
            <p className="text-white mt-1">
              Check top deals, offers you can’t miss
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
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            {message && (
              <p className="message text-red-800 pl-18 pt-0 font-bold">
                {message}
              </p>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
                value={Newuser}
                onChange={(e) => setNewUser(e.target.value)}
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
                value={Newemail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
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
                value={Newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={NewRegister}
            >
              Signup
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Forgot Password ?
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
