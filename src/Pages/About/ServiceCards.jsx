
const ServiceCards = () => {
    return (
        <div className="grid grid-cols-2 gap-5 grid-rows-9">
            {/* card 1 */}
            <div className="row-start-1 row-span-4 bg-slate-200 ">               
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />                
                <div className="">
                    <h2 className="my-10 text-center font-semibold text-lg">Service 1</h2>                  
                </div>
            </div>
            {/* card 2 */}
            <div className="row-start-2 row-span-4 bg-slate-200">               
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />                
                <div className="">
                    <h2 className="my-10 text-center font-semibold text-lg">Service 2</h2>                  
                </div>
            </div>
            {/* card 3 */}
            <div className="row-start-5 row-span-4 bg-slate-200">               
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />                
                <div className="">
                    <h2 className="my-10 text-center font-semibold text-lg">service 3</h2>                  
                </div>
            </div>
            {/* card 4 */}
            <div className="row-start-6 row-span-4 bg-slate-200">               
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />                
                <div className="">
                    <h2 className="my-10 text-center font-semibold text-lg">service 4</h2>                  
                </div>
            </div>



        </div>
    );
};

export default ServiceCards;