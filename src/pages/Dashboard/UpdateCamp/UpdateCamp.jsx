import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateCamp = () => {
    const { _id, petName, maxDonation, lastDate, shortDescription, longDescription } = useLoaderData()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const donationData = {
                pet_image: res.data.data.display_url,
                petName: data.petName,
                maxDonation: parseInt(data.maxDonation),
                lastDate: data.lastDate,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
            }
            const donationRes = await axiosSecure.patch(`/updateDonation-camp/${_id}`, donationData);
            if (donationRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.petName} is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data)
    }
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl mb-4 text-center font-bold">Update Donation Campaign</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Pet Picture
                        </label>
                        <input
                            id="image"
                            type="file"
                            {...register("image", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="petName">
                            Pet Name
                        </label>
                        <input
                            id="petName"
                            defaultValue={petName}
                            type="text"
                            {...register("petName", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter Pet name"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">Pet name is required.</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxDonation">
                            Maximum Donation Amount
                        </label>
                        <input
                            id="maxDonation"
                            defaultValue={maxDonation}
                            type="number"
                            {...register("maxDonation", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter maximum donation amount"
                        />
                        {errors.maxDonation && <p className="text-red-500 text-xs italic">Maximum donation amount is required.</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastDate">
                            Last Date of Donation
                        </label>
                        <input
                            id="lastDate"
                            defaultValue={lastDate}
                            type="date"
                            {...register("lastDate", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.lastDate && <p className="text-red-500 text-xs italic">Last date of donation is required.</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
                            Short Description
                        </label>
                        <input
                            id="shortDescription"
                            defaultValue={shortDescription}
                            type="text"
                            {...register("shortDescription", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter short description"
                        />
                        {errors.shortDescription && <p className="text-red-500 text-xs italic">Short description is required.</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longDescription">
                            Long Description
                        </label>
                        <textarea
                            id="longDescription"
                            defaultValue={longDescription}
                            {...register("longDescription", { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter long description"
                            rows="4"
                        ></textarea>
                        {errors.longDescription && <p className="text-red-500 text-xs italic">Long description is required.</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <input className="w-full bg-[#F07C3D] text-white font-bold py-2 px-4 rounded hover:bg-[#f3732e] cursor-pointer" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;