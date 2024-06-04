import { useEffect, useState } from "react";
import PetCard from "./Components/PetCard";

const PetListing = () => {
    const [pets, setPets] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/pets`)
        .then(res=>res.json())
        .then(data=>setPets(data))
    },[])
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Adopt a Pet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    pets.map(pet=> <PetCard key={pet._id} pet={pet}></PetCard>  )
                }
            </div>
        </div>
    );
};

export default PetListing;