import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useContext, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/FirebaseProvider';
import { useQuery } from '@tanstack/react-query';

const MyAddedPet = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const { refetch, data: pets = [] } = useQuery({
        queryKey: ['pets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pets?email=${user.email}`);
            return res.data
        }
    })

    //delete option
    const handleDelete = (petId) => {
        // Call deletePet mutation
        console.log(petId)
    };

    const { table } = useReactTable({
        data: pets,
        columns: [
            { Header: 'Pet Image', accessor: 'pet_image', Cell: flexRender('pet_image') },
            { Header: 'Pet Name', accessor: 'pet_name' },
            { Header: 'Pet Age', accessor: 'pet_age' },
            { Header: 'Pet Category', accessor: 'pet_category' },
            { Header: 'Adopted', accessor: 'adopted' },
            { Header: 'Date Added', accessor: 'dateAdded' },
            { Header: 'Actions', accessor: 'actions', Cell: flexRender('actions', { onDelete: handleDelete }) }
        ]
    });

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adopted</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap"><img src={pet.pet_image} alt={pet.pet_name} className="h-10 w-10 rounded-full" /></td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_age} Years</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_category}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.adopted ? 'Adopted' : 'Not Adopted'}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><button onClick={() => handleDelete(pet._id)} className="text-red-600 hover:text-red-900">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAddedPet;