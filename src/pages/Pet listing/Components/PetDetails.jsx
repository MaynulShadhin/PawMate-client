import { useLoaderData } from "react-router-dom";

const PetDetails = () => {
    const pet = useLoaderData()
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={pet.pet_image} alt={pet.pet_name} className="w-full h-96 object-cover" />
                <div className="px-6 py-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{pet.pet_name}</h2>
                    <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Age:</span> {pet.pet_age}</p>
                    <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Category:</span> {pet.pet_category}</p>
                    <p className="text-xl text-gray-600 mb-4"><span className="font-bold">Location:</span> {pet.pet_location}</p>
                    <p className="text-lg text-gray-800 mb-6">{pet.short_description}</p>
                    <p className="text-lg text-gray-800 mb-6">{pet.long_description}</p>
                    <button className='block w-full md:w-auto text-white bg-[#F07C3D] px-8 py-3 font-semibold rounded-sm hover:bg-[#f3732e] hover:scale-105 ease-in duration-100 mt-4 md:mt-0'>Adopt</button>
                </div>
            </div>
        </div>

    );
};

export default PetDetails;