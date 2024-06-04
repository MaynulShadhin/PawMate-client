
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import cat from '../../../../assets/cat.jpg'
import dog from '../../../../assets/dog.jpg'
import rabbit from '../../../../assets/rabbit.jpg'
import fish from '../../../../assets/fish.jpg'
import bird from '../../../../assets/bird.jpg'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PetCategory = () => {
    const [pets,setPets] = useState([])
    const{category} = useParams();

    useEffect(()=>{
        const petsByCategory = async()=>{
            try{
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/pets/${category}`)
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        petsByCategory();
    },[category])

    return (
        <div className="my-28 mx-auto container">
            <h2 className="text-4xl text-center font-semibold mb-12">Pet Categories</h2>
            <div className='flex items-center justify-center'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <Link>
                            <img src={cat} alt="" />
                            <h2 className='absolute flex items-center justify-center z-10 text-white top-5 text-xl md:text-3xl font-bold bg-white bg-opacity-15 px-10'>Cat</h2>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link>
                            <img src={dog} alt="" />
                            <h2 className='absolute flex items-center justify-center z-10 text-white top-5 text-xl md:text-3xl font-bold bg-black bg-opacity-15 px-10'>Dog</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <img src={rabbit} alt="" />
                            <h2 className='absolute flex items-center justify-center z-10 text-white top-5 text-xl md:text-3xl font-bold bg-white bg-opacity-15 px-10'>Rabbit</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <img className='' src={fish} alt="" />
                            <h2 className='absolute flex items-center justify-center z-10 text-white top-5 text-xl md:text-3xl font-bold bg-white bg-opacity-15 px-10'>Fish</h2>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <img src={bird} alt="" />
                            <h2 className='absolute flex items-center justify-center z-10 text-white top-5 text-xl md:text-3xl font-bold bg-white bg-opacity-15 px-10'>Bird</h2>
                        </Link>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default PetCategory;