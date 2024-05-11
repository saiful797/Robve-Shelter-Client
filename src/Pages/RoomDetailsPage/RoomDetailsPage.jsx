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

    const { room_id, description, price, image, offers, availability, room_size } = specificRoom;
    
    return (
        <div className="mt-10">     
            <h1 className="text-center text-5xl font-extrabold "><span className="text-5xl font-extralight">Room ID: </span><span className="text-yellow-600">{room_id}</span></h1>
            <div className="mt-10  grid lg:grid-cols-2 shadow-lg shadow-black rounded-lg">
                <div className="w-full">
                    <img className="h-full rounded-l-lg" src={image} alt="Tourist spot photo" />
                </div>

                <div className="relative">
                    <div className="p-5 space-y-3">
                        <h1 className="text-xl font-extralight">Average Cost(per Night): <span className="text-2xl font-bold">${price}</span></h1>

                        <h2 className="text-xl font-extralight">Room Size: <span className="text-2xl font-bold">{room_size}</span></h2>
                        {
                            availability === true? <h3 className="text-xl font-extralight">Room Available: <span className="text-2xl font-bold">Yes</span></h3>
                            :
                            <h3 className="text-xl font-extralight">Room Available: <span className="text-2xl font-bold">No</span></h3>
                        }
                        <div className="text-xl font-extralight flex">
                            Special Offers:
                            <div className="ml-2 grid md:grid-cols-2">
                                <h4 className="text-2xl font-bold">#{offers[0]}</h4>
                                <h4 className="text-2xl font-bold">#{offers[1]}</h4>
                            </div>
                        </div>
                        <p className="text-justify">
                            <span className="text-2xl font-bold text-stone-600">Description:</span> {description}
                        </p> 
                    </div>
                    <div className="w-full absolute bottom-0 left-0">
                        <button className="w-full rounded-none border-black btn-outline btn bg-black text2xl font-medium text-white rounded-br-lg"> Book Now </button> 
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;