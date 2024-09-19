import React from 'react'
// import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about-us px-[50px] flex justify-evenly sm-max:flex-col sm-max:px-[20px]' data-aos="fade-down">
            <img className='h-[560px] w-[470px] sm-max:h-auto sm-max:w-auto' src="poster.jpg" alt="" />

            <div className="aboutus-content w-[50%] sm-max:w-full">
                <div className="aboutus-info">
                    <div className="aboutus-sub-header text-[20px] text-[#A2CA71] text-center sm-max:text-[15px] sm-max:text-[15px]">
                        About AIFBF
                    </div>
                    <div className="aboutus-header text-[45px] text-[#387F39] font-bold text-center sm-max:text-[35px]">
                        AIFBF- ALL INDIA <br /> FINANCIAL BORROWERS <br /> FEDERATIONS
                    </div>
                    <p className='pt-4 text-[18px] text-[#696e77] text-center sm-max:text-[15px]' style={{ lineHeight: '1.4' }}> AIFBF is a well conceived idea to bring in the actionable insights to strengthen the  financial borrowers and offering the lawful solutions for running the business smoothly without any hurdles.With a vision for creating a transform India AIFBF acts a catalyst and intermediary between policy makers and the government. With forward looking approach AIFBF is very proactive and aggressive in its approach in empowering for a better future</p>
                </div>

                <a href="/contactus">
                    <div className="flex justify-center mt-5 py-4 text-white rounded-xl font-bold bg-[#387F39] min-w-[160px]">
                        <button className='contact-btn'>Contact Us</button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AboutUs
