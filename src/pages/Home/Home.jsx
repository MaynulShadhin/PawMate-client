import AboutUs from "./Components/About Us/AboutUs";
import Banner from "./Components/Banner";
import CallToAction from "./Components/Call to action/CallToAction";
import Contact from "./Components/ContactUs/Contact";
import HappyClient from "./Components/HappyClient/HappyClient";
import PetCategory from "./Components/Pet Category/PetCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;