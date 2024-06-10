import useAxiosPublic from "../../hooks/useAxiosPublic";
import DonateCard from "./Component/DonateCard";
import { useQuery } from "@tanstack/react-query";

const DonationCamp = () => {
    const axiosPublic = useAxiosPublic()
    const { data: donations = [] } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donation-camps')
            return res.data;
        }
    })

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold my-12">Donate For Pet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                {
                    donations.map(donation => <DonateCard key={donation._id} donation={donation}></DonateCard>)
                }
            </div>
        </div>
    );
};

export default DonationCamp;