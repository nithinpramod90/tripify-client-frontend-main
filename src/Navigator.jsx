import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Navigator = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navigate = useNavigate()

  return (
    <div className=''>
         <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 ">
                    <FaBars className="text-black text-2xl md:text-3xl cursor-pointer" onClick={toggleNav} />
                </div>
      {isNavOpen && (
                    <div className="absolute top-0 right-0 w-64 h-full bg-white/10 backdrop-blur-lg shadow-lg z-40 flex flex-col items-start p-4">
                        <button className="text-white font-bold text-lg mb-4" onClick={toggleNav}>Close</button>
                        <nav className="flex flex-col space-y-2">
                            <a onClick={() => { navigate('/about-us') }} className="text-black cursor-pointer">About Us</a>
                            <a onClick={() => { navigate('/blogs') }} className="text-black cursor-pointer">Blogs</a>
                            <a onClick={() => navigate('/Photo-Gallery')} className="text-black cursor-pointer">Gallery</a>
                            <a onClick={() => navigate('/pink-passport')} className="text-black cursor-pointer">Pink Passport</a>
                            <a onClick={() => navigate('/Coprate-TravelPage')} className="text-black cursor-pointer">Corporate travel</a>
                            <a onClick={() => navigate('/Land-Explore')} className="text-black cursor-pointer">LandXplorer</a>
                            <a onClick={() => navigate('/Payment-Form')} className="text-black cursor-pointer">Make Payment</a>
                            <a onClick={() => navigate('/Video-Gallery')} className="text-black cursor-pointer">Video Gallery</a>
                        </nav>       
                    </div>
                )}
    </div>
  )
}

export default Navigator
