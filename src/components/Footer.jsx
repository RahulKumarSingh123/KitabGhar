import { FaEnvelope, FaFacebook, FaMailchimp, FaMapMarker, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaCopyright, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className=" justify-between flex flex-col w-vw min-h-92 p-5 bg-amber-200 dark:bg-gray-900 dark:text-white">
            <div className="w-full flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/3 h-full gap-4 p-5 items-center justify-center">
                    <h3 className="text-xl font-bold">About Us</h3>
                    <p >We are one of the most trusted Books Selling Firms in India,we offer a rich variety of Books which are genuine and at the best possible price al over India.We are home to Interantional Books and Magazines too.We would love to fulfill your search for your books. </p>
                </div>
                <div className="flex flex-col md:w-1/3 h-full gap-4 p-5 items-center">
                    <h3 className="text-xl font-bold">Follow Us</h3>
                    <div className=" flex gap-5">
                        <FaInstagram className="text-xl cursor-pointer"></FaInstagram>
                        <FaTwitter className="text-xl cursor-pointer"></FaTwitter>
                        <FaWhatsapp className="text-xl cursor-pointer"></FaWhatsapp>
                        <FaFacebook className="text-xl cursor-pointer"></FaFacebook>
                    </div>
                    
                </div>
                <div className="flex flex-col md:w-1/3 h-full gap-4 p-5 items-center">
                    <h3 className="text-xl font-bold">Contact Us</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <FaMapMarkerAlt className="size-7"></FaMapMarkerAlt>
                            <p>Road No. 6,Sankosai,Dimna Road,Mango,Jamshedpur,Jharkhand</p>
                        </div>
                        <div className="flex gap-2">
                            <FaEnvelope className="size-6"></FaEnvelope>
                            <p>kitabghar98@gmail.com</p>
                        </div>
                        <div className="flex gap-2">
                            <FaPhone className="size-6"></FaPhone>
                            <p>+91 89374665XX</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-10 flex justify-center items-center gap-1 text-gray-700">
                <p>Copyright </p>
                <FaCopyright></FaCopyright>
                <p> 2000 KitabGhar | All Rights Reserved</p>
            </div>
        </div>
    )
}