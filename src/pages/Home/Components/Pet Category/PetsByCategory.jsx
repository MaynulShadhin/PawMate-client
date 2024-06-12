import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";

const PetsByCategory = () => {
    const { categoryName } = useParams();
    const [pets, setPets] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchPetsByCategory = async () => {
            try {
                const res = await axiosPublic.get(`/pets/category/${categoryName}`);
                setPets(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPetsByCategory();
    }, [categoryName, axiosPublic]);
    return (
        <div className="container my-28 mx-auto">
            <h2 className="text-4xl text-center font-semibold mb-12">{categoryName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map((pet) => (
                    <div key={pet._id} className="border p-4 rounded">
                        <img src={pet.pet_image} alt={pet.pet_name} className="w-full h-60 rounded-lg shadow-xl object-cover mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{pet.pet_name}</h3>
                        <p>{pet.short_description}</p>
                        <Link to={`/petDetails/${pet._id}`}>
                        <button className="bg-[#F07C3D] hover:bg-[#ee6c26] text-white font-bold py-2 px-4 rounded mt-4">
                            View Details
                        </button>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetsByCategory;