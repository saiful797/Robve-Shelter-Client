import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../Hooks/useURL/useURL";
import SpecificRoom from "./SpecificRoom";

const RoomsPage = () => {
    const [rooms, setRooms] = useState([]);
    const url = useURL();

    useEffect(() =>{
        axios.get(`${url}/rooms`)
         .then(res => {
            setRooms(res.data);
         })
    },[url])

    return (
        <div className="mt-10">
            <h1 className="text-6xl font-bold text-center mb-5">Available Rooms</h1>
            <div className="text-center grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    rooms.map(room => <SpecificRoom key={room._id} room = {room}/>)
                }
            </div>
        </div>
    );
};

export default RoomsPage;