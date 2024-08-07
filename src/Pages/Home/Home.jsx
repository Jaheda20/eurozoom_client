import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import HomeAbout from "./HomeAbout";
import SaleContact from "./SaleContact";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>            
            <HomeAbout></HomeAbout>
            <Services></Services>
            <SaleContact></SaleContact>

            
        </div>
    );
};

export default Home;