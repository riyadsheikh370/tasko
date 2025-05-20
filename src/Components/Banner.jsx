import React from 'react'
import Container from './Container'
import Book from "../assets/book.jpg"
import { HiArrowSmRight } from "react-icons/hi";


const Banner = () => {
    return (
        <>
            <section className='bg-[#161515] h-[540px] w-full '>
                <Container>
                    <div className="flex w-[100%] justify-between">
                        <div className="w-[50%] pt-[40px]">
                            <img className='pl-[310px] pt-[100px] h-[440px]' src={Book} alt="" />
                        </div>
                        <div className="w-[50%] pt-[20]">
                            <h4 className='leading-[81.98px] mt-[200px] font-jsans text-[white] text-[45px] font-bold'>Arcabit Internet Security</h4>
                            <h6 className='pb-[20px] font-jsans text-[#8A8FB9] text-[16px] font-bold'>Magna in est adipiscing
                                in phasellus non in justo.</h6>

                            <div className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8B0000] to-[#e21111] text-white font-medium transition-all duration-300 hover:from-[#a80000] hover:to-[#cc1010]">
                                Specy fikacja pakietów Arcabit
                                <span className="p-[4px] bg-[#b2b2b2]/30 rounded-[15px] ml-[10px]">
                                    <HiArrowSmRight />
                                </span>
                            </div>
                            <div className="mt-[20px]">
                                <div className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8B0000] to-[#e21111] text-white font-medium transition-all duration-300 hover:from-[#a80000] hover:to-[#cc1010]">
                                    Specy te fikacja
                                    <span className="p-[4px] bg-[#dddd]/30 bg-opa rounded-[15px] ml-[10px]">
                                        <HiArrowSmRight />
                                    </span>
                                </div>
                            </div>
                            <h5 className='mt-[20px] text-[#5e5252]'>30 dniowa wersja trial</h5>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner