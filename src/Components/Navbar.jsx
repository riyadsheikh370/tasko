import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Container from './Container';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 py-4 w-full transition-colors duration-500 ${
        scrolled ? 'bg-white text-black shadow-md' : 'bg-[#161515] text-white'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex w-[20%]">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-[60%] flex justify-between">
            <div className="relative group w-[13%] inline-block">
              <a
                className={`flex items-center ml-5 p-[7px] border-2 rounded-[20px] ${
                  scrolled
                    ? 'border-black text-black'
                    : 'border-[#f5efef] text-white'
                }`}
              >
                Category
                <IoIosArrowDown
                  className={`text-[16px] mt-[3px] ml-[2px] ${
                    scrolled ? 'text-black' : 'text-white'
                  }`}
                />
              </a>

              <div className="absolute top-[60px] h-[400px] w-[260px] z-50">
                <div
                  className={`opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-opacity duration-[4000ms] ease-in-out group-hover:duration-[300ms]
                    bg-white h-full w-full shadow-md`}
                >
                  <ul>
                    <li className="text-[#2E2E2E] pt-[10px] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Womens’ & Girls’ Fashion
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Health & Beauty
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Watches, Bags, Jewellery
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Men's & Boys' Fashion
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Mother & Baby
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Electronics Devices
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      TV & Home Appliances
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Electronic Accessories
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Groceries
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Home & Lifestyle
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Sports & Outdoors
                    </li>
                    <li className="text-[#2E2E2E] hover:text-[red] text-[16px] py-1 pl-3 flex items-center">
                      Automobile
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* অন্যান্য লিঙ্কগুলো একইভাবে থাকবে */}
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
            <a
              className={`relative ml-5 p-[7px] group ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Category
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-black' : 'bg-[#f5efef]'
                }`}
              ></span>
            </a>
           

            {/* আরও লিঙ্কস লাগলে এখানেই যোগ করো */}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
