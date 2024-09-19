import { useState, useEffect } from 'react'
// import './Home.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats'
import Vision from '../components/Vision'
import AboutUs from '../components/AboutUs'
import Sectors from '../components/Sectors'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true
    })
  })

  return (
    <div className='main w-screen box-border overflow-hidden sm-max:w-full'>
      <Navbar />

      <HeroSection />

      <div className="objectives flex flex-col justify-center pt-20 pb-20">
        <span className="obj-header text-[20px] text-[#A2CA71] text-center pb-2 sm-max:text-[18px]">OUR OBJECTIVES</span>
        <span className="obj-text text-[30px] text-[#387F39] font-bold text-center sm-max:text-[25px] sm-max:px-4">AIFBF has the following positive objects designed to meet the progressive <br />agenda and are as under
        </span>
      </div>

      <Stats />

      <Vision />

      <AboutUs />

      <Sectors />

      <footer className="bg-[#387F39] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-center">AIFBF</h3>
            <p className="mb-2 text-center sm-max:text-[15px]">Your trusted partner in business facilitation.</p>
            <p className="text-sm text-center">Working Hours: Sun-Sat, 09am-5pm</p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-center">Contact Us</h3>
            <p className="mb-2 text-center sm-max:text-[15px]">
              <a href="tel:+91 9741134001" className="hover:text-[#F6E96B]">
                <span className="font-semibold">Call:</span> +91 9741134001
              </a>
            </p>
            <p className="mb-2 text-center sm-max:text-[15px]">
              <a href="mailto:info@aifbf.com" className="hover:text-[#F6E96B]">
                <span className="font-semibold">Mail:</span> info@aifbf.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Follow Us</h3>
            <ul className="flex space-x-4 justify-center sm-max:gap-2">
              <li>
                <a href="#" target="_blank" rel="nofollow" className="bg-[#F6E96B] text-[#387F39] h-10 w-10 flex items-center justify-center rounded-full hover:bg-white transition-colors duration-300 ml-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="nofollow" className="bg-[#F6E96B] text-[#387F39] h-10 w-10 flex items-center justify-center rounded-full hover:bg-white transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="nofollow" className="bg-[#F6E96B] text-[#387F39] h-10 w-10 flex items-center justify-center rounded-full hover:bg-white transition-colors duration-300">
                  <i className="fab fa-skype"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="nofollow" className="bg-[#F6E96B] text-[#387F39] h-10 w-10 flex items-center justify-center rounded-full hover:bg-white transition-colors duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2023 AIFBF. All rights reserved.</p>
        </div>
      </div>
    </footer>

      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </div>
  )
}

export default Home
