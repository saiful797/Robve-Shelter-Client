import PropTypes from 'prop-types';
import { RxCrossCircled } from 'react-icons/rx';

const OffersModal = ({onClose}) => {
    return (
        <div className="fixed inset-[20px] flex justify-end items-center bg-gray-800 bg-opacity-0 z-50">
            <div className="glass rounded-lg p-8 max-w-md">
                <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
                {/* Add your special offers content here */}
                <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
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