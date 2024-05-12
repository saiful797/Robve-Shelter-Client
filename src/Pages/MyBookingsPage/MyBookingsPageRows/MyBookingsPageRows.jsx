import PropTypes from 'prop-types';

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
                <div>
                    <button className="btn btn-ghost btn-xs">details</button>
                    <button className="btn btn-ghost btn-xs">details</button>
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