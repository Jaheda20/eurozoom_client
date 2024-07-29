import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
    return (
        <div>
            <div className="max-w-2xl">
            <h3 className="font-extrabold text-lg text-blue-800">SEND US EMAIL</h3>
            <h1 className="text-3xl lg:text-5xl font-bold mt-6 md:leading-9 text-slate-600">Connect with Our Support Team</h1>

            </div>
            

            <div className="card w-full max-w-3xl mt-10">
                <form className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-slate-600 text-lg">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-slate-600 text-lg mt-4">Telephone</span>
                        </label>
                        <input type="number" placeholder="Your Mobile Number" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-slate-600 text-lg mt-4">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-48" placeholder="Your Message"></textarea>
                    </div>
                    
                    <div className="mt-10 mb-20 flex items-end justify-end">
                        <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-800 rounded-lg group">
                            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-slate-600 group-hover:w-full "></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span className="relative flex items-center gap-2">
                            <IoMdMail size={24} className="text-white"/>

                                SUBMIT</span>
                

                        </button>
                    
                    </div>
                </form>
            </div>


        </div>
    );
};

export default ContactForm;