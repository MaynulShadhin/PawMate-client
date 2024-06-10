import useAxiosPublic from "../../hooks/useAxiosPublic";
import PetCard from "./Components/PetCard";
import { useQuery } from "@tanstack/react-query";

const PetListing = () => {
    const axiosPublic = useAxiosPublic()
    const {data: pets=[]} = useQuery({
        queryKey: ['pets'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/pets')
            return res.data;
        }
    })
    const sortedPets = pets.slice().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Adopt a Pet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedPets.map(pet=> <PetCard key={pet._id} pet={pet}></PetCard>  )
                }
            </div>
        </div>
    );
};

export default PetListing;