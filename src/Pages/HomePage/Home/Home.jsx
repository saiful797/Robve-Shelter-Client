import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../Shared/ScrollToTop/ScrollToTop";
import NewsLetterSubscribe from "../NewsLetterSubscrib/NewsLetterSubscribe";
import Slider from "../Slider/Slider";
import FeaturedRooms from "../featuredRooms/FeaturedRooms";
import OffersModal from "../OffersModal/OffersModal";
import { useState } from "react";

const Home = () => {
    const [showPopup, setShowPopup] = useState(true);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="mt-5">
            <Helmet>
                <title>Rove Shelter | Home</title>
            </Helmet>

            {/* Slider */}
            <Slider />

            <div className="relative">
                {/* Home page content */}
                {showPopup && <OffersModal onClose={handleClosePopup} />}
            </div>
            
            <h1 className="text-6xl font-bold text-center mt-10 mb-5">
                    Featured Rooms
                </h1>
            <div className=" mx-auto bg-slate-400 pt-5 pb-5 rounded-3xl">
                <FeaturedRooms />
            </div>
            
            <div className="mx-auto flex justify-center items-center shadow shadow-black mt-16 lg:w-3/4">
                <NewsLetterSubscribe />
            </div>

            <div className="w-full mt-10">
                <h1 className="text-5xl font-bold text-center mb-5">Our Hotels Locations</h1>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=18BVm-G5RPqI1t2fkL31jL12NfxxJAO0&ehbc=2E312F&noprof=1"
                className="w-full h-[400px]"></iframe>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Home;