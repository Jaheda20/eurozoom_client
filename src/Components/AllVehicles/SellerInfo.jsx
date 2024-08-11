import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the default marker icon not showing up
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});



const SellerInfo = ({ vehicle }) => {

    const [showNumber, setShowNumber] = useState(false);


    const handleToggle = () => {
        setShowNumber(!showNumber)
    }
    const maskedNumber = vehicle.private_seller_info?.phone_number.replace(/.(?=.{4})/g, '*');


    const vehicleLocation = [vehicle.latitude || 51.505, vehicle.longitude || -0.09];

    return (
        <div className="md:w-1/3 p-4 bg-slate-50 flex flex-col md:mt-20">

            <div className="flex gap-4">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-blue-700 text-lg ">{vehicle.private_seller_info?.name}</h1>
                    <p className="mt-2 text-slate-500">Private Seller</p>
                    <div className="divider"></div>

                </div>

            </div>
            <p className="text-blue-700 py-8 flex items-center justify-start gap-4 shadow-xl rounded-lg bg-slate-100 px-4"><BsTelephoneFill size={24} />
                <span className="text-slate-500">
                    {showNumber ? vehicle.private_seller_info?.phone_number : maskedNumber}
                </span>
                <span onClick={handleToggle} className="ml-2 text-blue-700 underline cursor-pointer">
                    {showNumber ? 'Hide Number' : 'Show Number'}
                </span>
            </p>

            <a href={`mailto:${vehicle.private_seller_info?.email}`}>
                <p className="text-blue-700 py-8 flex items-center justify-start gap-4 shadow-xl rounded-lg bg-slate-100 px-4 mt-6"><MdEmail size={24} />
                    <span className="text-slate-500 text-lg ">
                        Email to Seller
                    </span>
                </p>
            </a>
            <Link to={'/contact'}>
                <p className="text-blue-700 py-8 flex items-center justify-start gap-4 shadow-xl rounded-lg bg-slate-100 px-4 mt-6"><FaLocationArrow size={24} />
                    <span className="text-slate-500 text-lg ">
                        Contact us
                    </span>
                </p>
            </Link>

            <p className="mt-20 text-blue-700 flex items-center gap-4 ">
                <FaMapMarkerAlt size={24}/>
                <span className="text-lg text-slate-500 font-bold">
                    {vehicle.location}
                </span>

            </p>
            <div className="mt-6">
                <MapContainer center={vehicleLocation} zoom={13} style={{ height: "600px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={vehicleLocation}>
                        <Popup>
                            Vehicle Location
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    );
};

export default SellerInfo;