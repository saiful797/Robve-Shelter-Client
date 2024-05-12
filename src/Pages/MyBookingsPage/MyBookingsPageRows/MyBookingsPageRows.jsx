import PropTypes from 'prop-types';
import { MdCancel, MdOutlineRateReview, MdOutlineUpdate } from 'react-icons/md';
import useURL from '../../../Hooks/useURL/useURL';

const MyBookingsPageRows = ({booking, indx}) => {
    const url = useURL();

    const {_id, room_id, price, image, offers} = booking;

    const handleBookingCancel =(id) => {
        const cancleDetails = {date: "", availability: true, user_email:""}
        fetch(`${url}/rooms/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails),
        })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0){
                toast.success('booking Successful!');
                reset();
            }
          })
    }
    return (
        <tr>
            <th className="border-2 text-lg">
                <h1>{indx+1}</h1>
            </th>
            <td className="border-2 text-lg">
                <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="border-2 text-lg">
                {room_id}
            </td>
            <td className="border-2 text-lg">
               ${price-1000}
            </td>
            <td className="border-2 text-lg">
                {offers}
            </td>
            <th className="border-2 text-lg">
                <div className='flex justify-center items-center gap-3'>
                    <button className="btn btn-sm btn-outline btn-success tooltip text-xl" data-tip='Add Review'><MdOutlineRateReview /></button>
                    <button className="btn btn-sm btn-outline btn-warning tooltip text-xl" data-tip='Update Date'><MdOutlineUpdate /></button>
                    <button onClick={()=>handleBookingCancel(_id)} className="btn btn-sm btn-outline btn-error tooltip text-xl" data-tip='Cancel Booking'><MdCancel /></button>
                </div>
            </th>
        </tr>
    );
};

MyBookingsPageRows.propTypes={
    booking: PropTypes.object,
    indx: PropTypes.number,
}
export default MyBookingsPageRows;