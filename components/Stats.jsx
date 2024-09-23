import React from 'react'
// import './Stats.css'

const Stats = () => {
    return (
        <div className='stats flex sm-max:flex-col sm-max:gap-4 flex justify-between px-7 sm-max:flex-col sm-max:items-center sm-max:space-y-4'>
            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm-max:w-full" data-aos="fade-down">
                <i class="fa-solid fa-ribbon fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#FF885B] font-bold">Excellence</div>
                <div className="stat-text text-[#54595f] text-center sm-max:text-[15px]">
                    AIFBF intends to offer exceptional <br /> quality services to its members
                </div>
            </div>

            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm-max:w-full" data-aos="fade-up">
                <i class="fa-solid fa-chart-simple fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#FF885B] font-bold">GROWTH</div>
                <div className="stat-text text-[#54595f] text-center sm-max:text-[15px]">
                    AIFBF aims at to achieve sustainable <br /> growth through strategic partnerships
                </div>
            </div>
            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm-max:w-full" data-aos="fade-down">
                <i class="fa-solid fa-fire-flame-curved fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#FF885B] font-bold">Impact</div>
                <div className="stat-text text-[#54595f] text-center sm-max:text-[15px]">
                    AIFBF intends to build a difference in <br /> business community setup
                </div>
            </div>
            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm-max:w-full" data-aos="fade-up">
                <i class="fa-solid fa-chart-pie fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#FF885B] font-bold">Reputations</div>
                <div className="stat-text text-[#54595f] text-center sm-max:text-[15px]">
                    AIFBF targets to build a strong <br /> federation which is strong and reliable
                </div>
            </div>

        </div>
    )
}

export default Stats
