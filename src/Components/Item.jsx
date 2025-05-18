import React from 'react'
import Items from "../assets/item.jpg"
import Bd from "../assets/bd.jpg"
import Bd1 from "../assets/bd1.jpg"

const Item = () => {
    return (
        <>
            <img src={Bd} className='w-full' alt="" />
            <div className="bg-[#201e1e] py-[50px]">
                <div className="w-[60%] mx-auto">
                    <div className="flex justify-between">
                        <div className="items-center">
                            <img src={Items} className='ml-[70px]' alt="" />
                            <p className='text-white p-[30px] font-bold'> Zaawansowana ochrona</p>
                        </div>
                        <div className="items-center">
                            <img src={Items} className='ml-[70px]' alt="" />
                            <p className='text-white p-[30px] font-bold'> Zaawansowana ochrona</p>
                        </div>
                        <div className="items-center">
                            <img src={Items} className='ml-[70px]' alt="" />
                            <p className='text-white p-[30px] font-bold'> Zaawansowana ochrona</p>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] mx-auto">
                    <div className="flex justify-between">
                        <div className="items-center">
                            <img src={Items} className='ml-[70px]' alt="" />
                            <p className='text-white p-[30px] font-bold'> Zaawansowana ochrona</p>
                        </div>
                        <div className="items-center">
                            <img src={Items} className='ml-[70px]' alt="" />
                            <p className='text-white p-[30px] font-bold'> Zaawansowana ochrona</p>
                        </div>
                        <div className="items-center">
                            <img src={Items} className='ml-[70px]' alt="" />
                            <p className='text-white p-[30px] font-bold'> Zaawansowana ochrona</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Bd1} className='w-full' alt="" />

        </>
    )
}

export default Item