import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../Hooks/useURL/useURL";

const MyBookingsPage = () => {
    const url = useURL();
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        axios.get(`${url}/myBookings`)
        .then(res => {
            setMyBookings(res.data);
            console.log(res.data);
        })
    },[url]);

    return (
        <div>
            <h1>Hello from my bookings page: {myBookings.length}</h1>
        </div>
    );
};

export default MyBookingsPage;