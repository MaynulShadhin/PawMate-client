import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/FirebaseProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser, updateUser,logout } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { fullName, email, image, password } = data
        if (password.length < 6) {
            setError('Password should be at leaast 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Must have an Uppercase letter in the password');
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError('Must have a Lowercase letter in the password')
            return
        }
        setError('')

        //create user
        createUser(email, password)
            .then(() => {
                //update user
                updateUser(fullName, image)
                    .then(() => {
                        toast.success('Sign Up Successful!')
                        logout()
                        navigate('/login')
                    })
            })
            .catch(() => {
                setError("email already in use")
            })

    }
    return (
        <div>
            <div className="flex items-center justify-center my-20">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#fffaf7] text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-gray-600">Your Name</label>
                            <input type="text"
                                {...register("fullName", { required: true })}
                                placeholder="Your name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                            {errors.fullName && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photoUrl" className="block text-gray-600">PhotoUrl</label>
                            <input type="text"
                                {...register("image", { required: true })}
                                placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                            {errors.image && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input type="password"
                                {...register("password", { required: true })}
                                placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        {
                            error && <p className="text-red-600 text-center mb-2">{error}</p>
                        }
                        <input className="block w-full p-3 text-center rounded-sm text-white bg-[#F07C3D] cursor-pointer" type="submit" value="Sign Up" />
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                        <p className="px-3 text-sm text-gray-600">+</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                    </div>
                    <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                        <Link className="text-[#F07C3D] font-bold" to="/login"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;