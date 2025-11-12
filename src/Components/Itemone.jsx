import React from 'react';
import Ih from '../assets/ih.jpg';
import Ss from '../assets/ss.png';

const Card = ({ title, description, img }) => {
  return (
    <div className="group w-[300px] h-[600px] mx-2 font-[Montserrat] perspective">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">

        {/* Front Side */}
        <div className="absolute w-full h-full bg-[#F9F9F9] text-black px-[35px] pt-[250px] [backface-visibility:hidden] flex flex-col items-center">
          <img src={img} alt={title} className="w-[66px] h-[66px] mb-4" />
          <div className="text-xl font-semibold text-[#060606] text-center">{title}</div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#e31e24] text-white px-[10px] flex items-center justify-center [backface-visibility:hidden] rotate-y-180">
          <p className="text-sm text-center leading-[200%]">{description}</p>
        </div>

      </div>
    </div>
  );
};

const Itemone = () => {
  const cardsData = [
    { title: 'File Protection', description: 'Monitors all files in real time and ensures system resources are optimized.', img: Ih },
    { title: 'Safe Browsing', description: 'Protects your online activity and prevents malware attacks from dangerous websites.', img: Ih },
    { title: 'Email Security', description: 'Scans all emails for threats to keep your inbox safe.', img: Ih },
  ];

  return (
    <>
      <div className="py-[50px] bg-white">
        <h4 className="text-[35px] text-center pb-[50px]">Główne funkcje ochronne pakietu</h4>
        <div className="w-[76%] mx-auto flex justify-between flex-wrap">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <img src={Ss} className="w-full" alt="" />
    </>
  );
};

export default Itemone;
