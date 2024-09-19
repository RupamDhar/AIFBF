import React from 'react'
// import './Stats.css'

const Stats = () => {
    return (
        <div className='stats flex sm:flex-col sm:gap-4 flex justify-between px-7 sm:flex-col sm:items-center sm:space-y-4'>
            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm:w-full" data-aos="fade-down">
                <i class="fa-solid fa-ribbon fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#7a7a7a] font-bold">Excellence</div>
                <div className="stat-text text-[#54595f] text-center sm:text-[15px]">
                    AIFBF intends to offer exceptional <br /> quality services to its members
                </div>
            </div>

            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm:w-full" data-aos="fade-up">
                <i class="fa-solid fa-chart-simple fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#7a7a7a] font-bold">GROWTH</div>
                <div className="stat-text text-[#54595f] text-center sm:text-[15px]">
                    AIFBF aims at to achieve sustainable <br /> growth through strategic partnerships
                </div>
            </div>
            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm:w-full" data-aos="fade-down">
                <i class="fa-solid fa-fire-flame-curved fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#7a7a7a] font-bold">Impact</div>
                <div className="stat-text text-[#54595f] text-center sm:text-[15px]">
                    AIFBF intends to build a difference in <br /> business community setup
                </div>
            </div>
            <div className="stat flex flex-col justify-center items-center p-3 shadow-lg sm:w-full" data-aos="fade-up">
                <i class="fa-solid fa-chart-pie fa-4x" style={{ color: '#387F39' }}></i>
                <div className="stat-header text-[24px] text-[#7a7a7a] font-bold">Reputations</div>
                <div className="stat-text text-[#54595f] text-center sm:text-[15px]">
                    AIFBF targets to build a strong <br /> federation which is strong and reliable
                </div>
            </div>

        </div>
    )
}

export default Stats
