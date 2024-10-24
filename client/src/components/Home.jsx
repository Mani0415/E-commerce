// import React, { useState } from "react";
// import logo from "../icons/Tamil.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
//   };

//   return (
//     <header className="flex shadow-sm bg-gray-200 font-[sans-serif] min-h-[70px] h-20">
//       <div className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative w-full">
//         <div className="flex items-center">
//           {/* Menu Toggle Button */}
//           <button onClick={toggleMenu} className="md:hidden">
//             <svg
//               className="w-7 h-7"
//               fill="#000"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//           <a href="javascript:void(0)" className="ml-8">
//             <img src={logo} alt="logo" className="w-20" />
//           </a>
//         </div>

//         <div className="bg-gray-100 flex border-2 max-md:order-1 border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-4 rounded-sm h-11 lg:w-2/4 w-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 192.904 192.904"
//             width="16px"
//             className="fill-blue-700 mr-4 rotate-90"
//           >
//             <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
//           </svg>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full outline-none bg-transparent text-black text-sm"
//           />
//         </div>

//         <div className="hidden md:flex items-center space-x-8 ml-auto">
//           {/* Example: Home, Team, Feature links */}
//         </div>
//       </div>

//       {/* Collapsible Menu for Small Screens */}
//       <div
//         id="collapseMenu"
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } before:fixed before:bg-black before:opacity-40 before:inset-0 lg:hidden`}
//       >
//         <button
//           onClick={toggleMenu}
//           className="fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 fill-black"
//             viewBox="0 0 320.591 320.591"
//           >
//             <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
//             <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
//           </svg>
//         </button>

//         <ul className="block space-x-4 space-y-3 fixed bg-white w-full max-w-[300px] top-0 left-0 p-4 h-full shadow-md overflow-auto z-50">
//           <li className="pb-4 px-3">
//             <a href="javascript:void(0)">
//               <img
//                 src="https://readymadeui.com/readymadeui.svg"
//                 alt="logo"
//                 className="w-36"
//               />
//             </a>
//           </li>
//           {/* Menu items */}
//           <li className="border-b py-3 px-3">
//             <a
//               href="javascript:void(0)"
//               className="hover:text-[#007bff] text-[#007bff] block font-semibold text-base"
//             >
//               Home
//             </a>
//           </li>
//           <li className="border-b py-3 px-3">
//             <a
//               href="javascript:void(0)"
//               className="hover:text-[#007bff] text-black block font-semibold text-base"
//             >
//               Team
//             </a>
//           </li>
//           {/* Other items */}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

