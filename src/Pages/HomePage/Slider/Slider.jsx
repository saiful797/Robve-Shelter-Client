import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ReactTypeWriter from './TypeWriter/ReactTypeWriter';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const Slider = () => {
    
    return (
        <Swiper
            modules={[ Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 4000}}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className=' h-full '>
                        <img className='w-full md:rounded-l-lg h-[250px] md:h-[300px] lg:h-[450px]' src="https://i.postimg.cc/J7cb58xB/2.jpg" alt="Room Image.."/>
                    </div>
                    <div className='md:rounded-r-lg flex flex-col justify-center items-center md:space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4'>
                        <h1 className="text-stone-700 text-center md:text-4xl font-bold">Welcome To Our Hotel!</h1>
                         <div>
                            <ReactTypeWriter />
                         </div>
                        <button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full md:w-1/2 text-lg md:text-2xl md:font-medium text-white flex gap-2'>
                            Book Now 
                            <FaArrowRightToBracket />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className=' h-full '>
                        <img className='w-full md:rounded-l-lg h-[250px] md:h-[300px] lg:h-[450px]' src="https://i.postimg.cc/QtZTcYWb/19.jpg" alt="Room Image.."/>
                    </div>
                    <div className='md:rounded-r-lg flex flex-col justify-center items-center md:space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4'>
                        <h1 className="text-stone-700 text-center md:text-4xl font-bold">Welcome To Our Hotel!</h1>
                         <div className='mx-auto'>
                            <ReactTypeWriter />
                         </div>
                        <button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full md:w-1/2 text-lg md:text-2xl md:font-medium text-white flex gap-2'>
                            Book Now 
                            <FaArrowRightToBracket />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className=' h-full '>
                        <img className='w-full md:rounded-l-lg h-[250px] md:h-[300px] lg:h-[450px]' src="https://i.postimg.cc/bJ02g0xj/17.jpg" alt="Room Image.."/>
                    </div>
                    <div className='md:rounded-r-lg flex flex-col justify-center items-center md:space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4'>
                        <h1 className="text-stone-700 text-center md:text-4xl font-bold">Welcome To Our Hotel!</h1>
                         <div className='mx-auto'>
                            <ReactTypeWriter />
                         </div>
                        <button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full md:w-1/2 text-lg md:text-2xl md:font-medium text-white flex gap-2'>
                            Book Now 
                            <FaArrowRightToBracket />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className=' h-full '>
                        <img className='w-full md:rounded-l-lg h-[250px] md:h-[300px] lg:h-[450px]' src="https://i.postimg.cc/3Jf0txvW/15.jpg" alt="Room Image.."/>
                    </div>
                    <div className='md:rounded-r-lg flex flex-col justify-center items-center md:space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4'>
                        <h1 className="text-stone-700 text-center md:text-4xl font-bold">Welcome To Our Hotel!</h1>
                         <div className='mx-auto'>
                            <ReactTypeWriter />
                         </div>
                        <button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full md:w-1/2 text-lg md:text-2xl md:font-medium text-white flex gap-2'>
                            Book Now 
                            <FaArrowRightToBracket />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Slider;