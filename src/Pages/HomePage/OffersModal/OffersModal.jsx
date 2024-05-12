import PropTypes from 'prop-types';
import { RxCrossCircled } from 'react-icons/rx';

const OffersModal = ({onClose}) => {
    return (
        <div className="fixed inset-0 flex justify-start items-end bg-opacity-0 z-50">
            <div className="lg:ml-[150px] bg-white rounded-lg p-4 max-w-md relative">
                <h2 className="text-2xl font-bold text-stone-700">Today`s offer! <span className='text-3xl text-yellow-500'>Get 20%</span> discount</h2>
                <p className='text-xl font-mono'>Book Your Booking Now!</p>
                <img className='w-38' src="https://i.postimg.cc/bJ02g0xj/17.jpg" alt="" />
                <button onClick={onClose} className="text-black font-bold py-4 px-4 rounded-full absolute top-0 right-0">
                    <RxCrossCircled />
                </button>
            </div>
        </div>
    );
};

OffersModal.propTypes={
    onClose: PropTypes.func.isRequired,
}

export default OffersModal;