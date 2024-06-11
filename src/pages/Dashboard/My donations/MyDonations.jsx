import { useContext } from "react";
import { AuthContext } from "../../../Provider/FirebaseProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: donates = [], refetch } = useQuery({
        queryKey: ['user-donates', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/donates/${user?.email}`)
            return res.data;
        }
    })

    const handleRefund = async (id) => {
        try {
            await axiosSecure.delete(`/donate/${id}`);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Donation refunded successfully',
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
        }
        catch(err){
            console.log('error processing refund', err)
        }
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">My Donations</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Pet Image</th>
                            <th className="py-3 px-4 text-left">Pet Name</th>
                            <th className="py-3 px-4 text-left">Donated Amount</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donates.map((donate) => (
                            <tr
                                key={donate._id}
                                className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <img
                                        src={donate.pet_image}
                                        alt={donate.petName}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>
                                <td className="py-3 px-4">{donate.petName}</td>
                                <td className="py-3 px-4">${donate.donatedAmount}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleRefund(donate._id)}
                                        className="bg-[#F07C3D] text-white px-4 py-2 rounded-md hover:bg-[#ff9258] transition duration-300"
                                    >
                                        Ask for Refund
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonations;