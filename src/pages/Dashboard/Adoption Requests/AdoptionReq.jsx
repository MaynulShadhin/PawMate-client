import { useContext } from "react";
import { AuthContext } from "../../../Provider/FirebaseProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AdoptionReq = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: adoptionRequests = [], refetch } = useQuery({
        queryKey: ['user-adoption-requests', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/adoption-requests/${user?.email}`)
            return res.data
        }
    })
    const handleAccept = async (id) => {
        try {
            const { data } = await axiosSecure.put(`/adoption/accept/${id}`);
            if (data.adopted) {
                toast.success("Request accepted for adopting the pet");
                refetch();
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to accept the request");
        }
    }
    const handleReject = async (id) => {
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
                    const { data } = await axiosSecure.delete(`${import.meta.env.VITE_API_URL}/adoption/reject/${id}`)
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
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Pet Image</th>
                            <th className="py-3 px-4 text-left">Pet Name</th>
                            <th className="py-3 px-4 text-left">Requester Name</th>
                            <th className="py-3 px-4 text-left">Requester Email</th>
                            <th className="py-3 px-4 text-left">Phone Number</th>
                            <th className="py-3 px-4 text-left">Location</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adoptionRequests.map((request) => (
                            <tr key={request._id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <img src={request.petImage} alt={request.petName} className="w-16 h-16 object-cover rounded-md" />
                                </td>
                                <td className="py-3 px-4">{request.petName}</td>
                                <td className="py-3 px-4">{request.userName}</td>
                                <td className="py-3 px-4">{request.adopterEmail}</td>
                                <td className="py-3 px-4">{request.adopterPhone}</td>
                                <td className="py-3 px-4">{request.adopterAddress}</td>
                                <td className="py-3 px-4">
                                    <button onClick={() => handleAccept(request._id)}
                                        disabled={request.adopted}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 mr-2">
                                        {request.adopted ? "Adopted" : "Accept"}
                                    </button>
                                    <button onClick={() => handleReject(request._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdoptionReq;