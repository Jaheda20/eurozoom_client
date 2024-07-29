import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-10">
                <div className="p-4 md:w-2/3">
                    <ContactForm></ContactForm>
                </div>
                <div className="md:w-1/3">
                    <h1>info</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;