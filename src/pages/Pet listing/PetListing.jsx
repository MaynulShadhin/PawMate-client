import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PetCard from "./Components/PetCard";
import { useQuery } from "@tanstack/react-query";

const PetListing = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const axiosPublic = useAxiosPublic()
    const { data: pets = [] } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosPublic.get('/pets')
            return res.data;
        }
    })
    const sortedPets = pets
        .filter(pet => pet.pet_name?.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(pet => selectedCategory ? pet.pet_category === selectedCategory : true)
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Adopt a Pet</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border border-gray-400 rounded-md py-2 px-4 mr-2"
                />
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-400 rounded-md py-2 px-4"
                >
                    <option value="">All Categories</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Fish">Fish</option>
                    <option value="Rabbit">Rabbit</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedPets.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                }
            </div>
        </div>
    );
};

export default PetListing;