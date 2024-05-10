import axios from "axios";
import { useEffect } from "react";
import useURL from "../../../Hooks/useURL/useURL";

const FeaturedRooms = () => {
    // const [rooms, setRooms] = useState([]);
    const url = useURL();
    useEffect(()=>{
        axios.get(`${url}/rooms`)
         .then(res => {
            console.log(res.data);
         })
    },[url])
    return (
        <div>
            
        </div>
    );
};

export default FeaturedRooms;