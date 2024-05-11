import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useURL from "../../Hooks/useURL/useURL";

const RoomDetailsPage = () => {
    const data = useParams();
    const url = useURL();
    const [specificRoom, setSpecificRoom] = useState({});

    useEffect(() => {
        axios.get(`${url}/specificRoom/${data.id}`)
         .then(res => {
            setSpecificRoom(res.data);
         })

    },[url, data.id]);

    const { room_id, description, price, image } = specificRoom;

    
    return (
        <div className="mt-10">     
            <h1 className="text-center text-5xl font-extrabold "><span className="text-5xl font-extralight">Room ID: </span><span className="text-yellow-600">{room_id}</span></h1>
            <div className="mt-10  grid lg:grid-cols-2 shadow-lg shadow-black">
                <div className="w-full">
                    <img className="h-full" src={image} alt="Tourist spot photo" />
                </div>
                <div className="p-5">
                    <div className="md:flex md:justify-between">
                        <div className="">
                            <h4 className="text-xl font-extralight">Average Cost(per person): <span className="text-2xl font-bold">${price}</span></h4>
                        </div>
                    </div>
                    <p className="text-justify">
                        <span className="text-2xl font-bold text-stone-600">Description:</span> {description}
                    </p>      
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;