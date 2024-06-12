import PropTypes from 'prop-types';
const Clients = ({ name, image, comment }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-96 object-fill" src={image} alt={name} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600">{comment}</p>
                </div>
            </div>
        </div>
    );
};
Clients.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
};
export default Clients;