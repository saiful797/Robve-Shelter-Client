import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;