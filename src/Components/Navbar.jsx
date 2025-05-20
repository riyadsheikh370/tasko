import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Container from './Container';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownWrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsDropdownOpen(false); // scroll korle close
    };

    const handleClickOutside = (e) => {
      if (dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(e.target)) {
        setIsDropdownOpen(false); // baire click korle close
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mouse Enter = clearTimeout + open dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  // Mouse Leave = start 300ms delay before closing
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  return (
    <nav className={`fixed z-50 py-4 w-full transition-colors duration-500 ${scrolled ? 'bg-white text-black shadow-md' : 'bg-[#161515] text-white'}`}>
      <div className='w-[90%] mx-auto'>
        <div className="flex items-center justify-between">
          <div className="flex w-[20%]">
            <img src={Logo} alt="logo" />
          </div>

          <div className="w-[60%] flex justify-between items-center">
            {/* Dropdown Wrapper */}
            <div
              ref={dropdownWrapperRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-[13%]"
            >
              <a
                className={`flex items-center ml-5 w-[110%] py-[3px] pl-[20px] border-2 rounded-[20px] cursor-pointer ${scrolled ? 'border-black text-black' : 'border-[#f5efef] text-white'}`}
              >
                Category
                <IoIosArrowDown className={`text-[16px] mt-[3px] ml-[2px] ${scrolled ? 'text-black' : 'text-white'}`} />
              </a>

              {isDropdownOpen && (
                <div className="absolute top-[60px] h-[400px] w-[260px] bg-white shadow-md z-50 transition-all duration-300">
                  <ul className="overflow-y-auto h-full py-2">
                    {[
                      "Womens’ & Girls’ Fashion",
                      "Health & Beauty",
                      "Watches, Bags, Jewellery",
                      "Men's & Boys' Fashion",
                      "Mother & Baby",
                      "Electronics Devices",
                      "TV & Home Appliances",
                      "Electronic Accessories",
                      "Groceries",
                      "Home & Lifestyle",
                      "Sports & Outdoors",
                      "Automobile"
                    ].map((item, index) => (
                      <li key={index} className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Static nav links */}
            {Array(6).fill("Category").map((item, i) => (
              <a key={i} className={`relative ml-5 p-[7px] group cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>
                {item}
                <span className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-black' : 'bg-[#f5efef]'}`}></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
