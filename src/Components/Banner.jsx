import React from 'react'
import Container from './Container'
import Book from "../assets/book.jpg"

const Banner = () => {
    return (
        <>
            <section className='bg-[#161515] h-[764px] w-full'>
                <Container>
                    <div className="flex w-[100%] justify-between">
                        <div className="w-[50%]">
                            <img className='pl-[200px] pt-[180px] h-[550px]' src={Book} alt="" />
                        </div>
                        <div className="w-[50%]">
                            <h4 className='leading-[81.98px] mt-[200px] font-jsans text-[white] text-[53px] font-bold'>New Furniture Collection
                                Trends in 2024</h4>
                            <h6 className='pb-[20px] font-jsans text-[#8A8FB9] text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.</h6>

                            <div className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r to-[#e21111] text-white font-medium transition-all duration-300 hover:bg-red-500">
                                Specy fikacja pakietów Arcabit
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                            <div className="mt-[20px]">
                                <div className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-500 text-white font-medium transition-all duration-300 hover:bg-red-600">
                                    Specy fikacja pakietów
                                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                        →
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