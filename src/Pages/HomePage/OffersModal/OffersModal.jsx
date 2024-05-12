import PropTypes from 'prop-types';
import { RxCrossCircled } from 'react-icons/rx';

const OffersModal = ({onClose}) => {
    return (
        <div className="fixed inset-0 flex justify-end items-end bg-opacity-0 z-50">
            <div className="glass rounded-lg p-4 max-w-md relative">
                <h2 className="text-2xl font-bold mb-4 text-stone-700">Today`s offer! <span className='text-3xl text-yellow-500'>Get 20%</span> discount</h2>
                <img className='w-38' src="https://i.postimg.cc/bJ02g0xj/17.jpg" alt="" />
                <button onClick={onClose} className="text-white font-bold py-2 px-4 rounded absolute top-0 -right-2">
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