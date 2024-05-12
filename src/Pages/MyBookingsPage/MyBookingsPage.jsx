import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../Hooks/useURL/useURL";
import useAuth from "../../Hooks/useAuth/useAuth";
import MyBookingsPageRows from "./MyBookingsPageRows/MyBookingsPageRows";

const MyBookingsPage = () => {
    const {user} = useAuth();
    const url = useURL();
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        axios.get(`${url}/myBookings`)
        .then(res => {
            setMyBookings(res.data);
            console.log(res.data);
        })
    },[url]);

    const allMyBookings = myBookings.filter(myBooking => myBooking.user_email === user.email);

    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-center text-lg">
                    <th className="border-2">Serial No.</th>
                    <th className="border-2">Room Image</th>
                    <th className="border-2">Room ID</th>
                    <th className="border-2">Price(Per Night)</th>
                    <th className="border-2">Special Offer(s)</th>
                    <th className="border-2">Actions</th>
                </tr>
                </thead>
                <tbody className="text-center">
                    {/* row 1 */}
                    {
                        allMyBookings.map((booking, indx) => <MyBookingsPageRows key={booking._id} indx={indx} booking={booking}/>)
                    }
                </tbody>    
            </table>
        </div>
    );
};

export default MyBookingsPage;