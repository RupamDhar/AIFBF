import React from 'react'
// import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section flex sm-max:flex-col p-[80px_25px_50px] sm-max:p-[50px_25px]' data-aos="fade-up">
            <div className="hero-content flex flex-col justify-center items-center gap-5">
                <div className="hero-info w-full h-fit">
                    <div className="hero-sub-header text-[20px] sm-max:text-[18px] pb-3 text-[#A2CA71] text-center">
                        All India Financial Borrowers Federations
                    </div>
                    <div className="hero-header text-[45px] sm-max:text-[35px] leading-[52px] font-semibold text-[#387F39] text-center">
                        Bridging Gaps in Financial <br /> Inclusivity and Advocacy
                    </div>
                    <p className='text-[#696e77] text-center pt-[15px] sm-max:text-[16px]'> AIFBF is a well conceived idea to bring in the actionable insights to strengthen the  financial borrowers and offering the lawful solutions for running the business smoothly without any hurdles.With a vision for creating a transform India AIFBF acts a catalyst and intermediary between policy makers and the government. With forward looking approach AIFBF is very proactive and aggressive in its approach in empowering for a better future</p>
                </div>

                <div className="flex justify-centercontact-btn text-center px-5 py-2 text-white rounded-xl font-bold bg-[#387F39] min-w-[160px] leading-[26px]">
                    <button className='contact-btn'>
                        <div className="text-center w-full">Contact Us</div>
                    </button>
                </div>

                <ul class="list_box flex flex-wrap justify-center sm-max:w-full">
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-money-check" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="#">
                                Financial Guidance                </a>
                        </div>
                    </li>
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-building" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="#">
                                Loan Support                </a>
                        </div>
                    </li>
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-business-time" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="#">
                                Business Finance
                            </a>
                        </div>
                    </li>
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-tractor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M528 336c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 112c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24zm80-288h-64v-40.2c0-14.12 4.7-27.76 13.15-38.84 4.42-5.8 3.55-14.06-1.32-19.49L534.2 37.3c-6.66-7.45-18.32-6.92-24.7.78C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14A47.914 47.914 0 0 0 277.45 0H144c-26.47 0-48 21.53-48 48v146.52c-8.63-6.73-20.96-6.46-28.89 1.47L36 227.1c-8.59 8.59-8.59 22.52 0 31.11l5.06 5.06c-4.99 9.26-8.96 18.82-11.91 28.72H22c-12.15 0-22 9.85-22 22v44c0 12.15 9.85 22 22 22h7.14c2.96 9.91 6.92 19.46 11.91 28.73l-5.06 5.06c-8.59 8.59-8.59 22.52 0 31.11L67.1 476c8.59 8.59 22.52 8.59 31.11 0l5.06-5.06c9.26 4.99 18.82 8.96 28.72 11.91V490c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-7.14c9.9-2.95 19.46-6.92 28.72-11.91l5.06 5.06c8.59 8.59 22.52 8.59 31.11 0l31.11-31.11c8.59-8.59 8.59-22.52 0-31.11l-5.06-5.06c4.99-9.26 8.96-18.82 11.91-28.72H330c12.15 0 22-9.85 22-22v-6h80.54c21.91-28.99 56.32-48 95.46-48 18.64 0 36.07 4.61 51.8 12.2l50.82-50.82c6-6 9.37-14.14 9.37-22.63V192c.01-17.67-14.32-32-31.99-32zM176 416c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm22-256h-38V64h106.89l41.15 96H198z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="">
                                Agriculture Empowerment                </a>
                        </div>
                    </li>
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-university" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="">
                                Legal Aid                </a>
                        </div>
                    </li>
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-file-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="">
                                Corporate Solutions                </a>
                        </div>
                    </li>
                    <li className='w-fit mb-[15px] p-[5px]'>
                        <div class="flex gap-2 w-fit">

                            <div class="icon trans">
                                <svg  aria-hidden="false" className="e-font-icon-svgh-[30px] w-[30px] e-fas-money-check" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="#A2CA71" d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z"></path></svg>                                    </div>



                            <a class="links text-[#0f3567]" href="#">
                                Finance Awareness                </a>
                        </div>
                    </li>
                </ul>
            </div>

            <img src="img.png" className='h-[735px] w-1/2 sm-max:h-auto sm-max:w-full' alt="" />
        </div>
    )
}

export default HeroSection
