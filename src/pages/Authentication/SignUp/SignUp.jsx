import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="flex items-center justify-center my-20">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-600">Email</label>
                            <input type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-600">Your Name</label>
                            <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photoUrl" className="block text-gray-600">PhotoUrl</label>
                            <input type="text" name="photoUrl" id="photoUrl" placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-[#F07C3D]" />
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-white bg-[#F07C3D]">Sign in</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                        <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
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