import React from 'react'
import Logo from "../assets/logo.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Container from './Container';

const Footer = () => {
    return (
        <section className='bg-[#161515] pt-[50px]'>
            <Container>
                <div className="container mx-auto w-[80%] px-[20px] md:px-[0px]">
                    <div className="main py-[55px] md:flex md:justify-between">
                        <div className="w-[100%] md:w-[40%]">
                            <div className="ul_box flex">
                                <ul className='w-[40%] md:text-start'>
                                    <li className='font-sans text-[16px] font-bold text-[#6D6D6D] leading-[23px] pb-[10px]'>MENU</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Home</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Shop</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>About</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Contect</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>About</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Contect</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Journal</li>
                                </ul>
                                <ul className='w-[20%%]'>
                                    <li className='font-sans text-[16px] font-bold text-[#6D6D6D] leading-[23px] pb-[10px]'>HELP</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Privacy Policy</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Terms & Conditions</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Special E-shop</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Terms & Conditions</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Special E-shop</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Shipping</li>
                                    <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>Secure Payments</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[100%] flex flex-wrap md:w-[60%]">
                            <ul className='w-[100%] md:w-[50%] pt-[0px]'>
                                <li className='text-[16px] text-[#6D6D6D] font-[700] font-sans'>+880 1813 90 42 57</li>
                                <li className='text-[16px] text-[white] font-[700] font-sans'>gmalsiam4200@gmail.com</li>
                                <li className='font-sans text-[16px] font-[400] py-[3px] text-[white] leading-[23px]'>575 Crescent Ave. Quakertown, PA 18951</li>
                            </ul>
                            <div className="mt-[30px] md:mt-0 w-[100%] md:w-[50%] image">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <div className="border-b-[1px] border-b-[#6c6767]"></div>
            <div className="py-[30px] w-[80%] mx-auto">
                <span className=' text-center font-sans text-[14px] font-[400] py-[3px] text-[#6D6D6D] leading-[23px]'>Figma Template by Adveits</span>
            </div>
        </section>
    )
}

export default Footer