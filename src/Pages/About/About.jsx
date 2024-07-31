import AboutCover from "./AboutCover";
import AboutDes from "./AboutDes";
import OurServices from "./OurServices";
import ServiceCards from "./ServiceCards";
import Team from "./Team";

const About = () => {
    return (
        <div className="w-full mx-auto">
            <AboutCover></AboutCover>
            <AboutDes></AboutDes>
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-6 my-12">
                <div className="p-4 md:px-0 md:w-1/2">
                    <OurServices></OurServices>
                </div>
                <div className="p-4 md:px-0 md:w-1/2">
                    <ServiceCards></ServiceCards>
                </div>
            </div>
            <Team></Team>
        </div>
    );
};

export default About;