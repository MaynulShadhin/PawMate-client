import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/FirebaseProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [error, setError] = useState('')
    const { signInUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data
        try {
            const result = await signInUser(email, password)
            console.log(result.user)
            toast.success("Login Successful")
        }
        catch (err) {
            console.log(err)
            setError('Please check your email and password')
        }
    }

    return (
        <div className="flex items-center justify-center my-20">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#fffaf7] text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email"
                            {...register("email", { required: true })}
                            placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password"
                            {...register("password", { required: true })} placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                        {errors.password && <span className="text-red-600">This field is required</span>}
                    </div>
                    {
                        error && <p className="text-red-600 text-center mb-2">{error}</p>
                    }
                    <input className="cursor-pointer block w-full p-3 text-center rounded-sm text-white bg-[#F07C3D]" type="submit" value="Login" />
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300">

                    </div>
                </div>
                <div className="flex justify-center space-x-4">
                    <FaGoogle className="text-2xl mr-4"></FaGoogle>
                    <FaTwitter className="text-2xl"></FaTwitter>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Do not have an account?
                    <Link className="text-[#F07C3D] font-bold" to="/signUp"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;