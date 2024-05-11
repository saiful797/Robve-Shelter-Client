import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useURL from "../../Hooks/useURL/useURL";
import toast, { Toaster } from "react-hot-toast";

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

    const { room_id, description, price, image, offers, availability, room_size } = specificRoom;

    const handleUnavailableRoom = () => {
        toast.error('Room Unavailable');
        return;
    }
    
    return (
        <div className="mt-10">     
            <h1 className="text-center text-5xl font-extrabold "><span className="text-5xl font-extralight">Room ID: </span><span className="text-yellow-600">{room_id}</span></h1>
            <div className="mt-10  grid lg:grid-cols-2 shadow-lg shadow-black rounded-lg">
                <div className="w-full">
                    <img className="h-full rounded-l-lg" src={image} alt="Tourist spot photo" />
                </div>

                <div className="relative">
                    <div className="p-5 space-y-3">
                        <h1 className="text-xl font-extralight">Average Cost(per Night): <span className="text-2xl font-bold">${price-1000}</span></h1>

                        <h2 className="text-xl font-extralight">Room Size: <span className="text-2xl font-bold">{room_size}</span></h2>
                        {
                            availability === true? <h3 className="text-xl font-extralight">Room Availability
                            : <span className="text-2xl font-bold text-green-600">Available</span></h3>
                            :
                            <h3 className="text-xl font-extralight">Room Availability: <span className="text-2xl font-bold text-red-600">Unavailable</span></h3>
                        }
                        <h3 className="text-xl font-extralight flex">
                            Special Offer(s): <span className="ml-2 text-2xl font-bold">#{offers}</span>
                        </h3>
                        <p className="text-justify">
                            <span className="text-2xl font-bold text-stone-600">Description: </span> {description}
                        </p> 
                    </div>
                    <div className="w-full absolute bottom-0 left-0">
                        {
                            availability === true?<button className="w-full rounded-none border-black btn-outline btn bg-black text-2xl font-medium text-white rounded-br-lg"> Book Now </button>
                            :
                            <button onClick={handleUnavailableRoom} className="w-full rounded-none border-black btn-outline btn bg-black text-2xl font-medium text-white rounded-br-lg"> Book Now </button>
                        } 
                    </div>   
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default RoomDetailsPage;