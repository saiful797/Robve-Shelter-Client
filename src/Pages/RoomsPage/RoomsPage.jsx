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
    },[url]);
    
    const availableRooms = rooms.filter(room => room.availability === true);

    return (
        <div className="mt-7">
            <h1 className="text-6xl font-bold text-center mb-10">Available Rooms</h1>
            <div className="text-center grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    availableRooms.map(room => <SpecificRoom key={room._id} room = {room}/>)
                }
            </div>
        </div>
    );
};

export default RoomsPage;