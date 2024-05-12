import PropTypes from 'prop-types';
import { MdCancel, MdOutlineRateReview, MdOutlineUpdate } from 'react-icons/md';

const MyBookingsPageRows = ({booking, indx}) => {

    const {room_id, price, image, offers} = booking;
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
                    <button className="btn btn-sm btn-outline btn-error tooltip text-xl" data-tip='Cancle Booking'><MdCancel /></button>
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