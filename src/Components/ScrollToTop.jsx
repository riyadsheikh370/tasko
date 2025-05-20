import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    // স্ক্রল হলে show করো
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // scroll top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
                <FaArrowUp className="text-xl" />
            </button>
        )
    );
};

export default ScrollToTop;
