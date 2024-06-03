import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-72 md:h-[750px] lg:h-[800px]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className='space-y-2 lg:space-y-4 ml-4 lg:ml-44 lg:pt-36'>
                    <h2 className='text-2xl lg:text-4xl text-white font-bold'>Searching for a</h2>
                    <h1 className='text-3xl lg:text-6xl text-[#F07C3D] font-bold'>best Friend</h1>
                    <p className='text-white w-6/12'>Explore our selection of lovable pets awaiting their forever homes. Your new best friend is just a click away.</p>
                    <Link to="pet-listing">
                        <button className='text-white bg-[#F07C3D] px-8 py-3 font-semibold rounded-sm hover:bg-[#f3732e] hover:scale-105 ease-in duration-100'>Adopt A pet</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;