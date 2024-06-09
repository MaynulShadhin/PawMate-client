import { useLoaderData } from "react-router-dom";
import DonateModal from "./DonateModal";
import { useState } from "react";

const DonationDetails = () => {
    const donation = useLoaderData()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDonation = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="bg-gray-100 py-20">
            <div className="max-w-4xl mx-auto">
                <div key={donation._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={donation.pet_image} alt={donation.pet_name} className="w-full h-72 object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">{donation.pet_name}</h2>
                        <p className="text-gray-600 mb-2"><span className="font-bold">Max Donation Amount:</span> ${donation.max_donation_amount}</p>
                        <p className="text-gray-600 mb-2"><span className="font-bold">Donated Amount:</span> ${donation.donated_amount}</p>
                        {/* Displaying Date */}
                        {/* <p className="text-gray-600 mb-4"><span className="font-bold">Date:</span> {formatDate(donation.created_at)}</p> */}
                        <button onClick={handleDonation} className="block w-full bg-[#F07C3D] text-white py-2 px-4 rounded hover:bg-[#ee6c26]">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && <DonateModal setIsModalOpen={setIsModalOpen}></DonateModal>}
        </div>
    );
};

export default DonationDetails;