import { useEffect } from "react";
import { useState } from "react";
import DonateCard from "./Component/DonateCard";

const DonationCamp = () => {
    const [donations, setDonations] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/donation-camp`)
        .then(res=>res.json())
        .then(data=>setDonations(data))
    },[])
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Donate For Pet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                    donations.map(donation => <DonateCard key={donation._id} donation={donation}></DonateCard>)
                }
            </div>
        </div>
    );
};

export default DonationCamp;