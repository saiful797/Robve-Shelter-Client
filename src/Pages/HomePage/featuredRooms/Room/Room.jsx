import PropTypes from 'prop-types';

const Room = ({room}) => {
    const {image, description} = room;
    return (
        <div className="card w-[350px] h-[650px] bg-blue-950 mx-auto">
            <figure><img className='h-72 w-full' src={image} alt="room image"/></figure>
            <div className="card-body">
                <p className='text-white'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

Room.propTypes ={
    room: PropTypes.object,
}
export default Room;