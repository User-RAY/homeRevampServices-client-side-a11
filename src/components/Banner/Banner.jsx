import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            >
            <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/BCxR0SP/plumber-services-1000x1000-1.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex flex-col justify-center items-center max-h-[40rem] min-h-[40rem] w-full text-5xl text-white mx-auto text-center bg-black/[.3]'><h1>Fix It Fast, Fix It Right!</h1><p className='text-base mt-2'>Your Trusted Partner for Reliable Home Repairs.</p></div></div></SwiperSlide>
            <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/sjjYh12/pexels-bidvine-517980-1249611-1-1.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex flex-col justify-center items-center max-h-[40rem] min-h-[40rem] w-full text-5xl text-white mx-auto text-center bg-black/[.3]'><h1>Bringing Life Back to Your Home</h1><p className='text-base mt-2'>Expert Repairs and Services at Your Doorstep.</p></div></div></SwiperSlide>
            <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/qswMshm/pexels-tima-miroshnichenko-6474481-1.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex flex-col justify-center items-center max-h-[40rem] min-h-[40rem] w-full text-5xl text-white mx-auto text-center bg-black/[.3]'><h1>Because Every Home Deserves the Best Care</h1><p className='text-base mt-2'>Affordable. Professional. Always On Time.</p></div></div></SwiperSlide>
        </Swiper>
            
        </div>
    );
};

export default Banner;