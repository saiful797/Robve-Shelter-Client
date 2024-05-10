import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="mt-5">
            {/* Slider */}
            <Slider />

            <div className="w-full mt-10">
                <h1 className="text-3xl font-bold text-center mb-5">Our Hotels Locations</h1>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=18BVm-G5RPqI1t2fkL31jL12NfxxJAO0&ehbc=2E312F&noprof=1" width="100%" height="500"></iframe>
            </div>
        </div>
    );
};

export default Home;