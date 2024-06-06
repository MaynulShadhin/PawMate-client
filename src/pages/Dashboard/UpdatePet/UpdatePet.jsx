import { useContext } from "react";
import { AuthContext } from "../../../Provider/FirebaseProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select'
import { useLoaderData } from "react-router-dom";

const petCategories = [
    { value: 'Dog', label: 'Dog' },
    { value: 'Cat', label: 'Cat' },
    { value: 'Bird', label: 'Bird' },
    { value: 'Rabbit', label: 'Rabbit' },
    { value: 'Fish', label: 'Fish' }
];
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdatePet = () => {
    const {pet_name,pet_age,pet_category,pet_location,short_description,long_description} = useLoaderData()
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div>
                <h2 className="text-4xl font-semibold">Update A Pet</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Pet Image</label>
                        <input type="file"
                            {...register('image', { required: true })}
                            className="w-full px-3 py-2 border rounded" />
                        {errors.image && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Pet Name</label>
                        <input {...register('name', { required: 'Pet name is required' })} 
                        defaultValue={pet_name}
                        className="w-full px-3 py-2 border rounded" />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Pet Age</label>
                        <input type="number" {...register('age', { required: 'Pet age is required' })} 
                        defaultValue={pet_age}
                        className="w-full px-3 py-2 border rounded" />
                        {errors.age && <p className="text-red-500 text-xs italic">{errors.age.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Pet Category</label>
                        <Controller
                            name="category"
                            control={control}
                            rules={{ required: 'Pet category is required' }}
                            defaultValue={pet_category}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={petCategories}
                                    className="w-full"
                                    onChange={(option) => field.onChange(option.value)}
                                    value={petCategories.find(option => option.value === field.value)}
                                />
                            )}
                        />
                        {errors.category && <p className="text-red-500 text-xs italic">{errors.category.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Pet Location</label>
                        <input {...register('location', { required: 'Pet location is required' })}
                        defaultValue={pet_location}
                        className="w-full px-3 py-2 border rounded" />
                        {errors.location && <p className="text-red-500 text-xs italic">{errors.location.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Short Description</label>
                        <input {...register('shortDescription', { required: 'Short description is required' })} 
                        defaultValue={short_description}
                        className="w-full px-3 py-2 border rounded" />
                        {errors.shortDescription && <p className="text-red-500 text-xs italic">{errors.shortDescription.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Long Description</label>
                        <textarea {...register('longDescription', { required: 'Long description is required' })} 
                        defaultValue={long_description}
                        className="w-full px-3 py-2 border rounded" />
                        {errors.longDescription && <p className="text-red-500 text-xs italic">{errors.longDescription.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-[#F07C3D] text-white font-bold py-2 px-4 rounded hover:bg-[#f3732e]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePet;