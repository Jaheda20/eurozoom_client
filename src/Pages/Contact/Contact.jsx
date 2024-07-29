import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-14">
                <div className="p-4 md:w-3/5">
                    <ContactForm></ContactForm>
                </div>
                <div className="p-4 md:w-2/5">
                    <ContactInfo></ContactInfo>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;