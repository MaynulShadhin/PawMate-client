
const Contact = () => {
    return (
        <div className="mx-4 md:mx-auto container md:flex items-center justify-between my-28">
            <div>
                <h2 className="font-semibold text-2xl">Get <span className="text-[#F07C3D]">Love</span> in your Inbox</h2>
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <div className=" md:w-[400px] mt-4">
                        <input id="email" type="email" placeholder="Enter Your Email" className="w-full outline-0 border-0 rounded-md py-4 bg-[#fdf2ec]" />
                    </div>
                    <div>
                        <button className="bg-[#F07C3D] text-white px-2 py-4 mt-4 font-medium rounded-r-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;