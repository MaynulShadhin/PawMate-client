import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { MdDelete, MdEditSquare } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AllPets = () => {
    const axiosPublic = useAxiosPublic()

    const { data: pets = [], refetch } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosPublic.get('/pets')
            return res.data
        }
    })
    //delete option
    const handleDelete = (petId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await useAxiosSecure.delete(`${import.meta.env.VITE_API_URL}/pet/${petId}`)
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch()
                }
                catch (err) {
                    toast.error(err.message)
                }

            }
        })
    };

    //adoption status change
    const handleAdoptionStatusChange = async (id, newStatus) => {
        try {
            await axiosPublic.put(`/pet/toggleAdoption/${id}`, { adopted: newStatus });
            refetch();
        } catch (error) {
            console.error("Error updating pet status:", error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">All Pets</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pets.map(pet => (
                        <tr key={pet._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_age}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_category}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_location}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link to={`/dashboard/updatePet/${pet._id}`}>
                                    <button>
                                        <MdEditSquare className='text-2xl mr-4'></MdEditSquare>
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(pet._id)} className="text-red-600 hover:text-red-900">
                                    <MdDelete className='text-2xl mr-4'></MdDelete>
                                </button>
                                <button className='bg-[#F07C3D] text-white px-2 py-1 font-medium rounded-md' onClick={() => handleAdoptionStatusChange(pet._id, !pet.adopted)}>
                                    {pet.adopted ? "Adopted" : "Not Adopted"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllPets;