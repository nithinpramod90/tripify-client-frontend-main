import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Navigator = ({text,bg,icone}) => {
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
                    <FaBars className={`text-${icone?icone:'white'} text-2xl md:text-3xl cursor-pointer`} onClick={toggleNav} />
                </div>
      {isNavOpen && (
                    <div className={`absolute top-0 right-0 w-64 h-full ${bg ? bg : 'bg-white/10'} backdrop-blur-lg shadow-lg z-40 flex flex-col items-start p-4`}>
                        <button className={`${text?text:'text-white'} font-bold text-lg mb-4`} onClick={toggleNav}>Close</button>
                        <nav className={`flex flex-col space-y-2 ${text?text:'text-gray-300'}`}>
                            <a onClick={() => { navigate('/about-us') }} className=" cursor-pointer">About Us</a>
                            <a onClick={() => { navigate('/blogs') }} className=" cursor-pointer">Blogs</a>
                            <a onClick={() => navigate('/Photo-Gallery')} className=" cursor-pointer">Gallery</a>
                            <a onClick={() => navigate('/pink-passport')} className=" cursor-pointer">Pink Passport</a>
                            <a onClick={() => navigate('/Coprate-TravelPage')} className=" cursor-pointer">Corporate travel</a>
                            <a onClick={() => navigate('/Land-Explore')} className=" cursor-pointer">LandXplorer</a>
                            <a onClick={() => navigate('/Payment-Form')} className=" cursor-pointer">Make Payment</a>
                            <a onClick={() => navigate('/Video-Gallery')} className=" cursor-pointer">Video Gallery</a>
                        </nav>       
                    </div>
                )}
    </div>
  )
}

export default Navigator
