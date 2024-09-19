import React from 'react'

const Vision = () => {
    return (
        <div className='vision-container py-[130px] flex justify-evenly sm-max:gap-10'>
            <div className="vision-card w-[42%] sm-max:w-[90%]" data-aos="fade-right">
                <div className="vision-header font-bold text-[42px] text-[#387F39] text-center">AIFBF VISION</div>
                <p className="pt-5 text-[#696e77] sm-max:pt-2">
                    AIFBF has a vision to be the facilitator for the growth of the economy <br /> and focussing on financial eco system and also enhancement of skills <br /> as needed for the growth
                </p>
            </div>

            <div className="vision-card w-[42%] sm-max:w-[90%]" data-aos="fade-left">
                <div className="vision-header font-bold text-[42px] text-[#387F39] text-center">AIFBF MISSION</div>
                <p className="pt-5 text-[#696e77] sm-max:pt-2">
                    AIFBF intends to act as a conduit between the government and the <br /> beneficiary on key economic issues on policies programs and <br /> regulations by leveraging inputs from the key stakeholders
                </p>
            </div>
        </div>
    )
}

export default Vision
