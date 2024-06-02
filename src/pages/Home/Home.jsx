import AboutUs from "./Components/About Us/AboutUs";
import Banner from "./Components/Banner";
import CallToAction from "./Components/Call to action/CallToAction";
import PetCategory from "./Components/Pet Category/PetCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetCategory></PetCategory>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;