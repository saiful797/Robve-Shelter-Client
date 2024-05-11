import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpecificRoom = ({room}) => {
    const {_id, image, price } = room;
    return (
        <Link to={`/roomDetails/${_id}`} className="tooltip" data-tip="Click for View Detail">
            <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Room image" /></figure>
                <div className="">
                    <h2 className="card-title">
                        Total Reviews: 0
                    </h2>
                    <p>Price(per night): {price-1000}</p>
                </div>
            </div>
        </Link>
    );
};

SpecificRoom.propTypes={
    room: PropTypes.object,
}
export default SpecificRoom;