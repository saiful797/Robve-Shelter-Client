import PropTypes from 'prop-types';

const BookingRoomModal = ({id}) => {
    console.log(id);

    return (
        <div>
            <h1 className='text-center font-bold'>ID: {id}</h1>
        </div>
    );
};

BookingRoomModal.propTypes={
    id: PropTypes.string,
}
export default BookingRoomModal;