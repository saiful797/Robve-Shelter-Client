import PropTypes from 'prop-types';

const SpecificRoom = ({room}) => {
    const {_id,image } = room;
    return (
        <div className="card w-80 mx-auto bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Total Reviews: 0
                </h2>
            </div>
        </div>
    );
};

SpecificRoom.propTypes={
    room: PropTypes.object,
}
export default SpecificRoom;