import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sectorData = [
    { img: 'msme.png', caption: 'MSME / SME' },
    { img: 'skill.jpg', caption: 'Skill Development' },
    { img: 'women.png', caption: 'Women Empowerment' },
    { img: 'energy.webp', caption: 'Eco Friendly Projects' },
    { img: 'bank.jpeg', caption: 'Bank Sector' },
    { img: 'corp.jpg', caption: 'Corporate Governance' },
    { img: 'csr.jpeg', caption: 'CSR Project' },
    { img: 'agro.webp', caption: 'Agriculture Projects' },
    { img: 'food.jpg', caption: 'Food Processing' },
    { img: 'hr.webp', caption: 'Human Resource' },
    { img: 'edu.png', caption: 'Education' },
    { img: 'media.jpg', caption: 'Media and Entertainment' },
    { img: 'startup.jpg', caption: 'Startups' },
    { img: 'inter.webp', caption: 'International Trades' },
];

const Sectors = () => {
    return (
        <div className='sectors py-20 px-[50px] sm-max:px-[20px]' data-aos="fade-up">
            <div className="sectors-sub-heading text-center text-[#A2CA71] text-[20px] pb-3 sm-max:text-[15px]">
                Empowering Growth Across Key Industries
            </div>
            <div className="sectors-heading text-center text-[#387F39] text-[45px] pb-4 font-bold sm-max:text-[35px]">
                Sectors We Serve
            </div>
            <div className="sectors-info text-center text-[#696e77] text-[18px] pb-4 sm-max:text-[15px]">
                Our dynamic sectors cater to the diverse needs of our members and contribute significantly to the GDP
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={6} // Default slides per view
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {    // When window width is <= 640px (mobile)
                        slidesPerView: 1,
                    },
                    640: {  // When window width is > 640px (tablets and above)
                        slidesPerView: 2,
                    },
                    768: {  // When window width is > 768px (larger tablets)
                        slidesPerView: 3,
                    },
                    1024: { // When window width is > 1024px (desktops)
                        slidesPerView: 6,
                    }
                }}
            >
                {sectorData.map((sector, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide-inner flex flex-col justify-center align-center">
                            <img className="swiper-slide-image" src={sector.img} alt={sector.caption} />
                            <div className="elementor-image-carousel-caption text-center font-bold">
                                {sector.caption}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sectors;
