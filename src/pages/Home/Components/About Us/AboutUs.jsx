import aboutUsImage from "../../../../assets/about us.jpg"
const AboutUs = () => {
    return (
        <div>
            <section className="bg-[#F07C3D] bg-opacity-5 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <img src={aboutUsImage} alt="About Us" className="w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-10">
                            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                            <p className="text-gray-700 mb-6">Welcome to our website! We are passionate about connecting pets with loving homes and helping people find their perfect companions. Our mission is to make the adoption process easier and more accessible for everyone.</p>
                            <p className="text-gray-700 mb-6">Our website was founded with the goal of addressing the challenges and barriers faced by both pet adopters and shelters. We believe that every pet deserves a loving home, and we are committed to making that a reality.</p>
                            <p className="text-gray-700 mb-6">At our core, we are driven by a love for animals and a desire to make a positive impact in the world. We are dedicated to providing a seamless and enjoyable experience for both pets and their new families.</p>
                            <p className="text-gray-700 mb-6">Thank you for visiting our website and for considering adoption. Together, we can make a difference in the lives of countless pets and people!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;